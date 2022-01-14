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
        "company": "TEDx Rïo de La Plata",
        "description": ""
    }
]

var projectContent = document.getElementById('slider-cases-content');

for(item of projects){
    projectContent.innerHTML += `                
    <div class="cases-detail mySlides">
        <img src="assets/${item.id}.JPG">
        <div>
          <h3>${item.title}</h3>
          <h4>${item.company}</h4>
        </div>
        <button class="btn btn__label">+ Ver más</button>
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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("slider__control-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " slider__control-active";
}

