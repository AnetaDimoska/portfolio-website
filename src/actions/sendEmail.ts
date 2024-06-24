"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";


const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const senderMessage = formData.get("message");


  if ( (!senderEmail || typeof senderEmail !== "string") &&  (!senderMessage || typeof senderMessage !== "string") ) {
    return {
      error: "Invalid email address and message",
    };
  }

  if (!senderEmail || typeof senderEmail !== "string") {
    console.log("vo prv uslov");
    return {
      error: "Invalid email ",
    };
  }

  if (!senderMessage || typeof senderMessage !== "string") {
    console.log("vo vtor uslov");

    return {
      error: "Invalid message ",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "adimoska90@yahoo.com",
      subject: "New Message",
      reply_to: senderEmail,
      // text: senderMessage,
      react: React.createElement(ContactFormEmail, {
        message: senderMessage,
        senderEmail,
      }),
    });
    console.log("vo try");

  } catch (error: unknown) {
    console.log("vo error");
    return {
      error: error
    };
  }


  return data
};
