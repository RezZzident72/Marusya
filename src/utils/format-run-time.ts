export const formatRuntime = (totalMinutes: number | undefined | null): string => {
  if (!totalMinutes || isNaN(totalMinutes) || totalMinutes <= 0) {
    return "—";
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `0 ч ${minutes} мин`;
  }

  if (minutes === 0) {
    return `${hours} ч`;
  }

  return `${hours} ч ${minutes} мин`;
};