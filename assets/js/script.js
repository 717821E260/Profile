'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage for theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggleButton.textContent = "☀️"; // Sun icon for light mode
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️"; // Switch to sun icon
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙"; // Switch to moon icon
  }
});



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
      img.addEventListener("click", function() {
          alert("You clicked on " + this.alt);
      });
  });

  // Certification Data
  const certifications = [
      { title: "Infosys online Certificationr", issuer: "Udemy", year: "2024" },
      { title: "JavaScript Mastery", issuer: "Coursera", year: "2023" },
      { title: "Python for Data Science", issuer: "edX", year: "2022" }
  ];

  // Add Certifications to the Page
  const certContainer = document.getElementById("certifications-list");

  if (certContainer) {
      certifications.forEach(cert => {
          const certDiv = document.createElement("div");
          certDiv.classList.add("certification");
          certDiv.innerHTML = `<h3>${cert.title}</h3><p>Issued by: ${cert.issuer} (${cert.year})</p>`;
          certContainer.appendChild(certDiv);
      });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".gallery img");
  
  images.forEach(img => {
      img.addEventListener("click", function() {
          alert("You clicked on " + this.alt);
      });
  });

  // Apply animation when the section is in view
  const certifications = document.querySelectorAll(".certification");
  function checkScroll() {
      certifications.forEach((cert, index) => {
          const rect = cert.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
              cert.style.animationDelay = `${index * 0.2}s`;
              cert.classList.add("visible");
              cert.style.animation = "fadeInUp 0.8s ease-out forwards";
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on page load in case already visible

  // Set background image for home page
  document.body.style.backgroundImage = "url('assets/images/home-bg.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
});

