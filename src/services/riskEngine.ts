export const calculateRisk = (event: any) => {
  let riskScore = 0;

  if (event.eventType === "CLIPBOARD") {
    riskScore += 30;
  }

  if (event.eventType === "TAB_SWITCH") {
    riskScore += 15;
  }

  if (event.value > 100) {
    riskScore += 10;
  }

  let riskLevel = "LOW";

  if (riskScore >= 50) {
    riskLevel = "HIGH";
  } else if (riskScore >= 20) {
    riskLevel = "MEDIUM";
  }

  return {
    riskScore,
    riskLevel,
  };
};