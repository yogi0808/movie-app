# Movie Screen

- left section
- right section
- collapsible div
- box with divider
- drop down with optional search option
- checkbox
- radiobutton
- filter section
- providers
- genres
- search button with position change based on the button visibility and filter selections
- range selector

## sort endpoints

### sorting

- Popularity Descending - `sort_by=popularity.desc`
- Popularity Ascending - `sort_by=popularity.asc`
- Rating Descending - `sort_by=vote_average.desc`
- Rating Ascending - `sort_by=vote_average.asc`
- Release Date Descending - `sort_by=primary_release_date.desc`
- Release Date Ascending - `sort_by=primary_release_date.asc`
- Title (A - Z) - `sort_by=title.desc`
- Title (Z - A) - `sort_by=title.asc`

---

- for Countries - `configuration/countries?language=en-US`
- for languages - `configuration/languages`
- search for keyword - `search/keyword?query=<Search_Query>&page=1`
- providers - `watch/providers/movie`
- genres - `genre/movie/list`

---

- language - `language=<language_iso>`
- genres - `with_genres=<genre_number>`
- certification - `certification=<name_of_certification>`
- adult content - `include_adult=<true or false>`
- keyword - `with_keywords=<keywords>`

- Release Date from - `release_date.gte=<date>`
- Release Date to - `release_date.lte=<date>`
