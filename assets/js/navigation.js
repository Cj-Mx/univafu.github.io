function loadNavigation(){
    // Router para servidor
    // document.getElementById("router-index").href = "https://univafu-ng.000webhostapp.com.html" ;
    // document.getElementById("router-secundaria").href = "https://univafu-ng.000webhostapp.com/colegio-valle-fuerte/Secundaria.html" ;
    // document.getElementById("router-prepa-hs").href = "https://univafu-ng.000webhostapp.com/prepa-univafu/higiene-salud.html" ;
    // document.getElementById("router-prepa-ti").href = "https://univafu-ng.000webhostapp.com/prepa-univafu/tecnologias.html" ;
    // document.getElementById("router-uni-lnut").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/nutricion.html" ;
    // document.getElementById("router-uni-gtyg").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/gestion-turistica-gastronomia.html" ;
    // document.getElementById("router-uni-tfyr").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/terapia-fisica.html" ;
    // document.getElementById("router-uni-tayl").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/terapia-audicion.html" ;
    // document.getElementById("router-uni-lmkt").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/licenciaturas/marketing-digital.html" ;

    // document.getElementById("router-uni-mdch").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/posgrados/desarrollo-capital-humano.html" ;
    // document.getElementById("router-uni-mnch").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/posgrados/nutricion-clinica.html" ;
    // document.getElementById("router-uni-epyr").href = "https://univafu-ng.000webhostapp.com/univafu-universidad/posgrados/especialidad-prevencion.html" ;

    // document.getElementById("router-fundacion-cli").href = "https://univafu-ng.000webhostapp.com/fundacion-univafu/clinica"
    
    // document.getElementById("router-idiomas").href = "https://univafu-ng.000webhostapp.com/univafu-idiomas/idiomas.html" ;
    // document.getElementById("router-privacidad").href = "https://univafu-ng.000webhostapp.com/avisoPrivacidad.html" ;


        document.getElementById("router-index").href = "http://127.0.0.1:5500/index.html" ;
    document.getElementById("router-secundaria").href = "http://127.0.0.1:5500/colegio-valle-fuerte/Secundaria.html" ;
    document.getElementById("router-prepa-hs").href = "http://127.0.0.1:5500/prepa-univafu/higiene-salud.html" ;
    document.getElementById("router-prepa-ti").href = "http://127.0.0.1:5500/prepa-univafu/tecnologias.html" ;
    document.getElementById("router-uni-lnut").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/nutricion.html" ;
    document.getElementById("router-uni-gtyg").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/gestion-turistica-gastronomia.html" ;
    document.getElementById("router-uni-tfyr").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/terapia-fisica.html" ;
    document.getElementById("router-uni-tayl").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/terapia-audicion.html" ;
    document.getElementById("router-uni-lmkt").href = "http://127.0.0.1:5500/univafu-universidad/licenciaturas/marketing-digital.html" ;

    document.getElementById("router-uni-mdch").href = "http://127.0.0.1:5500/univafu-universidad/posgrados/desarrollo-capital-humano.html" ;
    document.getElementById("router-uni-mnch").href = "http://127.0.0.1:5500/univafu-universidad/posgrados/nutricion-clinica.html" ;
    document.getElementById("router-uni-epyr").href = "http://127.0.0.1:5500/univafu-universidad/posgrados/especialidad-prevencion.html" ;

    document.getElementById("router-fundacion-cli").href = "http://127.0.0.1:5500/fundacion-univafu/clinica"
    
    document.getElementById("router-idiomas").href = "http://127.0.0.1:5500/univafu-idiomas/idiomas.html" ;
    document.getElementById("router-privacidad").href = "http://127.0.0.1:5500/avisoPrivacidad.html" ;


    window.location.pathname === '/' && loadNotices();

}


let noticias = [
    {
        "img" : [
            {
                "name" : "assets/images/noticias/noticia1.jpg"
            }
        ],
        "title": "Noticia 1",
        "description" : "ñaslkdpoqwkdlñksadpoqklñdkweimcxkcmrioemckl"
    },
    {
        "img" : [
            {
                "name" : "assets/images/noticias/noticia2.jpg"
            }
        ],
        "title": "Noticia 2",
        "description" : "ñaslkdpoqwkdlñksadpoqklñdkweimcxkcmrioemckl"
    },
    {
        "img" : [
            {
                "name" : "assets/images/noticias/noticia3.jpg"
            }
        ],
        "title": "Noticia 3",
        "description" : "ñaslkdpoqwkdlñksadpoqklñdkweimcxkcmrioemckl"
    },
    {
        "img" : [
            {
                "name" : "assets/images/noticias/noticia4.jpg"
            }
        ],
        "title": "Noticia 4",
        "description" : "4 ñaslkdpoqwkdlñksadpoqklñdkweimcxkcmrioemckl  lñaskdlñksalñdñasl sadlñasklñ kalñs 4"
    }
]

function loadNotices(){
    noticias.map((noticia, index)=> {
        var noticeImg = document.querySelector(`.nt${index+1}-img`);
        var noticeTitle = document.querySelector(`.nt${index+1}-title`);
        var noticeDescription = document.querySelector(`.nt${index+1}-description`);
        noticeImg.src = noticia.img[0].name;
        noticeTitle.innerHTML = noticia.title;
        noticeDescription.innerHTML = noticia.description;
    });
}

function showModal(nModal){
    document.querySelector('.modal-title').innerHTML = noticias[nModal].title; 
}


