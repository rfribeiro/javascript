const clear = document.querySelector('.clear')
const dateElement = document.querySelector('#date')
const list = document.getElementById('list')
const input = document.getElementById("input")
const plusBtn = document.querySelector(".add-to-do-click")

let listArray = []
let listIndex = 0

const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "line-through"

const options = { weekday: "long", month: "short", day: "numeric"}
const today = new Date()

dateElement.innerHTML = today.toLocaleDateString("en-US", options)

let data = localStorage.getItem("TODO")
if (data) {
    listArray = JSON.parse(data)
    listIndex = listArray.lenght
    loadToDos()
} else {
    listArray = []
    listIndex = 0
}

 
function loadToDos() {
    listArray.forEach(item => addToDo(item))
}

function addToDo({text, id, done, trash}) {

    if (trash) return

    const check_fill = done ? CHECK : UNCHECK
    const line = done ? LINE_THROUGH : ''

    const textHTML = `<li class="item" id="${id}">
                <i class="fa ${check_fill} co" job="complete" id="${id}"></i>
                <p class="text ${line}">${text}</p>
                <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
            </li>`
    const position = "beforeend"

    list.insertAdjacentHTML(position, textHTML)
}

function completeToDo(element) {
    element.classList.toggle(CHECK)
    element.classList.toggle(UNCHECK)
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)

    console.log(element.id)
    listArray[element.id].done = listArray[element.id].done ? false : true
    localStorage.setItem("TODO", JSON.stringify(listArray))
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
    console.log(element.id)
    listArray[element.id].trash = true
    localStorage.setItem("TODO", JSON.stringify(listArray))
}

function addToDoEvent() {
    const toDo = input.value
    if (toDo) {
        const item = {
            text: toDo,
            id: listIndex,
            done: false,
            trash: false
        }

        addToDo(item)
        listArray.push(item)
        localStorage.setItem("TODO", JSON.stringify(listArray))
        listIndex++
        input.value = ""
    }
}

input.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        addToDoEvent()
    }
})

plusBtn.addEventListener('click', (event) => {
    addToDoEvent()
})

list.addEventListener("click", (event) => {
    const element = event.target
    if (element) {
        const elementJob = (element.attributes.job) ? element.attributes.job.value : ''

        if (elementJob == "complete") {
            completeToDo(element)
        } else if (elementJob ==  "delete") {
            removeToDo(element)
        }
        localStorage.setItem("TODO", JSON.stringify(listArray))
    }
})

clear.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})