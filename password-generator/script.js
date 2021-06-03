const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%*&(){}[]/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(lower, upper, number, symbol, length) {
    let genPassword = ''
    const typesCount = lower + upper + number + symbol
    console.log(typesCount)
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    )
    console.log(typesArr)
    if(typesCount === 0) {
        return ''
    }

    for (let i=0; i < length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            genPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = genPassword.slice(0, length)
    return finalPassword
}

generateEl.addEventListener("click", () => {
    resultEl.innerText = generatePassword(lowercaseEl.checked, 
        uppercaseEl.checked,
        numbersEl.checked,
        symbolsEl.checked,
        lengthEl.value)
})

clipboardEl.addEventListener("click", () => {
    const textArea = document.createElement("textarea")
    const password = resultEl.innerText
    if(!password) {
        return
    }
    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    textArea.remove()
})