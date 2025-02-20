import { showTrailers } from "./modules/showTrailers.js";
import { createCard } from "./components/movieCard.js";
import {
    searchButton,
    handleSearch,
    handleMovieDetails,
} from "./utils/domUtils.js";

if (
    window.location.pathname === "/" ||
    window.location.pathname === "/template/index.html"
) {
    console.log("index.html");
    // skapar upp top 20-listan
    createCard();
    // visar 5 slumpmässiga trailers
    showTrailers();
} else if (window.location.pathname === "/template/favorites.html") {
    console.log("favorites.html");
} else if (window.location.pathname === "/template/movie.html") {
    console.log("movie.html");
    handleMovieDetails();
} else if (window.location.pathname === "/template/search.html") {
    console.log("search.html");
    handleSearch();
}
searchButton();
