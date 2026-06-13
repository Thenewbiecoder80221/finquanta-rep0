import { useState } from "react";

function App() {
  const [result, setResult] = useState<any>(null);

  const [eventType, setEventType] = useState("KEYSTROKE");
  const [value, setValue] = useState(50);

  const sendTelemetry = async () => {
    try {
      const response = await fetch("http://localhost:5000/telemetry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: "frontend_demo",
          userId: "demo_user",
          eventType,
          value,
          timestamp: Date.now(),
        }),
      });

      const data = await response.json();
      setResult(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const riskColor =
    result?.riskLevel === "HIGH"
      ? "red"
      : result?.riskLevel === "MEDIUM"
      ? "orange"
      : "green";

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1>FinQuanta Risk Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="KEYSTROKE">KEYSTROKE</option>
          <option value="CLIPBOARD">CLIPBOARD</option>
        </select>

        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          style={{
            marginLeft: "10px",
            padding: "8px",
          }}
        />
      </div>

      <button
        onClick={sendTelemetry}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Analyze Telemetry Event
      </button>

      {result && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          <h2>Analysis Result</h2>

          <p>
            <strong>Trust Score:</strong> {result.trustScore}
          </p>

          <p>
            <strong>Risk Score:</strong> {result.riskScore}
          </p>

          <p
            style={{
              color: riskColor,
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Risk Level: {result.riskLevel}
          </p>

          <p>
            <strong>Recommended Action:</strong>{" "}
            {result.recommendedAction}
          </p>

          <p>
            <strong>Deviation:</strong> {result.deviation}
          </p>

          <p>
            <strong>Average Value:</strong>{" "}
            {result.profile?.averageValue}
          </p>

          <p>
            <strong>Event Count:</strong>{" "}
            {result.profile?.eventCount}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;