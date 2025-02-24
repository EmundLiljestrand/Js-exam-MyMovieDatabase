import { showTrailers } from "./modules/gui.js";
import {
    renderRecommendedMovies,
    searchButton,
    handleSearch,
    handleMovieDetails,
} from "./modules/gui.js";

if (
    window.location.pathname === "/" ||
    window.location.pathname === "/template/index.html"
) {
    console.log("index.html");
    // creates recommended movies
    renderRecommendedMovies();
    // shows 5 random trailers
    showTrailers();
    // search button
    searchButton();
} else if (window.location.pathname === "/template/favorites.html") {
    console.log("favorites.html");
} else if (window.location.pathname === "/template/movie.html") {
    console.log("movie.html");
    handleMovieDetails();
} else if (window.location.pathname === "/template/search.html") {
    console.log("search.html");
    handleSearch();
}
