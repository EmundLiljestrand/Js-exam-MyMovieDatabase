import { fetchTopMovies } from "../modules/api.js";

export async function createCard() {
    let movies = await fetchTopMovies();
    let top20 = movies.slice(0, 20);
    let container = document.querySelector("#cardContainer");

    top20.forEach((movie) => {
        let card = document.createElement("article");
        card.classList.add("movie-card");

        let title = document.createElement("h3");
        title.classList.add("movie-title");
        title.textContent = movie.Title;

        let poster = document.createElement("img");
        poster.classList.add("movie-poster");
        poster.src = movie.Poster;
        poster.alt = `Poster of ${movie.Title}`;

        card.appendChild(poster);
        card.appendChild(title);

        container.appendChild(card);
    });
}
