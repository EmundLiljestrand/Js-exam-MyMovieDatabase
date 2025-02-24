export function createCard(movie) {
    let card = document.createElement("article");
    card.classList.add("movie-card");
    card.dataset.movieId = movie.imdbID;

    let title = document.createElement("h3");
    title.classList.add("movie-title");
    title.textContent = movie.Title;

    let poster = document.createElement("img");
    poster.classList.add("movie-poster");
    poster.src = movie.Poster;
    poster.alt = `Poster of ${movie.Title}`;

    card.appendChild(poster);
    card.appendChild(title);

    return card;
}

// second function (practiaclly the same as above) for displaying movie year in search card (movie.Year returns undefined in first api call)
export function createDetailedCard(movie) {
    let card = document.createElement("article");
    card.classList.add("movie-card");
    card.dataset.movieId = movie.imdbID;

    let title = document.createElement("h3");
    title.classList.add("movie-title");
    title.textContent = `${movie.Title} (${movie.Year})`;
    //needed to display tooltip from title getting cut short by ellipsis in css
    title.title = `${movie.Title} (${movie.Year})`;

    let poster = document.createElement("img");
    poster.classList.add("movie-poster");
    poster.src = movie.Poster;
    poster.alt = `Poster of ${movie.Title}`;

    card.appendChild(poster);
    card.appendChild(title);

    return card;
}

// detailed information about selected movie
export function createMovieInformation(movie) {
    let movieArticle = document.createElement("article");
    movieArticle.classList.add("movie-article");

    let movieTitleYear = document.createElement("h2");
    movieTitleYear.classList.add("movie-title-year");
    movieTitleYear.textContent = `${movie.Title} (${movie.Year})`;

    let moviePoster = document.createElement("img");
    moviePoster.src = `${movie.Poster}`;
    moviePoster.alt = `Poster of ${movie.Title}`;

    let movieDirector = document.createElement("p");
    movieDirector.textContent = `Director: ${movie.Director}`;

    let movieGenre = document.createElement("p");
    movieGenre.textContent = `Genre: ${movie.Genre}`;

    let movieRating = document.createElement("p");
    movieRating.textContent = `Imdb rating: ${movie.imdbRating}/10`;

    let moviePlot = document.createElement("p");
    moviePlot.textContent = `Plot: ${movie.Plot}`;

    movieArticle.appendChild(movieTitleYear);
    movieArticle.appendChild(moviePoster);
    movieArticle.appendChild(movieDirector);
    movieArticle.appendChild(movieGenre);
    movieArticle.appendChild(movieRating);
    movieArticle.appendChild(moviePlot);

    return movieArticle;
}
