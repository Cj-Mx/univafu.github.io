

function enviarCorreo(emailTo) {
    params = {
         nombre: document.getElementById('nombre').value,
         email : document.getElementById('email').value,
         telefono : document.getElementById('telefono').value,
         mensaje : document.getElementById('mensaje').value,
         emailTo : emailTo
    }
    var nombre = document.getElementById('nombre').value;
    console.log(params);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://univafu.edu.mx/assets/js/sendEmail.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 || this.status === 200) {
            console.log(this.responseText); // echo from php
        }
    };
    //correo enviado a mi archivo/ruta php
    xmlhttp.send(JSON.stringify(params));

}
