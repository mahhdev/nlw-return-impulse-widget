import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// spies

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
	const submitFeedback = new SubmitFeedbackUseCase(
		{ create: createFeedbackSpy },
		{ sendMail: sendMailSpy }
	);

	it("should be able to submit a feedback", async () => {
		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "example comment",
				screenshot: "data:image/png;base64,dgdgzdhdgh",
			})
		).resolves.not.toThrow();

		expect(createFeedbackSpy).toHaveBeenCalled();
		expect(sendMailSpy).toHaveBeenCalled();
	});

	it("should not be able to submit a feedback without type", async () => {
		await expect(
			submitFeedback.execute({
				type: "",
				comment: "example comment",
				screenshot: "data:image/png;base64,dgdgzdhdgh",
			})
		).rejects.toThrow();
	});

	it("should not be able to submit a feedback without comment", async () => {
		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "",
				screenshot: "data:image/png;base64,dgdgzdhdgh",
			})
		).rejects.toThrow();
	});

	it("should not be able to submit a feedback with as invalid screenshot", async () => {
		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "example comment",
				screenshot: "test.png",
			})
		).rejects.toThrow();
	});
});
