import dayjs from "dayjs";
import { createRequire } from "module";
import { sendReminderEmail } from "../utils/send-email.js";
const require = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");
import Subscription from "../models/subscription.model.js";

const REMINDERS = [7, 5, 2, 1];

export const sendReminders = serve(async (context) => {
  const { subscriptionId } = context.requestPayload;
  const subscription = await fetchSubscription(context, subscriptionId);

  if (!subscription || subscription.status !== "active") return;

  const renewalDate = dayjs(subscription.renewalDate);

  if (renewalDate.isBefore(dayjs())) {
    console.log(
      `Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`
    );
    return;
  }

  for (const daysBefore of REMINDERS) {
    const reminderDate = renewalDate.subtract(daysBefore, "day");

    if (reminderDate.isAfter(dayjs())) {
      await sleepUntilReminder(
        context,
        `Reminder ${daysBefore} days before`,
        reminderDate
      );
    }

    await triggerReminder(
      context,
      `${daysBefore} days before reminder`,
      subscription,
      daysBefore
    );
  }
});

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("get subscription", async () => {
    return Subscription.findById(subscriptionId).populate("user", "name email");
  });
};

const sleepUntilReminder = async (context, label, date) => {
  console.log(`Sleeping until ${label} reminder at ${date}`);
  await context.sleepUntil(label, date.toDate());
};

const triggerReminder = async (context, label, subscription, daysBefore) => {
  return await context.run(label, async () => {
    console.log(`Triggering ${label} reminder`);

    // Fix: Pass the correct email type based on days before
    let emailType;
    switch (daysBefore) {
      case 7:
        emailType = "subscription_reminder_7_days";
        break;
      case 5:
        emailType = "subscription_reminder_5_days";
        break;
      case 2:
        emailType = "subscription_reminder_2_days";
        break;
      case 1:
        emailType = "subscription_reminder_1_day";
        break;
      default:
        emailType = "subscription_reminder";
    }

    await sendReminderEmail({
      to: subscription.user.email,
      type: emailType, // Pass the correct email type
      subscription: subscription,
    });
  });
};
