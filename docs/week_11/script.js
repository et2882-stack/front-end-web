
// Movie dataset
let movies = [
    {
        title: "10 Things I Hate About You",
        year: 1999,
        director: "Gil Junger",
        synopsis: "On the first day at his new school, Cameron falls for Bianca, but her father has a strict dating rule. He must find someone to date her older sister Kat first.",
        emmaRating: 5.0,
        letterboxdRating: 4.1,
        poster: "https://a.ltrbxd.com/resized/film-poster/4/9/0/4/7/49047-10-things-i-hate-about-you-0-2000-0-3000-crop.jpg?v=55ccac3542"
    },

    {
        title: "The Grand Budapest Hotel",
        year: 2014,
        director: "Wes Anderson",
        synopsis: "A legendary hotel concierge and his young lobby boy become involved in a mystery surrounding a stolen painting.",
        emmaRating: 5.0,
        letterboxdRating: 4.1,
        poster: "https://a.ltrbxd.com/resized/film-poster/9/5/1/1/3/95113-the-grand-budapest-hotel-0-2000-0-3000-crop.jpg?v=6ac71cf4ba"
    },

    {
        title: "From Up on Poppy Hill",
        year: 2011,
        director: "Goro Miyazaki",
        synopsis: "Two high school students work together to save their school's historic clubhouse while discovering their families' past.",
        emmaRating: 5.0,
        letterboxdRating: 4.2,
        poster: "https://a.ltrbxd.com/resized/sm/upload/sk/6v/xg/po/9qsW5uXwn3QBxEmKhSoseXActVw-0-2000-0-3000-crop.jpg?v=89ddfb2d7d"
    },

    {
        title: "Akira",
        year: 1988,
        director: "Katsuhiro Otomo",
        synopsis: "In a dystopian Neo-Tokyo, a biker gang member develops dangerous psychic powers that threaten the city.",
        emmaRating: 5.0,
        letterboxdRating: 4.3,
        poster: "https://a.ltrbxd.com/resized/sm/upload/xk/25/lu/0m/mi2Axov7Hy20wieoGfrbqDWLjSr-0-2000-0-3000-crop.jpg?v=dd1e90619a"
    }
];

let activeMovieIndex = 0;
function renderTabs() {
    const tabs = document.querySelector("#movie-tabs");
    tabs.innerHTML = "";
    movies.forEach((movie, index) => {
        const button = document.createElement("button");
        button.className = "movie-tab";
        button.type = "button";
        button.textContent = String(index + 1);
        button.setAttribute(
            "aria-label",
            `Show ${movie.title}`
        );
        button.setAttribute(
            "aria-pressed",
            String(index === activeMovieIndex)
        );
        button.addEventListener("click", () => {
            showMovie(index);
        });
        tabs.appendChild(button);

    });

}

function showMovie(index) {

    activeMovieIndex = index;

    const movie = movies[index];

    // Movie title
    document.querySelector("#movie-title").textContent =
        `${movie.title} (${movie.year})`;

    // Director
    document.querySelector("#movie-director").textContent =
        movie.director;

    // Synopsis
    document.querySelector("#movie-synopsis").textContent =
        movie.synopsis;

    // Numerical ratings
    document.querySelector("#emma-rating-value").textContent =
        movie.emmaRating.toFixed(1);

    document.querySelector("#letterboxd-rating-value").textContent =
        movie.letterboxdRating.toFixed(1);

    // Transform ratings into proportional bar widths
    document.querySelector("#emma-rating-bar").style.width =
        `${movie.emmaRating / 5 * 100}%`;

    document.querySelector("#letterboxd-rating-bar").style.width =
        `${movie.letterboxdRating / 5 * 100}%`;

    // Movie poster
    const poster = document.querySelector("#movie-poster");

    const placeholder =
        document.querySelector("#poster-placeholder");

    if (movie.poster && movie.poster.trim()) {

        poster.src = movie.poster;
        poster.alt = `Poster for ${movie.title}`;

        poster.hidden = false;
        placeholder.hidden = true;

    } else {

        poster.hidden = true;
        placeholder.hidden = false;

    }
    renderTabs();

}

renderTabs();
showMovie(0);
