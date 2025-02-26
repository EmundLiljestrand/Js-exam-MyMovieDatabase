import { fetchTopMovies, fetchMovieById, fetchMovies } from "./api.js";
import { createCard, createMovieInformation } from "../components/movieCard.js";
import { shuffle } from "../utils/utils.js";
import { renderTrailers } from "./caroussel.js";
import { listener } from "./event.js";

// front page recommended list
export async function renderRecommendedMovies() {
    let movies = await fetchTopMovies();
    let top20 = movies.slice(0, 20);
    let container = document.querySelector("#cardContainer");

    top20.forEach((movie) => {
        container.appendChild(createCard(movie));
    });

    if (!container.dataset.listenerAdded) {
        container.addEventListener("click", listener);
        container.dataset.listenerAdded = "true";
    }
}

// front page trailer caroussel
export async function showTrailers() {
    const movies = await fetchTopMovies();
    shuffle(movies);

    for (let i = 0; i < Math.min(movies.length, 5); i++) {
        renderTrailers(movies[i], i + 1);
    }
}

// search button
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

// handle search
export async function handleSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("search");

    if (query) {
        const movies = await fetchMovies(query);
        displayMovies(movies);
    }
}

// display searched movies and eventlistener
function displayMovies(movies) {
    let cardContainer = document.querySelector("#cardContainer");
    cardContainer.innerHTML = "";

    if (movies.length === 0) {
        cardContainer.innerHTML = "<p>Inga resultat hittades.</p>";
        return;
    }

    movies.forEach((movie) => {
        cardContainer.appendChild(createCard(movie));
    });

    if (!cardContainer.dataset.listenerAdded) {
        cardContainer.addEventListener("click", listener);
        cardContainer.dataset.listenerAdded = "true";
    }
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

    movieInformation.appendChild(createMovieInformation(movie));
}
