import { createRouter } from "next-connect";
import controller from "infra/controller";
import studySession from "models/study-session.js";

const router = createRouter();

router.post(postHandler);
router.delete(deleteHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  const userInputValues = request.body;

  const newStudySession = await studySession.create(userInputValues);

  return response.status(201).json(newStudySession);
}

async function deleteHandler(request, response) {
  const userInputValues = request.body;

  const deletedStudySession = await studySession.insertDeleteStatus(
    userInputValues.id,
  );

  return response.status(200).json(deletedStudySession);
}
