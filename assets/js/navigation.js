function loadNavigation() {
    // Router para servidor
    // document.getElementById("router-index").href = "https://univafu-ng.000webhostapp.com" ;
    // document.getElementById("router-secundaria").href = "https://univafu-ng.000webhostapp.com/colegio-valle-fuerte/Secundaria" ;
    // document.getElementById("router-prepa-hs").href = "https://univafu-ng.000webhostapp.com/prepa-univafu/higiene-salud" ;
    // document.getElementById("router-prepa-ti").href = "https://univafu-ng.000webhostapp.com/prepa-univafu/tecnologias" ;
    // document.getElementById("router-uni-lnut").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/nutricion" ;
    // document.getElementById("router-uni-gtyg").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/gestion-turistica-gastronomia" ;
    // document.getElementById("router-uni-tfyr").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/terapia-fisica" ;
    // document.getElementById("router-uni-tayl").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/terapia-audicion" ;
    // document.getElementById("router-uni-lmkt").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/marketing-digital" ;

    // document.getElementById("router-uni-mdch").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/posgrados/desarrollo-capital-humano" ;
    // document.getElementById("router-uni-mnch").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/posgrados/nutricion-clinica" ;
    // document.getElementById("router-uni-epyr").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/posgrados/especialidad-prevencion" ;

    // document.getElementById("router-fundacion-cli").href = "https://univafu-ng.000webhostapp.com/fundacion-univafu/clinica"

    // document.getElementById("router-idiomas").href = "https://univafu-ng.000webhostapp.com/univafu-idiomas/idiomas" ;
    // document.getElementById("router-privacidad").href = "https://univafu-ng.000webhostapp.com/avisoPrivacidad" ;


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
    path[1] + '/' + path[2] === 'univafu-universidad/licenciaturas' && modalShow();
    // window.location.pathname === '/univafu-universidad' && modalShow();
    // window.location.pathname.split('/')[1] === 'univafu-universidad' && modalShow();
    // console.log(window.location.pathname.split('/'));
}

function modalShow(){
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


