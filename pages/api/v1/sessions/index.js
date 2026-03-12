import { createRouter } from "next-connect";
import controller from "infra/controller.js";
import authenticator from "models/authenticator.js";
import session from "models/session.js";

const router = createRouter();

router.post(postHandler);
router.delete(deleteHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  const userInputValues = await request.body;

  const authenticatedUser = await authenticator.getAuthenticatedUser(
    userInputValues.email,
    userInputValues.password,
  );

  const newSession = await session.create(authenticatedUser.id);

  controller.setSessionCookie(newSession.token, response);

  return response.status(201).json(newSession);
}
async function deleteHandler(request, response) {
  const sessionToken = await request.cookies.session_id;

  const sessionObject = await session.findOneValidByToken(sessionToken);
  const expiredSession = await session.expireById(sessionObject.id);
  await controller.clearSessionCookie(response);

  return response.status(200).json(expiredSession);
}
