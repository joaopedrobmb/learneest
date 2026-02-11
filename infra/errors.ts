export class InternalServerError extends Error {
  statusCode: any;
  action: any;
  constructor({ cause }) {
    super("An unexpected internal error occurred.", {
      cause,
    });

    this.name = "InternalServerError";
    this.action = "Please contact support.";
    this.statusCode = 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class MethodNotAllowedError extends Error {
  statusCode: any;
  action: any;
  constructor() {
    super("Method not allowed for this endpoint.");

    this.name = "MethodNotAllowedError";
    this.action = "Verify if this HTTP method is valid for this endpoint.";
    this.statusCode = 405;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
