export const generateExplanation = (
  event: any,
  deviation: number,
  riskScore: number
) => {
  const reasons: string[] = [];

  if (event.eventType === "CLIPBOARD") {
    reasons.push(
      "High clipboard activity detected"
    );
  }

  if (event.eventType === "TAB_SWITCH") {
    reasons.push(
      "Frequent tab switching detected"
    );
  }

  if (deviation > 100) {
    reasons.push(
      "Behavior deviates significantly from baseline"
    );
  }

  if (riskScore >= 50) {
    reasons.push(
      "Session exhibits elevated risk"
    );
  }

  return reasons;
};