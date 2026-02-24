import { createRouter } from "next-connect";
import controller from "infra/controller.js";
import user from "models/user.js";
import authenticator from "models/authenticator";

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  const userInputValues = await request.body;

  const authenticatedUser = await authenticator.getAuthenticatedUser(
    userInputValues.email,
    userInputValues.password,
  );

  return response.status(201).json({});
}
