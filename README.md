## origin

- `https://api.themoviedb.org/3/`

### Trending

- Day: `/trending/all/day`
- Week: `/trending/all/week`

### Latest Trailers

- Popular: `/movie/upcoming?language=en-US&region=US`
- Streaming: `/discover/movie?with_watch_monetization_types=flatrate&watch_region=US&sort_by=primary_release_date.desc&primary_release_date.lte={TODAY_DATE}`
- On Tv: `/tv/airing_today?language=en-US`
- For Rent: `/discover/movie?with_watch_monetization_types=rent&watch_region=US&sort_by=primary_release_date.desc`
- In Theaters: `movie/now_playing?region=US&language=en-US`

### What's Popular

- Stream: `discover/movie?include_adult=false&with_watch_monetization_types=flatrate&include_video=false&watch_region=US&sort_by=popularity.desc`
- On TV: `tv/popular?include_adult=false&language=en-US`
- For Rent: `discover/movie?include_adult=false&with_watch_monetization_types=rent&include_video=false&watch_region=US&sort_by=popularity.desc`
- In Theaters: `movie/now_playing?region=US&language=en-US`

### Free to Watch

- Movie: `/discover/movie?with_watch_monetization_types=ads|free&watch_region=US&`
- TV: `/discover/tv?with_watch_monetization_types=ads|free&watch_region=US&`

1. React init
2. tailwind css setup
3. router setup
4. root layout
5. header
6. footer
7. hero
8. Trending section
