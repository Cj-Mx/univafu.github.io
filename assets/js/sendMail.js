function enviarCorreo() {
    // params = {
    //     nombre: document.getElementById('nombre'),
    //     email = document.getElementById('email');
    //     telefono = document.getElementById('telefono');
    //     mensaje = document.getElementById('mensaje');
    // }
    // nombre = document.getElementById('nombre');
    // email = document.getElementById('email');
    // telefono = document.getElementById('telefono');
    // mensaje = document.getElementById('mensaje');
    // if (email == '' || email == null) {
    //     alert('no se ingresó correo');
    //     email.focus();
    //     return false;
    // }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://pagetest98.000webhostapp.com/assets/js/sendEmail.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 || this.status === 200) {
            console.log(this.responseText); // echo from php
        }
    };
    //correo enviado a mi archivo/ruta php
    xmlhttp.send();


}
