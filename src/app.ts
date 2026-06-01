import express from "express";
import cors from "cors";
import telemetryRoutes from "./routes/telemetryRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FinQuanta Risk Engine Running");
});

app.use("/telemetry", telemetryRoutes);

export default app;