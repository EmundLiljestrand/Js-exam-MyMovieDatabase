import { isFavorite, toggleFavorite } from "./favorites.js";

export function createCard(movie) {
    let card = document.createElement("article");
    card.classList.add("movie-card");
    card.dataset.movieId = movie.imdbID;

    let title = document.createElement("h3");
    title.classList.add("movie-title");
    // shows title with year, if year exists in api-fetch
    title.textContent = movie.Year
        ? `${movie.Title} (${movie.Year})`
        : movie.Title;
    // needed to display tooltip from title getting cut short by ellipsis in css
    title.title = `${movie.Title} (${movie.Year})`;

    let poster = document.createElement("img");
    poster.classList.add("movie-poster");
    poster.src = movie.Poster;
    poster.alt = `Poster of ${movie.Title}`;

    let favoriteButton = document.createElement("button");
    favoriteButton.classList.add("favorite-button");
    favoriteButton.textContent = isFavorite(movie.imdbID) ? "★" : "☆";
    favoriteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleFavorite(movie);
        favoriteButton.textContent = isFavorite(movie.imdbID) ? "★" : "☆";
    });

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(favoriteButton);

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
    moviePoster.classList.add("movie-poster");
    moviePoster.src = `${movie.Poster}`;
    moviePoster.alt = `Poster of ${movie.Title}`;

    let movieDirector = document.createElement("p");
    movieDirector.classList.add("detailed-movie-information");
    movieDirector.textContent = `Director: ${movie.Director}`;

    let movieGenre = document.createElement("p");
    movieGenre.classList.add("detailed-movie-information");
    movieGenre.textContent = `Genre: ${movie.Genre}`;

    let movieRating = document.createElement("p");
    movieRating.classList.add("detailed-movie-information");
    movieRating.textContent = `Imdb rating: ${movie.imdbRating}/10★`;

    let togglePlotButton = document.createElement("button");
    togglePlotButton.textContent = "Show Plot";
    togglePlotButton.classList.add("toggle-plot-btn");

    let moviePlot = document.createElement("p");
    moviePlot.classList.add("movie-plot");
    moviePlot.textContent = `Plot: ${movie.Plot}`;
    moviePlot.style.display = "none";

    togglePlotButton.addEventListener("click", () => {
        if (moviePlot.style.display === "none") {
            moviePlot.style.display = "block";
            togglePlotButton.textContent = "Hide Plot";
        } else {
            moviePlot.style.display = "none";
            togglePlotButton.textContent = "Show Plot";
        }
    });

    movieArticle.appendChild(movieTitleYear);
    movieArticle.appendChild(moviePoster);
    movieArticle.appendChild(movieDirector);
    movieArticle.appendChild(movieGenre);
    movieArticle.appendChild(movieRating);
    movieArticle.appendChild(moviePlot);
    movieArticle.appendChild(togglePlotButton); // Lägg till knappen före ploten

    return movieArticle;
}
