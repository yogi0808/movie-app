import type { MediaTabType } from '@utils/types';
import { FaBookmark, FaList } from 'react-icons/fa6';
import { IoIosStar, IoMdHeart } from 'react-icons/io';

export const statusColors = {
  good: '#00c950',
  normal: '#ffb86a',
  notGood: '#fb2c36',
};

export const HeaderLinks = [
  {
    id: 1,
    title: 'Movies',
    options: [
      { id: 1, text: 'Popular', link: '/movies' },
      { id: 2, text: 'Now Playing', link: '/movies' },
      { id: 3, text: 'Upcoming', link: '/movies' },
      { id: 4, text: 'Top Rated', link: '/movies' },
    ],
  },
  {
    id: 2,
    title: 'TV Shows',
    options: [
      { id: 1, text: 'Popular', link: '/tv' },
      { id: 2, text: 'Airing Today', link: '/tv' },
      { id: 3, text: 'On TV', link: '/tv' },
      { id: 4, text: 'Top Rated', link: '/tv' },
    ],
  },
  {
    id: 3,
    title: 'People',
    options: [{ id: 1, text: 'Popular', link: '#' }],
  },
  {
    id: 4,
    title: 'More',
    options: [
      { id: 1, text: 'Discussions', link: '#' },
      { id: 2, text: 'Leaderboard', link: '#' },
      { id: 3, text: 'Support', link: '#' },
      { id: 4, text: 'API Documentation', link: '#' },
      { id: 5, text: 'API for Business', link: '#' },
    ],
  },
];

export const mobileHeaderLinks = [
  {
    id: 1,
    text: 'Contribution Bible',
    link: '#',
  },
  {
    id: 2,
    text: 'Discussions',
    link: '#',
  },
  {
    id: 3,
    text: 'Leaderboard',
    link: '#',
  },
  {
    id: 4,
    text: 'API',
    link: '#',
  },
  {
    id: 5,
    text: 'Support',
    link: '#',
  },
  {
    id: 6,
    text: 'About',
    link: '#',
  },
  {
    id: 7,
    text: 'Logout',
    link: '#',
  },
];

export const FooterLinks = [
  {
    id: 1,
    title: 'The Basics',
    links: [
      {
        id: 1,
        text: 'About TMDB',
        link: '#',
      },
      {
        id: 2,
        text: 'Contact Us',
        link: '#',
      },
      {
        id: 3,
        text: 'API Documentation',
        link: '#',
      },
      {
        id: 4,
        text: 'API for Business',
        link: '#',
      },
      {
        id: 5,
        text: 'System Status',
        link: '#',
      },
    ],
  },
  {
    id: 2,
    title: 'Get Involved',
    links: [
      {
        id: 1,
        text: 'Contribution Bible',
        link: '#',
      },
      {
        id: 2,
        text: 'Add New Movie',
        link: '#',
      },
      {
        id: 3,
        text: 'Add New TV Show',
        link: '#',
      },
    ],
  },
  {
    id: 3,
    title: 'Community',
    links: [
      {
        id: 1,
        text: 'Guidelines',
        link: '#',
      },
      {
        id: 2,
        text: 'Discussions',
        link: '#',
      },
      {
        id: 3,
        text: 'Leaderboard',
        link: '#',
      },
      {
        id: 4,
        text: 'Support Forums',
        link: '#',
      },
    ],
  },
  {
    id: 4,
    title: 'Legal',
    links: [
      {
        id: 1,
        text: 'Terms of Use',
        link: '#',
      },
      {
        id: 2,
        text: 'API Terms of Use',
        link: '#',
      },
      {
        id: 3,
        text: 'Privacy Policy',
        link: '#',
      },
      {
        id: 4,
        text: 'DMCA Policy',
        link: '#',
      },
    ],
  },
];

export const MoviePopupLinks = [
  {
    id: 1,
    text: 'Add to list',
    icon: <FaList className="text-black" />,
    link: '#',
  },
  {
    id: 2,
    text: 'Favorite',
    icon: <IoMdHeart className="text-black" />,
    link: '#',
  },
  {
    id: 3,
    text: 'Watchlist',
    icon: <FaBookmark className="text-black" />,
    link: '#',
  },
  {
    id: 4,
    text: 'Your rating',
    icon: <IoIosStar className="text-black" />,
    link: '#',
  },
];

export const endpointsForTrendingMovies = ['trending/all/day', 'trending/all/week'];

export const endpointsForPopularMovies = [
  'discover/movie?include_adult=false&with_watch_monetization_types=flatrate&include_video=false&watch_region=US&sort_by=popularity.desc',
  'tv/popular?include_adult=false&language=en-US',
  'discover/movie?include_adult=false&with_watch_monetization_types=rent&include_video=false&watch_region=US&sort_by=popularity.desc',
  'movie/now_playing?region=US&language=en-US',
];

export const endpointsForFreeToWatchMovies = [
  '/discover/movie?include_adult=false&with_watch_monetization_types=ads|free&watch_region=US&',
  '/discover/tv?include_adult=false&with_watch_monetization_types=ads|free&watch_region=US&',
];

export const sortOptions = [
  {
    option: 'Popularity Descending',
    value: 'popularity.desc',
  },
  {
    option: 'Popularity Ascending',
    value: 'popularity.asc',
  },
  {
    option: 'Rating Descending',
    value: 'vote_average.desc',
  },
  {
    option: 'Rating Ascending',
    value: 'vote_average.asc',
  },
  {
    option: 'Release Date Descending',
    value: 'primary_release_date.desc',
  },
  {
    option: 'Release Date Ascending',
    value: 'primary_release_date.asc',
  },
  { option: 'Title (A - Z)', value: 'title.desc' },
  { option: 'Title (Z - A)', value: 'title.asc' },
];

export const includeAdultOptions = [
  {
    option: 'Exclude Adult',
    value: false,
  },
  {
    option: 'Include Adult',
    value: true,
  },
];

export const certifications = ['U', 'UA', 'A'];

export const sliderTwoThumbsTrackColors = ['#b3b5b6', '#01b4e4', '#b3b5b6'];
export const sliderOneThumbsTrackColors = ['#01b4e4', '#b3b5b6'];

export const dummyAvailableSearch = ['Steam', 'Free', 'Ads', 'Rent', 'Buy'];

export const releaseDateSearch = [
  'Theatrical (limited)',
  'Theatrical',
  'Premiere',
  'Digital',
  'Physical',
  'TV',
];

export const showMeDummyCheckBox = ['Everything', "Movies I Haven't Seen", 'Movies I Have Seen'];

export const mediaTab: MediaTabType[] = ['backdrops', 'posters'];

export const contributors = [
  {
    id: 1,
    contribution: 114,
    name: 'MovieMadmatt',
  },
  {
    id: 2,
    contribution: 70,
    name: 'raze464',
  },
  {
    id: 3,
    contribution: 42,
    name: 'solomono',
  },
  {
    id: 4,
    contribution: 28,
    name: 'PajaMAX',
  },
];

export const emojiList = ['/emoji1.svg', '/emoji2.svg', '/emoji3.svg'];

export const detailHeroBtns = [
  {
    id: 1,
    icon: <FaList className="text-sm" />,
    toolTip: 'Add to list',
  },
  {
    id: 2,
    icon: <IoMdHeart className="text-sm" />,
    toolTip: 'Mark as favorite',
  },
  {
    id: 3,
    icon: <FaBookmark className="text-sm" />,
    toolTip: 'Add to your watch list',
  },
];
export const registerBenefits = [
  'Find something to watch on your subscribed streaming services',
  'Log the movies and TV shows you have watched',
  'Keep track of your favourite movies and TV shows and get recommendations from them',
  'Build and maintain a personal watchlist',
  'Build custom mixed lists (movies and TV)',
  'Take part in movie and TV discussions',
  'Contribute to, and improve the information in our database',
];
