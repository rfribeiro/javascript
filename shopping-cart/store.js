const removeCartItemButtons = document.getElementsByClassName('btn-danger')
const quantityInputs = document.querySelectorAll('.cart-quantity-input')
const addToCartButtons = document.querySelectorAll('.shop-item-button')
const cartRowTemplate = document.getElementById('cart-item-row-template')
const btnPurchase = document.querySelector('.btn-purchase')

for (removeCartItemButton of removeCartItemButtons){
    removeCartItemButton.addEventListener('click', removeItemFromCart)
}

for (quantityInput of quantityInputs) {
    quantityInput.addEventListener('change', quantityChanged)
}

for (addToCartButton of addToCartButtons) {
    addToCartButton.addEventListener('click', addToCartButtonClicked)
}

btnPurchase.addEventListener('click', closePurchase)

function closePurchase() {
    alert('Thank you for your purchase')
    const cartItems = document.querySelector('.cart-items')
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function addToCartButtonClicked(event) {
    const button = event.target
    const shopItem = button.parentElement.parentElement
    const title = shopItem.querySelector('.shop-item-title').innerText
    const price = shopItem.querySelector('.shop-item-price').innerText
    const imgSrc = shopItem.querySelector('.shop-item-image').src
    addItemToCart(title, price, imgSrc)
}

function checkItemCartExist(title) {
    const cartRowsTitles = document.querySelectorAll('.cart-item-title')
    const cartItemNames = [...cartRowsTitles].find(cartRowTitle => cartRowTitle.innerText === title)
    if (cartItemNames) {
        const cartRow = cartItemNames.parentElement.parentElement
        const quantityElem = cartRow.querySelector('.cart-quantity-input')
        const quantity = parseInt(quantityElem.value)
        quantityElem.value = quantity + 1
        updateCartTotal()
        return true
    }
    return false
}

function addItemToCart(title, price, imgSrc) {
    if (checkItemCartExist(title)) {
        return
    }

    const cartRowElement = document.importNode(cartRowTemplate.content, true)
    const cartItems = document.querySelector('.cart-items')
    const titleElement = cartRowElement.querySelector('.cart-item-title')
    const priceElement = cartRowElement.querySelector('.cart-price')
    const imgElement = cartRowElement.querySelector('.cart-item-image')
    const btnRemoveElement = cartRowElement.querySelector('.btn-danger')
    const quantityElem = cartRowElement.querySelector('.cart-quantity-input')
    titleElement.innerText = title
    priceElement.innerText = price
    imgElement.src = imgSrc
    quantityElem.value = 1
    btnRemoveElement.addEventListener('click', removeItemFromCart)
    quantityElem.addEventListener('change', quantityChanged)

    cartItems.appendChild(cartRowElement)
    updateCartTotal()
}

function quantityChanged(event) {
    const input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function removeItemFromCart(event) {
    const buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal() {
    const cartRows = document.querySelectorAll('.cart-item-row')
    let total = 0
    cartRows.forEach(cartRow => {
        const priceElement = cartRow.querySelector('.cart-price')
        const quantityElement = cartRow.querySelector('.cart-quantity-input')

        const price = parseFloat(priceElement.innerText.replace('$',''))
        const quantity = quantityElement.value
        total = total + (price * quantity)
    })
    total = Math.round(total * 100)/100
    document.querySelector('.cart-total-price').innerText = `$${total}`
}