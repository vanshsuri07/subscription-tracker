export const emailTemplates = [
  {
    label: "subscription_reminder_7_days",
    generateSubject: (info) =>
      `🔔 Subscription Renewal Reminder - ${info.subscriptionName} (7 days)`,
    generateBody: (info) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi ${info.userName}!</h2>
        <p>This is a friendly reminder that your <strong>${info.subscriptionName}</strong> subscription will renew in <strong>7 days</strong>.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Subscription Details:</h3>
          <p><strong>Service:</strong> ${info.subscriptionName}</p>
          <p><strong>Renewal Date:</strong> ${info.renewalDate}</p>
          <p><strong>Amount:</strong> ${info.price}</p>
          <p><strong>Payment Method:</strong> ${info.paymentMethod}</p>
        </div>
        
        <p>Make sure your payment method is up to date to avoid any interruption in service.</p>
        
        <p>Best regards,<br>Subscription Tracker Team</p>
      </div>
    `,
  },
  {
    label: "subscription_reminder_5_days",
    generateSubject: (info) =>
      `⚠️ Subscription Renewal Soon - ${info.subscriptionName} (5 days)`,
    generateBody: (info) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi ${info.userName}!</h2>
        <p>Your <strong>${info.subscriptionName}</strong> subscription will renew in <strong>5 days</strong>.</p>
        
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
          <h3>Subscription Details:</h3>
          <p><strong>Service:</strong> ${info.subscriptionName}</p>
          <p><strong>Renewal Date:</strong> ${info.renewalDate}</p>
          <p><strong>Amount:</strong> ${info.price}</p>
          <p><strong>Payment Method:</strong> ${info.paymentMethod}</p>
        </div>
        
        <p>Please ensure your payment information is current.</p>
        
        <p>Best regards,<br>Subscription Tracker Team</p>
      </div>
    `,
  },
  {
    label: "subscription_reminder_2_days",
    generateSubject: (info) =>
      `🚨 Urgent: Subscription Renewal in 2 Days - ${info.subscriptionName}`,
    generateBody: (info) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi ${info.userName}!</h2>
        <p><strong>Important:</strong> Your <strong>${info.subscriptionName}</strong> subscription will renew in just <strong>2 days</strong>!</p>
        
        <div style="background-color: #f8d7da; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc3545;">
          <h3>Subscription Details:</h3>
          <p><strong>Service:</strong> ${info.subscriptionName}</p>
          <p><strong>Renewal Date:</strong> ${info.renewalDate}</p>
          <p><strong>Amount:</strong> ${info.price}</p>
          <p><strong>Payment Method:</strong> ${info.paymentMethod}</p>
        </div>
        
        <p>This is your final reminder. Please verify your payment method now to avoid service interruption.</p>
        
        <p>Best regards,<br>Subscription Tracker Team</p>
      </div>
    `,
  },
  {
    label: "subscription_reminder_1_day",
    generateSubject: (info) =>
      `🔴 Final Notice: Subscription Renews Tomorrow - ${info.subscriptionName}`,
    generateBody: (info) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi ${info.userName}!</h2>
        <p><strong>FINAL NOTICE:</strong> Your <strong>${info.subscriptionName}</strong> subscription will renew <strong>tomorrow</strong>!</p>
        
        <div style="background-color: #721c24; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Subscription Details:</h3>
          <p><strong>Service:</strong> ${info.subscriptionName}</p>
          <p><strong>Renewal Date:</strong> ${info.renewalDate}</p>
          <p><strong>Amount:</strong> ${info.price}</p>
          <p><strong>Payment Method:</strong> ${info.paymentMethod}</p>
        </div>
        
        <p><strong>Action Required:</strong> Ensure your payment method is active and has sufficient funds.</p>
        
        <p>Best regards,<br>Subscription Tracker Team</p>
      </div>
    `,
  },
  {
    label: "subscription_reminder",
    generateSubject: (info) =>
      `Subscription Renewal Reminder - ${info.subscriptionName}`,
    generateBody: (info) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi ${info.userName}!</h2>
        <p>This is a reminder about your <strong>${info.subscriptionName}</strong> subscription renewal.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Subscription Details:</h3>
          <p><strong>Service:</strong> ${info.subscriptionName}</p>
          <p><strong>Renewal Date:</strong> ${info.renewalDate}</p>
          <p><strong>Amount:</strong> ${info.price}</p>
          <p><strong>Payment Method:</strong> ${info.paymentMethod}</p>
        </div>
        
        <p>Thank you for using our service!</p>
        
        <p>Best regards,<br>Subscription Tracker Team</p>
      </div>
    `,
  },
];
