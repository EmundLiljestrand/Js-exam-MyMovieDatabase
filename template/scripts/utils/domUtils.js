import { fetchMovies, fetchMovieById } from "../modules/api.js";

export function searchButton() {
    document
        .querySelector("#searchBtn")
        .addEventListener("click", function (event) {
            event.preventDefault();
            let query = document.querySelector("#searchInput").value.trim();
            if (query) {
                window.location.href = `search.html?search=${encodeURIComponent(
                    query
                )}`;
            }
        });
}

export async function handleSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("search");

    if (query) {
        const movies = await fetchMovies(query);
        displayMovies(movies);
    }
}

function displayMovies(movies) {
    let cardContainer = document.querySelector("#cardContainer");
    cardContainer.innerHTML = "";

    if (movies.length === 0) {
        cardContainer.innerHTML = "<p>Inga resultat hittades.</p>";
        return;
    }

    movies.forEach((movie) => {
        let card = document.createElement("article");
        card.classList.add("movie-card");
        card.dataset.movieId = movie.imdbID;

        let title = document.createElement("h3");
        title.classList.add("movie-title");
        title.textContent = `${movie.Title} (${movie.Year})`;
        //enkel lösning för att visa en liten tooltip vid de filmtitlar som blivit kapade av ellipsis i css
        title.title = `${movie.Title} (${movie.Year})`;

        let poster = document.createElement("img");
        poster.classList.add("movie-poster");
        poster.src = movie.Poster;
        poster.alt = `Poster of ${movie.Title}`;

        card.appendChild(poster);
        card.appendChild(title);

        cardContainer.appendChild(card);
    });

    cardContainer.addEventListener(
        "click",
        function (event) {
            let clickedCard = event.target.closest(".movie-card");
            if (clickedCard) {
                let movieId = clickedCard.dataset.movieId;
                window.location.href = `movie.html?movieId=${movieId}`;
            }
        },
        { once: true }
    );
}

export async function handleMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get("movieId");
    const movieInformation = document.querySelector("#movieInformation");

    if (!movieId) {
        movieInformation.innerHTML = "<p>Ingen film hittades.</p>";
        return;
    }

    const movie = await fetchMovieById(movieId);
    if (!movie) {
        movieInformation.innerHTML = "<p>Ingen film hittades.</p>";
        return;
    }

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

    let moviePlot = document.createElement("p");
    moviePlot.textContent = `Plot: ${movie.Plot}`;

    let movieRating = document.createElement("p");
    movieRating.textContent = `Imdb rating: ${movie.imdbRating}/10`;

    movieArticle.appendChild(movieTitleYear);
    movieArticle.appendChild(moviePoster);
    movieArticle.appendChild(movieDirector);
    movieArticle.appendChild(movieGenre);
    movieArticle.appendChild(moviePlot);
    movieArticle.appendChild(movieRating);

    movieInformation.appendChild(movieArticle);
}
