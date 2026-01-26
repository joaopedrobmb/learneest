import { Request, Response } from "express";

async function status(req: Request, res: Response): Promise<Response> {
  const updatedAt = new Date();

  return res.status(200).json({ updated_at: updatedAt });
}

export default status;
