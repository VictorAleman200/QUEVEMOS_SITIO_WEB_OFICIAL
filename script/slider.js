const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

let operacion = 0;


function moveToRight() {
    operacion = operacion + 33.3
    slider.style.transform = `translate(-${operacion}%)`
}

function moveToLeft() {
    
}
