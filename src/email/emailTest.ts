// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

type SendEmailProps = {
    name: string;
    email: string;
    asunto: string;
    mensaje: string;
}

export function sendEmail(data: SendEmailProps) {
    const userGmail = "zardero15@gmail.com";
    const passAppGmail = "izdi pfgc cfsf wtnj";
    const myEmail = "cblash14@gmail.com";

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: userGmail,
        pass: passAppGmail,
    },
    });

    // Define a route for sending emails
    // Set up email options
    const mailOptions = {
        from: userGmail,
        to: myEmail,
        subject: data.asunto,
        html: `
            <p>Nombre: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Mensaje: ${data.mensaje}</p>
        `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log("Email sent: " + info.response);
    });
}