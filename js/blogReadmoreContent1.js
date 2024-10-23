document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".dropdown-menu").forEach(function (element) {
  element.addEventListener("click", function (e) {
  e.stopPropagation();
});
});

if (window.innerWidth < 992) {
document
.querySelectorAll(".navbar .dropdown")
.forEach(function (everydropdown) {
    everydropdown.addEventListener("hidden.bs.dropdown", function () {
      this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
        everysubmenu.style.display = "none";
      });
    });
  });

document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
  element.addEventListener("click", function (e) {
    let nextEl = this.nextElementSibling;
    if (nextEl && nextEl.classList.contains("submenu")) {
      e.preventDefault();
      nextEl.style.display =
        nextEl.style.display == "block" ? "none" : "block";
    }
  });
});
}
});