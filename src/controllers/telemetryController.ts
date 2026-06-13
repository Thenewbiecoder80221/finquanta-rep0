import { Request, Response } from "express";
import { processTelemetry } from "../services/telemetryService";

export const ingestTelemetry = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await processTelemetry(
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Telemetry processed",
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to process telemetry",
    });
  }
};