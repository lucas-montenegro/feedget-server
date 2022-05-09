import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "5d18f0f39943bf",
        pass: "f7f0bdc34e0cbf"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe de Feedget <oi@feedget.com>',
            to: 'Lucas M. <batata@gmail.com>',
            subject,
            html: body,
        })
    }
}