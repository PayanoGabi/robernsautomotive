var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let section = {
  header: document.querySelector(".topHeader"),
  nav: document.querySelector(".lowerNav")
};
//Create targeted elements
let navMenu = {
  about: document.querySelector(".about"),
  services: document.querySelector(".services"),
  location: document.querySelector(".location"),
  contact: document.querySelector(".contact")
};

let elements = {
  aboutUs: document.querySelector(".about-us"),
  servicesSection: document.querySelector(".services-info"),
  location: document.querySelector(".middleHeaderlocation"),
  locationImage: document.querySelector(".googlelocation"),
  contact: document.querySelector(".contactus")
};

//end targeted elements

//create functions to show and hide
let showServices = element => {
  element.style.display = "flex";
  element.style.flexDirection = "row";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.marginTop = "10%";
  element.style.width = "100%";
  element.style.fontWeight = "bold";
};

let showAbout = element => {
  element.style.display = "block";
};

let hide = element => {
  element.style.display = "none";
};

//end of show and hide functions

navMenu.services.addEventListener("click", function() {
  console.log("this works");
  hide(elements.aboutUs);
  hide(elements.location);
  hide(elements.contact);
  showServices(elements.servicesSection);

  console.log("this doesn't work");
});

navMenu.about.addEventListener("click", function() {
  hide(elements.servicesSection);
  hide(elements.location);
  hide(elements.contact);
  showAbout(elements.aboutUs);
});

navMenu.location.addEventListener("click", function() {
  console.log("works");
  hide(elements.aboutUs);
  hide(elements.servicesSection);
  hide(elements.contact);
  showAbout(elements.location);
  showAbout(elements.locationImage);
});

navMenu.contact.addEventListener("click", function() {
  hide(elements.aboutUs);
  hide(elements.servicesSection);
  showAbout(elements.contact);
  hide(elements.location);
  hide(elements.locationImage);
});
/*
navMenu.services.addEventListener("click", function() {
  console.log("this works");
  // navMenu.services.style.backgroundColor = "rgba(255, 255, 231, 0.5)";
  document.body.style.height = "100%";
  document.body.style.width = "100%";
  document.body.style.border = "5px solid black";
  document.body.style.fill = "rgba(0,0,0,0.5)";

  //document.body.style.backgroundColor = "rgba(55, 125, 255, 0.5)";
  console.log("this does not work");
});
*/
window.onload = function() {
  elements.servicesSection.style.display = "none";
  elements.location.style.display = "none";
  elements.contact.style.display = "none";
  elements.locationImage.style.display = "none";
};
// contact us page //

//API//

var wizardme = document.querySelector(".googlelocation");

document.getElementsByClassName(".googlepic").addEventListener(
  "click",
  function(event) {
    var xhr = new XMLHttpRequest();

    // Setup our listener to process request state changes
    xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        // This will run when it's not
        console.log("The request failed!");
      }
    };

    xhr.open(
      "GET",
      "http://api.ipstack.com/134.201.250.155?access_key=f2e7e5895e1b4545f7f5444dc3a1ac9d"
    );
    xhr.send();
  },
  false
);

var xhr = new XMLHttpRequest();
var data = xhr.responseText;

const renderLocation = (resp, container) => {
  const locationS = document.createElement("div");
  resp.articles.forEach(c => {
    article.innerHTML = `<h2>${c.title}</h2>
    <p>${c.author}</p>
    <p>${c.description}</p>
    <a href=${c.url} target="_blank">Article Link</a>
    `;
    container.append(article);
  });
};
