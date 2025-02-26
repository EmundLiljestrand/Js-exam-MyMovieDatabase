import { showTrailers } from "./modules/gui.js";
import {
    renderRecommendedMovies,
    searchButton,
    handleSearch,
    handleMovieDetails,
} from "./modules/gui.js";
import { showFavorites } from "./components/favorites.js";

if (
    window.location.pathname === "/" ||
    window.location.pathname === "/template/index.html"
) {
    console.log("index.html");

    renderRecommendedMovies();
    showTrailers();
    searchButton();
} else if (window.location.pathname === "/template/favorites.html") {
    console.log("favorites.html");

    showFavorites();
} else if (window.location.pathname === "/template/movie.html") {
    console.log("movie.html");

    handleMovieDetails();
} else if (window.location.pathname === "/template/search.html") {
    console.log("search.html");

    handleSearch();
}
