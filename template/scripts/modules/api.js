export async function fetchTopMovies() {
    try {
        const response = await fetch(
            "https://santosnr6.github.io/Data/favoritemovies.json"
        );
        if (!response.ok) {
            throw new Error("Fel");
        }
        return await response.json();
    } catch (error) {
        console.error("Fel vid hämtning av top movies:", error);
        return [];
    }
}

const API_KEY = "1b387902";
const BASE_URL = "https://www.omdbapi.com/";

export async function fetchMovies(query) {
    try {
        const response = await fetch(
            `${BASE_URL}?s=${query}*&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (data.Response === "True") {
            return data.Search;
        } else {
            throw new Error("Inga resultat hittades");
        }
    } catch (error) {
        console.error("Fel vid hämtning:", error);
        return [];
    }
}

export async function fetchMovieById(movieId) {
    try {
        const response = await fetch(
            `${BASE_URL}?i=${movieId}&apikey=${API_KEY}&plot=full`
        );
        const data = await response.json();
        if (data.Response === "True") {
            return data;
        } else {
            console.error("Film hittades inte:", data.Error);
            return null;
        }
    } catch (error) {
        console.error("Fel vid hämtning av filmdata:", error);
        return null;
    }
}
