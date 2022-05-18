import { MailAdapter, sendMail } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "803dce213e9cd9",
		pass: "cff532cb0c6c60",
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: sendMail) {
		const feedback = await transport.sendMail({
			from: "Equipe Feedget <hello.feedget.com>",
			to: "mahhmendes9@gamilcom",
			subject,
			html: body,
		});
	}
}
