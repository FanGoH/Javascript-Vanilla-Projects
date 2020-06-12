document.addEventListener("DOMContentLoaded", () => {

    console.log("Javascript Loaded")

    let contador = 0

    document.getElementById("increase").addEventListener("click", () => {
        contador += 1
        updateCounter(contador)
    })


    document.getElementById("decrease").addEventListener("click", () => {
        contador -= 1
        updateCounter(contador)

    })


    document.getElementById("reset").addEventListener("click", () => {
        contador = 0
        updateCounter(contador)

    })



})

function updateCounter(contador) {
    let numero = document.getElementById("number")

    numero.textContent = contador

    if (contador > 0) {
        numero.style.color = "green"
    } else if (contador < 0) {
        numero.style.color = "red"

    } else {
        numero.style.color = "blue"
    }

}