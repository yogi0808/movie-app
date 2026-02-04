import { FaBookmark, FaList } from "react-icons/fa6";
import { IoIosStar, IoMdHeart } from "react-icons/io";

export const statusColors = {
  good: "#00c950",
  normal: "#ffb86a",
  notGood: "#fb2c36",
};

export const HeaderLinks = [
  {
    id: 1,
    title: "Movies",
    options: [
      { id: 1, text: "Popular", link: "#" },
      { id: 2, text: "Now Playing", link: "#" },
      { id: 3, text: "Upcoming", link: "#" },
      { id: 4, text: "Top Rated", link: "#" },
    ],
  },
  {
    id: 2,
    title: "TV Shows",
    options: [
      { id: 1, text: "Popular", link: "#" },
      { id: 2, text: "Airing Today", link: "#" },
      { id: 3, text: "On TV", link: "#" },
      { id: 4, text: "Top Rated", link: "#" },
    ],
  },
  {
    id: 3,
    title: "People",
    options: [{ id: 1, text: "Popular", link: "#" }],
  },
  {
    id: 4,
    title: "More",
    options: [
      { id: 1, text: "Discussions", link: "#" },
      { id: 2, text: "Leaderboard", link: "#" },
      { id: 3, text: "Support", link: "#" },
      { id: 4, text: "API Documentation", link: "#" },
      { id: 5, text: "API for Business", link: "#" },
    ],
  },
];

export const mobileHeaderLinks = [
  {
    id: 1,
    text: "Contribution Bible",
    link: "#",
  },
  {
    id: 2,
    text: "Discussions",
    link: "#",
  },
  {
    id: 3,
    text: "Leaderboard",
    link: "#",
  },
  {
    id: 4,
    text: "API",
    link: "#",
  },
  {
    id: 5,
    text: "Support",
    link: "#",
  },
  {
    id: 6,
    text: "About",
    link: "#",
  },
  {
    id: 7,
    text: "Logout",
    link: "#",
  },
];

export const FooterLinks = [
  {
    id: 1,
    title: "The Basics",
    links: [
      {
        id: 1,
        text: "About TMDB",
        link: "#",
      },
      {
        id: 2,
        text: "Contact Us",
        link: "#",
      },
      {
        id: 3,
        text: "API Documentation",
        link: "#",
      },
      {
        id: 4,
        text: "API for Business",
        link: "#",
      },
      {
        id: 5,
        text: "System Status",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Get Involved",
    links: [
      {
        id: 1,
        text: "Contribution Bible",
        link: "#",
      },
      {
        id: 2,
        text: "Add New Movie",
        link: "#",
      },
      {
        id: 3,
        text: "Add New TV Show",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Community",
    links: [
      {
        id: 1,
        text: "Guidelines",
        link: "#",
      },
      {
        id: 2,
        text: "Discussions",
        link: "#",
      },
      {
        id: 3,
        text: "Leaderboard",
        link: "#",
      },
      {
        id: 4,
        text: "Support Forums",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Legal",
    links: [
      {
        id: 1,
        text: "Terms of Use",
        link: "#",
      },
      {
        id: 2,
        text: "API Terms of Use",
        link: "#",
      },
      {
        id: 3,
        text: "Privacy Policy",
        link: "#",
      },
      {
        id: 4,
        text: "DMCA Policy",
        link: "#",
      },
    ],
  },
];

export const MoviePopupLinks = [
  {
    id: 1,
    text: "Add to list",
    icon: <FaList className="text-black" />,
    link: "#",
  },
  {
    id: 2,
    text: "Favorite",
    icon: <IoMdHeart className="text-black" />,
    link: "#",
  },
  {
    id: 3,
    text: "Watchlist",
    icon: <FaBookmark className="text-black" />,
    link: "#",
  },
  {
    id: 4,
    text: "Your rating",
    icon: <IoIosStar className="text-black" />,
    link: "#",
  },
];

export const endpointsForTrendingMovies = [
  "trending/all/day",
  "trending/all/week",
];

export const endpointsForPopularMovies = [
  "discover/movie?include_adult=false&with_watch_monetization_types=flatrate&include_video=false&watch_region=US&sort_by=popularity.desc",
  "tv/popular?include_adult=false&language=en-US",
  "discover/movie?include_adult=false&with_watch_monetization_types=rent&include_video=false&watch_region=US&sort_by=popularity.desc",
  "movie/now_playing?region=US&language=en-US",
];

export const endpointsForFreeToWatchMovies = [
  "/discover/movie?include_adult=false&with_watch_monetization_types=ads|free&watch_region=US&",
  "/discover/tv?include_adult=false&with_watch_monetization_types=ads|free&watch_region=US&",
];
