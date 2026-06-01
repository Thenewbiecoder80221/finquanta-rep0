const userProfiles: Record<string, any> = {};

export const updateProfile = (
  userId: string,
  event: any
) => {
  if (!userProfiles[userId]) {
    userProfiles[userId] = {
      averageValue: event.value,
      eventCount: 1,
    };

    return userProfiles[userId];
  }

  const profile = userProfiles[userId];

  profile.averageValue =
    (profile.averageValue * profile.eventCount +
      event.value) /
    (profile.eventCount + 1);

  profile.eventCount++;

  return profile;
};

export const getProfile = (userId: string) => {
  return userProfiles[userId];
};
export const calculateDeviation = (
  userId: string,
  currentValue: number
) => {
  const profile = userProfiles[userId];

  if (!profile) {
    return 0;
  }

  return Math.abs(
    currentValue - profile.averageValue
  );
};