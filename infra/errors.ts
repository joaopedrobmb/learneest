export class InternalServerError extends Error {
  statusCode: any;
  action: any;
  constructor({ cause, statusCode }: { cause?: any; statusCode?: any } = {}) {
    super("An unexpected internal error occurred.", {
      cause,
    });

    this.name = "InternalServerError";
    this.action = "Please contact support.";
    this.statusCode = statusCode || 500;
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

export class ServiceError extends Error {
  statusCode: any;
  action: any;
  constructor({ cause, message }: { cause?: any; message?: any } = {}) {
    super(message || "Service is unavailable at this moment.", {
      cause,
    });

    this.name = "ServiceError";
    this.action = "Check if the service is available.";
    this.statusCode = 503;
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

export class ValidationError extends Error {
  statusCode: any;
  action: any;
  constructor(
    {
      cause,
      message,
      action,
    }: { cause?: any; message?: any; action?: any } = {},
  ) {
    super(message || "A validation error occurred.", {
      cause,
    });

    this.name = "ValidationError";
    this.action = action || "Check the sent data and try again.";
    this.statusCode = 400;
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

export class NotFoundError extends Error {
  statusCode: any;
  action: any;
  constructor(
    {
      cause,
      message,
      action,
    }: { cause?: any; message?: any; action?: any } = {},
  ) {
    super(message || "It was not possible to find this resource on system.", {
      cause,
    });

    this.name = "NotFoundError";
    this.action = action || "Check the query parameters sent.";
    this.statusCode = 404;
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
