import { statusColors } from "@/constants";

/**
 * calculates the rating based ont eh vote average and return the gradient and the rating
 * 
 * @param {number} voteAverage - average of the vot
 * 
 * @returns {object} - with rating and the gradient for rating indicator
 */
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

/**
 * formats the date in Jan 01, 2026
 * 
 * @param {date} date - date to format
 * 
 * @returns {string} - formatted date
 */
export function formateDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

/**
 * formats the date in 2026-02-12
 * 
 * @param {date} date - date to format
 * 
 * @returns {string} - formatted date
 */
export function formateDateForPicker(date) {
  date = new Date(date)

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}
