import { statusColors } from "@/constants";

export function getRating(voteAverage) {
  const rating = Math.round((voteAverage / 10) * 100); // calculating the rating using average vote

  const ratingColor =
    rating >= 70
      ? statusColors.good
      : rating >= 50
        ? statusColors.normal
        : statusColors.notGood;

  return {
    rating,
    ratingGradient: `conic-gradient( ${ratingColor} ${rating}%, ${ratingColor}66 ${rating}%)`,
  };
}

export function formateDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function formateDateForPicker(date) {
  date = new Date(date)

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}
