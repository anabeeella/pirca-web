var projects = [ 
    {
        "id": 1,
        "title": "Voto electrónico",
        "company": "Cámara de Senadores de la República Argentina",
        "description": ""
    },
    {
        "id": 2,
        "title": "Sistema de automatización de Radio",
        "company": "Insoft Radio",
        "description": ""
    },
    {
        "id": 3,
        "title": "Audio guía con geo-posicionamiento",
        "company": "Cementerio de la Recoleta",
        "description": ""
    },
    {
        "id": 4,
        "title": "Consultoría",
        "company": "TEDx Río de La Plata",
        "description": ""
    }
]

var casesContent = document.getElementById('slider-cases-content');

for(item of projects){
    casesContent.innerHTML += `                
    <div class="cases-detail mySlides">
        <img src="assets/${item.id}.JPG">
        <div class="cases-text">
          <h3>${item.title}</h3>
          <h4>${item.company}</h4>
        <button class="btn btn__label">+ Ver más</button>
        </div>
    </div>
`
}






var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("punto");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("dot-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "dot-active";
}



const pircaSectionsBlue = document.querySelectorAll('.section__blue');
const pircaSectionsWhite = document.querySelectorAll('.section__white');
const pircaNavbar = document.querySelector('.navbar');

const observerPirca = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.className === 'section__blue') {
      pircaNavbar.classList.remove('navbar--white');
      pircaNavbar.classList.add('navbar--blue');
      console.log('intersecting-blue')
    }
    else if (entry.isIntersecting && entry.target.className === 'section__white') {
      pircaNavbar.classList.remove('navbar--blue');
      pircaNavbar.classList.add('navbar--white');
      console.log('intersecting-white')
    }
    else {
      console.log('not-intersecting');
    }
  });
}, {threshold: [0,1]});
  

pircaSectionsBlue.forEach(pircaSectionBlue=> {
  observerPirca.observe(pircaSectionBlue);
});

pircaSectionsWhite.forEach(pircaSectionWhite=> {
  observerPirca.observe(pircaSectionWhite);
});

/*Cuando pasa por "Cases-content" hacer que se vaya el fondo directamente*/
/*En desktop no funciona*/

