const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

async function getMovies() {
    const resp = await fetch(APIURL)
    const respData = await resp.json()

    showMoviews(respData.results)
}

function showMoviews(movies) {
    main.innerHTML = ""

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie

        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")

        movieEl.innerHTML = `
        <div class="image-container">
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="overview">
                ${overview}
            </div>
        </div>
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green"
    } else if (vote >= 5) {
        return "orange"
    } else {
        return "red"
    }
}

getMovies()