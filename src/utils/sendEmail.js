import nodemailer from 'nodemailer'


export const sendEmail = async ({from = process.env.EMAIL, to, cc, bcc, subject, text, html, attachments = []} = {}) => {

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const info = await transporter.sendMail({
        from: `"Sarahah" <${from}>`,
        to,
        cc,
        bcc,
        subject,
        text,
        html,
        attachments,
    });

}