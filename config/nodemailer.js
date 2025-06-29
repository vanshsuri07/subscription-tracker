import nodemailer from "nodemailer";
import { EMAIL_PASSWORD } from "./env.js";

export const accountEmail = "vanshsuri75@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: accountEmail, // Your email address
    pass: EMAIL_PASSWORD, // Your email password or app password
  },
});

export default transporter;
