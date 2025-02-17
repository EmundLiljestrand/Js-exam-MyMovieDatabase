import { fetchTopMovies } from "./api.js";
import { shuffle } from "../utils/utils.js";
import { renderTrailers } from "./caroussel.js";

export async function showTrailers() {
    const movies = await fetchTopMovies();
    shuffle(movies);

    for (let i = 0; i < Math.min(movies.length, 5); i++) {
        renderTrailers(movies[i], i + 1);
    }
}
