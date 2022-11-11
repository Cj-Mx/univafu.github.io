// script para mostrar el navbar de otro color despues de scroll
var scrollP = window.scrollY;
window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 150 && window.scrollY < scrollP) { //Condicion para mostrar el navbar solo cuando se desplace hacia abajo
        document.getElementsByClassName("header-area")[0].style.backgroundColor = "black";
        document.getElementsByClassName("header-area")[0].style.position = "fixed";
        document.getElementsByClassName("header-area")[0].style.top = "0px";
    } else {
        document.getElementsByClassName("header-area")[0].style.position = "absolute";
        document.getElementsByClassName("header-area")[0].style.top = "50px";
        document.getElementsByClassName("header-area")[0].style.backgroundColor = "rgba(0, 0, 0, 0.15)"
    }
    scrollP = window.scrollY;
}


// script para mostrar una barra de progreso

let activeProgressBar = false;
function reveal() {
    var reveals = document.querySelectorAll(".no-progress");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("progress");
            reveals[i + 1].classList.add("progress");
            reveals[i + 2].classList.add("progress");
            i = reveals.length;
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

// script para enviar mensajes whatsapp
function sendMessageWhatsapp(){
    window.open('https://wa.me/573001112233?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio', '_blank');
}