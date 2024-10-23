let postIdForAdmin = document.querySelectorAll('.admin-post-id');

if (isAdmin === "true") {
    postIdForAdmin.forEach(postId => {
        postId.classList.remove("d-none");
        postId.classList.add("d-block");
    });
} else if (isAdmin === "false") {
    postIdForAdmin.forEach(postId => {
        postId.classList.remove("d-block");
        postId.classList.add("d-none");
    });
}
