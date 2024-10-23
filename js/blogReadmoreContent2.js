function toggleToc() {
  var tocList = document.getElementById("toc-list");
  var tocToggle = document.querySelector(".toc-toggle");
  if (tocList.style.display === "none") {
    tocList.style.display = "block";
    tocToggle.innerHTML = "[ hide ]";
  } else {
    tocList.style.display = "none";
    tocToggle.innerHTML = "[ show ]";
  }
}