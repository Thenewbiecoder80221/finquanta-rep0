export const calculateTrustScore = (
  deviation: number
) => {
  let trustScore = 100;

  if (deviation > 50) {
    trustScore -= 20;
  }

  if (deviation > 100) {
    trustScore -= 30;
  }

  if (deviation > 200) {
    trustScore -= 30;
  }

  return Math.max(trustScore, 0);
};