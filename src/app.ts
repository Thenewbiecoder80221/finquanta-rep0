import express from "express";
import cors from "cors";

import telemetryRoutes from "./routes/telemetryRoutes";
import eventRoutes from "./routes/eventRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FinQuanta Risk Engine Running");
});

app.use("/telemetry", telemetryRoutes);
app.use("/events", eventRoutes);

export default app;