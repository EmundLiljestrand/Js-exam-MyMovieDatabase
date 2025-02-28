export function listener(event) {
    let clickedCard = event.target.closest(".movie-card");
    if (clickedCard) {
        let movieId = clickedCard.dataset.movieId;
        window.location.href = `movie.html?movieId=${movieId}`;
    }
}
