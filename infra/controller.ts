import { MethodNotAllowedError } from "./errors";

function onNoMatchHandler(req, res) {
  const publicErrorObject = new MethodNotAllowedError();

  res.status(publicErrorObject.statusCode).json(publicErrorObject);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
  },
};

export default controller;
