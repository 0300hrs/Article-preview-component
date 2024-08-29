let mobileModal = document.getElementsByClassName("mobile-after");
let desktopModal = document.querySelector("after");
let profile = document.querySelector("profile");
let toggle = document.getElementById("share");

// toggle.addEventListener("click", () => {
//   alert("I've been clicked");
//   console.log("Ive been clicked");
// });

toggle.addEventListener("click", () => {
  if (window.innerWidth > 1024) {
    console.log("Scree width is greater than 1024");
  } else {
    console.log("Scree width is less than 1024");
  }
});
