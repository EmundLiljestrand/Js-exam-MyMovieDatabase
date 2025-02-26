import { createCard } from "./movieCard.js";
import { listener } from "../modules/event.js";

function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function isFavorite(movieId) {
    let favorites = getFavorites();
    return favorites.some((movie) => movie.imdbID === movieId);
}

export function toggleFavorite(movie) {
    let favorites = getFavorites();

    if (isFavorite(movie.imdbID)) {
        favorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
        favorites.push(movie);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function showFavorites() {
    let favorites = getFavorites();
    let favoriteList = document.querySelector("#favoriteCardContainer");

    favoriteList.innerHTML = "";

    if (favorites.length === 0) {
        favoriteList.innerHTML = "<p>Du har inga favoriter ännu.</p>";
        return;
    }

    favorites.forEach((movie) => {
        let card = createCard(movie);

        if (!favoriteList.dataset.listenerAdded) {
            favoriteList.addEventListener("click", listener);
            favoriteList.dataset.listenerAdded = "true";
        }

        favoriteList.appendChild(card);
    });
}
