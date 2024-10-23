const deleteInput = document.getElementById('deleteInput');
const deleteBtn = document.getElementById('deleteBtn');
const restoreBtn = document.getElementById('restoreBtn');
const errorAlert = document.getElementById('errorAlert');

// Enable or disable the delete and restore buttons based on input value
deleteInput.addEventListener('input', () => {
    const inputValue = deleteInput.value.trim();
    deleteBtn.disabled = inputValue === '';
    restoreBtn.disabled = inputValue === '';
});

// Function to add post ID to localStorage
deleteBtn.addEventListener('click', () => {
    let postId = deleteInput.value.trim();
    if (!postId.startsWith('0')) {
        errorAlert.classList.remove('d-none');
    } else {
        errorAlert.classList.add('d-none');
        let deletedPostIds = localStorage.getItem('deletedPostIds');
        if (deletedPostIds) {
            deletedPostIds += ',' + postId;
        } else {
            deletedPostIds = postId;
        }
        localStorage.setItem('deletedPostIds', deletedPostIds);
        deleteInput.value = '';
        deleteBtn.disabled = true;
        restoreBtn.disabled = true;
    }
});

// Function to restore post ID from localStorage
restoreBtn.addEventListener('click', () => {
    let postId = deleteInput.value.trim();
    if (!postId.startsWith('0')) {
        errorAlert.classList.remove('d-none');
    } else {
        errorAlert.classList.add('d-none');
        let deletedPostIds = localStorage.getItem('deletedPostIds');
        if (deletedPostIds) {
            let idsArray = deletedPostIds.split(',');
            let index = idsArray.indexOf(postId);
            if (index > -1) {
                idsArray.splice(index, 1);
                localStorage.setItem('deletedPostIds', idsArray.join(','));
                // alert('Post ID ' + postId + ' has been restored.');
            } else {
                // alert('Post ID ' + postId + ' was not found in the deleted posts list.');
            }
        } else {
            // alert('No deleted posts found.');
        }
        deleteInput.value = '';
        deleteBtn.disabled = true;
        restoreBtn.disabled = true;
    }
});

const iframe = document.getElementById('myIframe');
iframe.onload = function () {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const navElement = iframeDoc.querySelector('nav');
    if (navElement) {
        navElement.classList.add('d-none');
    }
    const footerElement = iframeDoc.querySelector('footer');
    if (footerElement) {
        footerElement.classList.add('d-none');
    }
    const headerElement = iframeDoc.querySelector('header');
    if (headerElement) {
        headerElement.classList.add('d-none');
    }
    const brElements = iframeDoc.querySelectorAll('br');
    if (brElements.length > 0) {
        brElements.forEach((br) => {
            br.classList.add('d-none');
        });
    }
}