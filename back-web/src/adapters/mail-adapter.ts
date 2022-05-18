export interface sendMail {
	subject: string;
	body: string;
}

export interface MailAdapter {
	sendMail: (data: sendMail) => Promise<void>;
}
