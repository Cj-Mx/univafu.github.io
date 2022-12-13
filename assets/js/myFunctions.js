

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


// script para mostrar una barra de progreso al hacer scroll
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
            if (reveals[i + 2]) reveals[i + 2].classList.add("progress");
            i = reveals.length;
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();


// script para enviar mensajes whatsapp
function sendMessageWhatsapp() {
    window.open('https://wa.me/+516688299539?text=Hola!%20Quisiera%20obtener%20mayor%20informacion', '_blank');
}


function password_show_hide(){
    var password = document.getElementById('password');
    var iconShow = document.getElementById('show_eye');
    var iconHide = document.getElementById('hide_eye');
    if(password.type == 'password'){
        password.type = 'text';
        iconHide.classList.add('d-none');
        iconShow.classList.remove('d-none');
        return;
    }
    password.type = 'password';
    iconShow.classList.add('d-none');
    iconHide.classList.remove('d-none');
}

$("#contact").submit(function(e) {
    e.preventDefault();
});

// Validar formulario
function validateForm(){
    var form = document.formContact;
    // console.log(form.email.validity);
    let validateEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
    return form.nombre.value == '' || form.email.value == '' || form.telefono.value == '' || form.mensaje.value == '' || !validateEmail || form.telefono.value.length != 10 ?  false :  true; 
}

function enviarCorreo(emailTo) {
    if(!validateForm()){
        return alert("Por favor rellena todos los campos correctamente");
    };
    params = {
         nombre: document.getElementById('nombre').value,
         email : document.getElementById('email').value,
         telefono : document.getElementById('telefono').value,
         mensaje : document.getElementById('mensaje').value,
         emailTo: emailTo
    }
    var nombre = document.getElementById('nombre').value;
    console.log(params);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://pagetest398.000webhostapp.com/assets/js/sendEmail.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 || this.status === 200) {
            console.log(this.responseText); // echo from php
        }
    };
    //correo enviado a mi archivo/ruta php
    xmlhttp.send(JSON.stringify(params));

}
