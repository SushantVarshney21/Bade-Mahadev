const slides = document.querySelectorAll(".slide")
var counter = 0

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    if (counter == 0) {
        counter = slides.length - 1;
        slideImage()
    } else {
        counter--
        slideImage()
    }
}
const goNext = () => {
    console.log("next")
    if (counter == slides.length - 1) {
        counter = 0
        slideImage()
    } else {
        counter++
        slideImage()
    }
}


setInterval(() => {
    if (counter == slides.length - 1) {
        counter = 0
        slideImage()
    } else {
        counter++
        slideImage()
    }
}, 4000)



const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}


let popup = document.getElementById("popup")

function onPopup() {
    popup.classList.add("op")
}

function closePopup() {
    popup.classList.remove("op")
}

let buyPopup = document.getElementById("buy-popup")

function onBuyPopup() {
    buyPopup.classList.add("buy-op")
    console.log("add list")
}

function closeBuyPopup() {
    buyPopup.classList.remove("buy-op")
}