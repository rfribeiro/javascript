const btnToggle = document.querySelector(".toggle-password")
const pwdFieldEl = document.getElementById("password-field")

btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle("active")
    if (pwdFieldEl.getAttribute("type") == "password") {
        pwdFieldEl.setAttribute("type", "text")
    } else {
        pwdFieldEl.setAttribute("type", "password")
    }
})

pwdFieldEl.addEventListener("focus", () => {
    const pwdPolEl = document.querySelector(".password-policies")
    pwdPolEl.classList.add("active")
})

pwdFieldEl.addEventListener("blur", () => {
    const pwdPolEl = document.querySelector(".password-policies")
    pwdPolEl.classList.remove("active")
})

pwdFieldEl.addEventListener("keyup", () => {
    let password = pwdFieldEl.value

    const pwdPolUpEl = document.querySelector(".policy-uppercase")
    const pwdPolLenEl = document.querySelector(".policy-length")
    const pwdPolNumEl = document.querySelector(".policy-number")
    const pwdPolSpeEl = document.querySelector(".policy-special")

    console.log(password)

    if (/[A-Z]/.test(password)) {
        pwdPolUpEl.classList.add("active")   
    } else {
        pwdPolUpEl.classList.remove("active")   
    }

    if (/[0-9]/.test(password)) {
        pwdPolNumEl.classList.add("active")   
    } else {
        pwdPolNumEl.classList.remove("active")   
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        pwdPolSpeEl.classList.add("active")   
    } else {
        pwdPolSpeEl.classList.remove("active")   
    }

    if (password.length > 10) {
        pwdPolLenEl.classList.add("active")   
    } else {
        pwdPolLenEl.classList.remove("active")   
    }
})