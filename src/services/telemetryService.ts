import { calculateRisk } from "./riskEngine";
import { getDecision } from "./decisionEngine";
import {
  updateProfile,
  calculateDeviation,
} from "./behaviorProfileEngine";
import { calculateTrustScore } from "./trustEngine";
import { updateSession } from "./sessionEngine";
import { generateExplanation } from "./explanationEngine";
import { prisma } from "../lib/prisma";

export const processTelemetry = async (
  event: any
) => {
  const deviation = calculateDeviation(
    event.userId,
    event.value
  );

  const profile = updateProfile(
    event.userId,
    event
  );

  const trustScore =
    calculateTrustScore(deviation);

  const risk = calculateRisk(event);

  if (deviation > 100) {
    risk.riskScore += 25;
    risk.riskLevel = "HIGH";
  }

  const session = updateSession(
    event.sessionId,
    risk.riskScore,
    trustScore
  );

  const decision = getDecision(
    risk.riskScore,
    trustScore
  );

  const reasons = generateExplanation(
    event,
    deviation,
    risk.riskScore
  );

  await prisma.telemetryEvent.create({
    data: {
      sessionId: event.sessionId,
      userId: event.userId,
      eventType: event.eventType,
      value: event.value,

      trustScore,
      riskScore: risk.riskScore,
      riskLevel: risk.riskLevel,
    },
  });

  return {
    processed: true,
    profile,
    session,
    deviation,
    trustScore,
    ...risk,
    ...decision,
    reasons,
    event,
  };
};