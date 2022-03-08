
/*** Team ***/

fetch("./team.json")
.then (response => response.json())
.then (data => {

  var teamContent = document.getElementById('team-content')

  for(item of data) {
    teamContent.innerHTML += `                
    <div class="team__card">
    <img src="assets/team/${item.id}.svg">
        <div class="team__card-description">
          <h3>${item.name}</h3>
          <p>${item.position}</p>
          <span>& ${item.description}</span>
        </div>
    </div>
`
  }
})


/*** Jobs ***/

fetch("./jobs.json")
.then (response => response.json())
.then (data => {

  var jobsContent = document.getElementById('job-content');

  for(item of data) {

    jobsContent.innerHTML += 
    `  
      <div class="job-card__header job-card__active" id="job-${item.id}">
        <img src="assets/jobs/${item.id}.png">
        <div class="job-card__header-title">
          <h3>${item.title}</h3>
          <span>${item.type}</span>
        </div>
        <div class="job-detail-trigger job-detail-trigger__${item.id}">
          <span>Ver más</span>
          <span class="material-icons">chevron_right</span>
        </div>
      </div>
    `
  }
}
)


fetch("./jobs.json")
.then (response => response.json())
.then (data => {

var jobsContentDetail = document.getElementById('job-content-details');
contentJobHTML = '';

for(item of data) {
  contentJobHTML += 
  `<div class="job-details job-details__${item.id}">
  <h4>Requisitos para el puesto:</h4>
  <ul class="responsabilities">
  `
  for (let i = 0; i < item.responsabilities.length; i++) {
    contentJobHTML += `
    <li>• ${item.responsabilities[i]}</li>
  `
  } 
  contentJobHTML +=
  `</ul>
  <h4>Tecnologías necesarias</h4>
  <ul class="necessary-skills">
  `
  for (let i = 0; i < item.necessaryskills.length; i++) {
    contentJobHTML += `
    <li>• ${item.necessaryskills[i]}</li>
    `
  } 
  contentJobHTML +=
  `
  </ul>
  <h4>Tecnologías deseables:</h4>
  <ul class="deseable-skills">`
  for (let i = 0; i < item.deseableskills.length; i++) {
    contentJobHTML += `
    <li> • ${item.deseableskills[i]}</li>
  `
  } 
  contentJobHTML +=
  `</ul>
</div>`

}  jobsContentDetail.innerHTML = contentJobHTML;
setTimeout(() => 1000);})




/***Proyectos***/

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


/***Drawer***/

const drawer = document.querySelector('.drawer');
const openDrawerElement = document.querySelector('.open-drawer');
const closeDrawerElement = document.querySelectorAll('.close-drawer');

const openDrawer = ()=>{
  openDrawerElement.addEventListener('click', ()=> {
    drawer.style.setProperty("display", "flex")
  })
}

const closeDrawer = ()=> {
  closeDrawerElement.forEach(element => {
    element.addEventListener('click', ()=> {
      drawer.style.setProperty("display", "none")
    })
  })
}

closeDrawer();
openDrawer();




/*ARREGLAR DOTS*/
/***Carrousel***/

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
      dots[i].className = dots[i].className.replace("dot-active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "dot-active";
}


/***Nav Observer***/

const pircaSectionsBlue = document.querySelectorAll('.section__blue');
const pircaSectionsWhite = document.querySelectorAll('.section__white');
const pircaNavbar = document.querySelector('.navbar');

const observerPirca = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.className === 'section__blue') {
      pircaNavbar.classList.remove('navbar--white');
      pircaNavbar.classList.add('navbar--blue');
      /*console.log('intersecting-blue')*/
    }
    else if (entry.isIntersecting && entry.target.className === 'section__white') {
      pircaNavbar.classList.remove('navbar--blue');
      pircaNavbar.classList.add('navbar--white');
      /*console.log('intersecting-white')*/
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

/*** Team ***/
/*
let team = {};

team.get = (url) => {
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
};
*/
