import { showTrailers } from "./modules/trailerFunc.js";
import { createCard } from "./components/movieCard.js";

if (
    window.location.pathname === "/" ||
    window.location.pathname === "/template/index.html"
) {
    console.log("index.html");
} else if (window.location.pathname === "/template/favorites.html") {
    console.log("favorites.html");
} else if (window.location.pathname === "/template/movie.html") {
    console.log("movie.html");
} else if (window.location.pathname === "/template/search.html") {
    console.log("search.html");
}

console.log("hello world");

showTrailers();
createCard();
