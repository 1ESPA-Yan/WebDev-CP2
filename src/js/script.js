//========== FUNÇÃO SLIDESHOW ==========

let slides = document.getElementsByClassName("slide");

// VARIÁVEIS
let i = 0;
let tempo = 3000; 

// FUNÇÃO 
function slideShow() {
    for (let j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    slides[i].style.display = "block";
    i++;
    if (i == slides.length) {
        i = 0;
    }
    setTimeout(slideShow, tempo);
}
slideShow();

//========== FUNÇÃO MUDAR TEMA ==========

let btnClaro = document.getElementById("tema-claro");
let btnEscuro = document.getElementById("tema-escuro");
let btnMisto = document.getElementById("tema-misto");

btnClaro.addEventListener("click", function() {
    document.body.className = "tema-claro";
});

btnEscuro.addEventListener("click", function() {
    document.body.className = "tema-escuro";
});

btnMisto.addEventListener("click", function() {
    document.body.className = "tema-misto";
});