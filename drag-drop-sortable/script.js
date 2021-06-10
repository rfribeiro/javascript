const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
})

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragOver)
    dropzone.addEventListener('dragleave', dragLeave)
    dropzone.addEventListener('drop', dragDrop)
})


// Card functions
function dragStart() {
    dropzones.forEach(dropzone => {
        dropzone.classList.add('highlight')
    })
    this.classList.add('is-dragging')
}

function dragEnd() {
    dropzones.forEach(dropzone => {
        dropzone.classList.remove('highlight')
    })
    this.classList.remove('is-dragging')
}

// Dropzones functions
function dragOver(e) {
    e.preventDefault()

    const afterElement = getDragAfterElement(this, e.clientY)
    this.classList.add('over')
    const cardBeingDragged = document.querySelector('.is-dragging')

    if (afterElement == null) {
        this.appendChild(cardBeingDragged)
    } else {
        this.insertBefore(cardBeingDragged, afterElement)
    }
}

function dragLeave() {
    this.classList.remove('over')
}

function dragDrop() {
    this.classList.remove('over')
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.card:not(.is-dragging)')]

    console.log(draggableElements.length)

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}