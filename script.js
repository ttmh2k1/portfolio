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
  var url = "./CV-TranThiMyHuyen-Business Analyst.pdf";
  var filename = "CV-TranThiMyHuyen-Business Analyst.pdf";
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

//slide experience
var currentIndex = 0;
function showSlides(index) {
  const slides = document.querySelectorAll(".experience-bg");
  const timelineSteps = document.querySelectorAll(".timeline-step");
  slides.forEach((slide) => (slide.style.display = "none"));

  if (index < 0) currentIndex = 0;
  else if (index >= slides.length - 1) currentIndex = slides.length - 2;
  else currentIndex = index;

  slides[currentIndex].style.display = "block";
  if (currentIndex + 1 < slides.length) {
    slides[currentIndex + 1].style.display = "block";
  }

  // Highlight timeline step
  timelineSteps.forEach((step) => step.classList.remove("active"));
  const timelineIndex = Math.floor(currentIndex); // mỗi mốc cho 2 experience
  if (timelineSteps[timelineIndex]) {
    timelineSteps[timelineIndex].classList.add("active");
  }
}

function plusDivs(n) {
  showSlides(currentIndex + n);
}

function currentDiv(n) {
  showSlides((n - 1) * 2); // vì mỗi trang hiển thị 2 cái
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(0);
});

document.addEventListener("DOMContentLoaded", function () {
  const timelineSteps = document.querySelectorAll(".timeline-step");
  const experienceBlocks = document.querySelectorAll(".experience-bg");

  timelineSteps.forEach((step) => {
    step.addEventListener("click", function () {
      const targetYear = this.getAttribute("data-year");
      timelineSteps.forEach((s) => s.classList.remove("active"));
      this.classList.add("active");
      showExperienceBlock(targetYear);
    });
  });

  function showExperienceBlock(targetYear) {
    const blocksByYear = [...experienceBlocks].reduce((acc, block) => {
      const year = block.getAttribute("data-year");
      if (!acc[year]) acc[year] = [];
      acc[year].push(block);
      return acc;
    }, {});

    const sortedYears = Object.keys(blocksByYear).sort((a, b) => b - a);
    const targetIndex = sortedYears.indexOf(targetYear);

    let blocksToShow = [];
    const sameYearBlocks = blocksByYear[targetYear] || [];

    if (sameYearBlocks.length >= 2) {
      blocksToShow = sameYearBlocks.slice(0, 2);
    } else {
      const prevYear = sortedYears[targetIndex + 1];
      const prevYearBlocks = blocksByYear[prevYear] || [];

      if (sameYearBlocks.length === 1) {
        blocksToShow.push(sameYearBlocks[0]);
        if (prevYearBlocks.length > 0) {
          blocksToShow.push(prevYearBlocks[0]);
        }
      }
    }

    if (blocksToShow.length < 2) {
      const nextYear = sortedYears[targetIndex - 1];
      const nextYearBlocks = blocksByYear[nextYear] || [];
      blocksToShow.push(...nextYearBlocks.slice(0, 2 - blocksToShow.length));
    }

    experienceBlocks.forEach((block) => {
      block.style.display = "none";
      // block.classList.remove("experience-chosen");
    });

    timelineSteps.forEach(
      (step) => step.classList.remove("active")
      // step.classList.remove("experience-chosen", "active")
    );

    blocksToShow.forEach((block) => {
      block.style.display = "block";
      // if (block.getAttribute("data-year") === targetYear) {
      //   block.classList.add("experience-chosen");
      // }
    });

    const step = document.querySelector(
      `.timeline-step[data-year="${targetYear}"]`
    );
    if (step) {
      step.classList.add("active");
    }
  }

  // Gọi mặc định cho năm đầu tiên
  const defaultYear = timelineSteps[0]?.getAttribute("data-year");
  if (defaultYear) {
    showExperienceBlock(defaultYear);
    timelineSteps[0].classList.add("active"); // highlight bước đầu tiên
  }
});

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
