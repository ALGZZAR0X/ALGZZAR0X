let editBtnForAdmin = document.getElementById("editBton");
let isAdmin = localStorage.getItem("isAdmin");

if (isAdmin === "true") {
    editBtnForAdmin.classList.remove("d-none");
    editBtnForAdmin.classList.add("d-block");
} else if (isAdmin === "false") {
    editBtnForAdmin.classList.remove("d-block");
    editBtnForAdmin.classList.add("d-none");
}
