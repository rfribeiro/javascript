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

    this.classList.add('over')

    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}

function dragLeave() {
    this.classList.remove('over')
}

function dragDrop() {
    this.classList.remove('over')
}