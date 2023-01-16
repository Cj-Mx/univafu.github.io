function loadNavigation() {
    document.getElementById("router-index").href = "http://127.0.0.1:5500";

    document.getElementById("router-secundaria").href = "http://127.0.0.1:5500/colegio-valle-fuerte/Secundaria.html";
    document.getElementById("router-prepa-hs").href = "http://127.0.0.1:5500/prepa-univafu/higiene-salud.html";
    // document.getElementById("router-prepa-ti").href = "http://127.0.0.1:5500/prepa-univafu/tecnologias.html";
    document.getElementById("router-uni-lnut").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/nutricion.html";
    document.getElementById("router-uni-gtyg").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/gestion-turistica-gastronomia.html";
    document.getElementById("router-uni-tfyr").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/terapia-fisica.html";
    document.getElementById("router-uni-tayl").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/terapia-audicion.html";
    document.getElementById("router-uni-lmkt").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/marketing-digital.html";
    document.getElementById("router-posgrados").href = "http://127.0.0.1:5500/univafu-universidad/posgrados/posgrados.html";


    // POSGRADOS NO SE ABRIERON
    // document.getElementById("router-uni-mdch").href = "http://127.0.0.1:5500/univafu-universidad/posgrados/desarrollo-capital-humano.html";
    // document.getElementById("router-uni-mnch").href = "http://127.0.0.1:5500/univafu-universidad/posgrados/nutricion-clinica.html";
    // document.getElementById("router-uni-epyr").href = "http://127.0.0.1:5500/univafu-universidad/posgrados/especialidad-prevencion.html";

    document.getElementById("router-fundacion-cli").href = "http://127.0.0.1:5500/fundacion-univafu/clinica.html";

    document.getElementById("router-idiomas").href = "http://127.0.0.1:5500/univafu-idiomas/idiomas.html";
    document.getElementById("router-privacidad").href = "http://127.0.0.1:5500/avisoPrivacidad.html";
    let path = window.location.pathname.split('/');
    (path[1] + '/' + path[2] === 'univafu-universidad/licenciaturas' || path[1] === 'prepa-univafu') && modalShow()  ;
    // window.location.pathname === '/univafu-universidad' && modalShow();
    // window.location.pathname.split('/')[1] === 'univafu-universidad' && modalShow();
    // console.log(window.location.pathname.split('/'));
}

function modalShow() {
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-plan")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }


}


