const sessions: Record<string, any> = {};

export const updateSession = (
  sessionId: string,
  riskScore: number,
  trustScore: number
) => {
  if (!sessions[sessionId]) {
    sessions[sessionId] = {
      totalRisk: riskScore,
      averageTrust: trustScore,
      eventCount: 1,
    };

    return sessions[sessionId];
  }

  const session = sessions[sessionId];

  session.totalRisk += riskScore;

  session.averageTrust =
    (session.averageTrust * session.eventCount +
      trustScore) /
    (session.eventCount + 1);

  session.eventCount++;

  return session;
};

export const getSession = (
  sessionId: string
) => {
  return sessions[sessionId];
};