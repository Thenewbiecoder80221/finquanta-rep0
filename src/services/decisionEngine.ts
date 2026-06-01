export const getDecision = (
  riskScore: number,
  trustScore: number
) => {
  if (riskScore >= 80 || trustScore <= 20) {
    return {
      recommendedAction: "ESCROW",
    };
  }

  if (riskScore >= 30 || trustScore <= 50) {
    return {
      recommendedAction: "MANUAL_REVIEW",
    };
  }

  return {
    recommendedAction: "ALLOW",
  };
};