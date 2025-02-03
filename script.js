document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navList = document.querySelector(".nav-list");
  const navItems = document.querySelectorAll(".nav-item");

  // Toggle menu visibility when menu button is clicked
  menuBtn.addEventListener("click", function () {
    navList.classList.toggle("show");
  });

  // Hide menu when a menu item is clicked
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navList.classList.remove("show");
    });
  });

  // Hide menu when clicking outside of it
  document.body.addEventListener("click", function (event) {
    if (!menuBtn.contains(event.target) && !navList.contains(event.target)) {
      navList.classList.remove("show");
    }
  });
});

function downloadFile() {
  var url = "./TranThiMyHuyen-Business Analyst.pdf";
  var filename = "TranThiMyHuyen-Business Analyst.pdf";
  var element = document.createElement("a");
  element.setAttribute("href", url);
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backTop").style.display = "block";
  } else {
    document.getElementById("backTop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function plusSlides(n) {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
