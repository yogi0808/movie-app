import { statusColors } from '@constants/index';
type Rating = {
  rating: number;
  ratingGradient: string;
};

/**
 * calculates the rating based ont eh vote average and return the gradient and the rating
 *
 * @param {number} voteAverage - average of the vot
 *
 * @returns {object} - with rating and the gradient for rating indicator
 */
export function getRating(voteAverage: number): Rating {
  const rating = Math.round((voteAverage / 10) * 100); // calculating the rating using average vote

  const ratingColor =
    rating >= 70 ? statusColors.good : rating >= 50 ? statusColors.normal : statusColors.notGood;

  return {
    rating,
    ratingGradient: `conic-gradient( ${ratingColor} ${rating}%, ${ratingColor}66 ${rating}%)`,
  };
}

/**
 * formats the date in Jan 01, 2026
 *
 * @param {string} date - date to format
 *
 * @returns {string} - formatted date
 */
export function formateDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

/**
 * formats the date in 2026-02-12
 *
 * @param {string} date - date to format
 *
 * @returns {string} - formatted date
 */
export function formateDateForPicker(date: Date | string): string {
  const newDate: Date = new Date(date);

  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const day = String(newDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * this is utility function for fetching data from the api
 *
 * @param endpoint - for fetch the api data
 * @returns - response data in json
 */
export async function apiFetch(endpoint: string) {
  const res: Response = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      authorization: import.meta.env.VITE_TOKEN,
    },
  });

  if (res.ok) return res.json();
}

/**
 * utility function for the auth api request
 *
 * @param endpoint - for auth request
 * @param data - for request body
 * @param includeCredentials - include credentials or not
 *
 * @returns - response of the auth api
 */
export async function authFetch(
  endpoint: string,
  data?: object,
  includeCredentials: boolean = true,
) {
  const opts: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  if (data) {
    opts['body'] = JSON.stringify(data);
  }

  if (includeCredentials) {
    opts['credentials'] = 'include';
  }

  const res: Response = await fetch(`${import.meta.env.VITE_AUTH_BASE_URL}auth/${endpoint}`, opts);

  return res;
}

/**
 * returns the movie duration in formatted way (Ex. 1h 30m)
 *
 * @param runtime - duration of the movie in number
 * @returns - formatted movie duration string
 */
export function formatRuntime(runtime: number): string {
  if (!runtime || runtime < 0) return '0m';

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;

  return `${hours}h ${minutes}m`;
}

interface EllipseResult {
  isOverflowing: boolean;
  ellipseContent: string;
}

/**
 * returns the content with word limit and adds ... for ellipse
 *
 * @param {string} content - content to ellipse
 * @param {number} wordLimit - number of words to show
 * @returns
 */
export function ellipseByWordCount(content: string, wordLimit: number): EllipseResult {
  if (!content) {
    return {
      isOverflowing: false,
      ellipseContent: '',
    };
  }

  const words = content.trim().split(' ');

  const isOverflowing = words.length > wordLimit;

  return {
    isOverflowing,
    ellipseContent: isOverflowing ? words.slice(0, wordLimit).concat(['... ']).join(' ') : content,
  };
}

/**
 * return's the prefix based on the length and index
 *
 * @param index - index of the genre
 * @param length - length of the genres
 *
 * @returns - prefix string
 */
export function getGenrePrefix(index: number, length: number) {
  if (index === length - 1) return;
  if (index === length - 2) return ', and ';
  return ', ';
}

/**
 * validates the email address
 *
 * @param email - email address to validate
 * @returns - true if email is valid else false
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
