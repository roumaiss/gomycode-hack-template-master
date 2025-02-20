import { Router } from "express";

import nodemailer from "nodemailer";

const contactRoute = new Router();

contactRoute.get("/", (_req, res) => {
    res.json({ message: "contact page" });
});

contactRoute.post("/", (req, res) => {
    const { subject, email, message } = req.body;
    // Configure Nodemailer transporter for sending emails

    // Create a transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // use false for STARTTLS; true for SSL on port 465
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    // Configure the mailoptions object
    const mailOptions = {
        from: email,
        to: process.env.EMAIL ,
        subject: subject,
        text: `${message} from ${email}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(500).json({ error: error.message });
            console.log("Error:", error);
        } else {
            res.status(200).json({ message: "Email sent successfully" });
            console.log("Email sent: ", info.response);
        }
    });
});

export default contactRoute;

// In your frontend, you can send a POST request to the '/contact' endpoint with the required data.
