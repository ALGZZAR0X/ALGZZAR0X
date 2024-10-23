    const deletedPostIds = localStorage.getItem('deletedPostIds');

    if (deletedPostIds) {
        const postIdsArray = deletedPostIds.split(',');

        postIdsArray.forEach(id => {
            const postElement = document.getElementById(id);
            if (postElement) {
                postElement.classList.add('d-none');
            }
        });
    }
