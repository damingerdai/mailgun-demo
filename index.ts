import "dotenv/config";
import FormData from "form-data";
import Mailgun from "mailgun.js";

async function sendSimpleMessage() {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.API_KEY ?? "",
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net"
  });
  try {
    const data = await mg.messages.create(
      "sandbox837155331abc48cf97f6f346f316a0b5.mailgun.org",
      {
        from: "Mailgun Sandbox <postmaster@sandbox837155331abc48cf97f6f346f316a0b5.mailgun.org>",
        to: ["Arthur Ming <mingguobin@live.com>"],
        subject: "Hello Arthur Ming",
        text: "Congratulations Arthur Ming, you just sent an email with Mailgun! You are truly awesome!",
      },
    );

    console.log(data); // logs response data
  } catch (error) {
    console.log(error); //logs any error
  }
}

sendSimpleMessage();
