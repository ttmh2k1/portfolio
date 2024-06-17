// const token = localStorage.setItem(
//   "token",
//   "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"
// );

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
  var url = "./BusinessAnalyst-TranThiMyHuyen.pdf";
  var filename = "BusinessAnalyst-TranThiMyHuyen.pdf";
  var element = document.createElement("a");
  element.setAttribute("href", url);
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// function updateViewCount() {
//   const githubUsername = "ttmh2k1";
//   const repoName = "portfolio";
//   const filePath = "viewCount.json";
//   const repoUrl = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${filePath}`;
//   // Make GET request to fetch current view count
//   fetch(repoUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const currentCount = JSON.parse(atob(data.content)); // Decode base64 content
//       const updatedCount = currentCount.count + 1;
//       console.log("currentCount", updatedCount);
//       // Update view count in the JSON content
//       const content = {
//         message: "Increment view count",
//         content: btoa(JSON.stringify({ count: updatedCount })),
//         sha: data.sha,
//       };
//       console.log("content", content);
//       // Make PUT request to update view count
//       fetch(repoUrl, {
//         method: "PUT",
//         headers: {
//           Authorization: `token ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(content),
//       })
//         .then((response) => {
//           console.log("response", response);
//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }
//           document.getElementById("viewCount").textContent = updatedCount;
//         })
//         .catch((error) => {
//           console.error("Error updating view count:", error);
//         });
//     })
//     .catch((error) => {
//       console.error("Error fetching view count:", error);
//     });
// }

// // Call updateViewCount function on page load
// window.onload = function () {
//   updateViewCount();
// };

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
