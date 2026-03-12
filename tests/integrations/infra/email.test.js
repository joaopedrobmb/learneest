import orchestrator from "tests/orchestrator.js";
import email from "models/email.js";

beforeAll(async () => {
  orchestrator.waitForAllServices();
  orchestrator.deleteAllEmail();
});

describe("infra/email.js", () => {
  test("send()", async () => {
    await email.send({
      from: "Learneest <contact@learneest.com>",
      to: "test@test.com",
      subject: "Test Subject",
      text: "Test body.",
    });
    await email.send({
      from: "Learneest <contact@learneest.com>",
      to: "test@test.com",
      subject: "Last email sent",
      text: "Last email body.",
    });

    const lastEmail = await orchestrator.getLastEmail();

    expect(lastEmail.sender).toBe("<contact@learneest.com>");
    expect(lastEmail.recipients[0]).toBe("<test@test.com>");
    expect(lastEmail.subject).toBe("Last email sent");
    expect(lastEmail.text).toBe("Last email body.\n");
  });
});
