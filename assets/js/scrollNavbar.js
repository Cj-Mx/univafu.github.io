// script para mostrar el navbar de otro color despues de scroll

window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {

        document.getElementsByClassName("header-area")[0].style.backgroundColor = "black";
        document.getElementsByClassName("header-area")[0].style.position = "fixed";
        document.getElementsByClassName("header-area")[0].style.top = "0px";
    } else {
        document.getElementsByClassName("header-area")[0].style.position = "absolute";
        document.getElementsByClassName("header-area")[0].style.top = "50px";
        document.getElementsByClassName("header-area")[0].style.backgroundColor = "rgba(0, 0, 0, 0.15)"
    }
}
