function showOption() {
  const profile = document.querySelector(".profile");
  const after = document.querySelector(".after");
  const mobileAfter = document.querySelector(".mobile-after");

  if (window.innerWidth > 765) {
    after.classList.toggle("not-active");
  } else {
    mobileAfter.classList.toggle("not-active");
    profile.classList.toggle("not-active");
  }
}
