import { Request, Response } from "express";
import { processTelemetry } from "../services/telemetryService";

export const ingestTelemetry = (
  req: Request,
  res: Response
) => {
  const result = processTelemetry(req.body);

  res.status(200).json({
    success: true,
    message: "Telemetry processed",
    data: result,
  });
};