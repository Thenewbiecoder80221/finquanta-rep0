import { Router } from "express";
import { ingestTelemetry } from "../controllers/telemetryController";

const router = Router();

router.post("/", ingestTelemetry);

export default router;