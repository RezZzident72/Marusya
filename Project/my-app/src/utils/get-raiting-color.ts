const RATING_COLORS = {
  red: "rgba(200, 32, 32, 1)",
  gray: "rgba(119, 119, 119, 1)",
  orange: "rgba(165, 148, 0, 1)",
  green: "rgba(48, 142, 33, 1)",
};

export const getRatingColor = (rating: number | undefined | null): string => {
  if (!rating || rating <= 0) return RATING_COLORS.gray;

  if (rating < 5)  return RATING_COLORS.red;
  if (rating < 7)  return RATING_COLORS.gray;
  if (rating < 8)  return RATING_COLORS.orange;
  return RATING_COLORS.green;
};