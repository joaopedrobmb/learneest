import { createRouter } from "next-connect";
import controller from "infra/controller";
import user from "models/user";
import studySession from "models/study-session";

const router = createRouter();

router.get(getHandler);
router.patch(patchHandler);

export default router.handler(controller.errorHandlers);

async function getHandler(request, response) {
  const studySessionId = request.query.studySessionId;

  const foundStudySessionObject =
    await studySession.findOneById(studySessionId);

  return response.status(200).json(foundStudySessionObject);
}

async function patchHandler(request, response) {
  const id = request.query.studySessionId;
  const userInputValues = request.body;

  const updatedStudySession = await studySession.update(id, userInputValues);

  return response.status(200).json(updatedStudySession);
}
