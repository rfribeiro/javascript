const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener('click', e => {
    console.log(e.target.dataset.id)
    const id = e.target.dataset.id

    if (id) {
        btns.forEach(item => item.classList.remove("active"))
        e.target.classList.add("active")
        articles.forEach(item => item.classList.remove("active"))
        document.getElementById(id).classList.add("active")
    }
})