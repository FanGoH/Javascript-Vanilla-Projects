document.addEventListener("DOMContentLoaded", () => {

    console.log("Javascript loaded")

    let body = document.getElementById("cuerpo")

    let boton = document.getElementById("boton")

    let nombreColor = document.getElementById("nombreColor")

    boton.addEventListener("click", (event) => {

        let nuevoColor = getNewRGBcolor()
        nombreColor.textContent = nuevoColor
        body.style.backgroundColor = nuevoColor

    })



})

function getNewRGBcolor() {

    const valores = "0123456789ABCDEF"

    let newColor = "#"

    for (i = 0; i < 6; i++) {
        newColor += valores[Math.floor(Math.random() * valores.length)]
    }

    return newColor

}