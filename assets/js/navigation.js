function loadNavigation(){
    document.getElementById("router-index").href = "http://127.0.0.1:5500" ;
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

    document.getElementById("router-fundacion-cli").href = "http://127.0.0.1:5500/fundacion-univafu/clinica.html"
    
    document.getElementById("router-idiomas").href = "http://127.0.0.1:5500/univafu-idiomas/idiomas.html" ;
    loadNotices();
}


var noticias = [
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


