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
