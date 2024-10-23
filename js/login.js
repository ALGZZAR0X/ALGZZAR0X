document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true;

    if (email === "") {
        document.getElementById('emailError').textContent = "Email is required.";
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (password === "") {
        document.getElementById('passwordError').textContent = "Password is required.";
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }
});

// determine where login go.
const loginButton = document.querySelector("#loginBtn");
const alertDiv = document.querySelector("#message .alert");

loginButton.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === 'admin@travel.com' && password === 'adminpassword') {
        localStorage.setItem('isAdmin', 'true');
        window.location.href = 'home.html';
    } else {
        localStorage.setItem('isAdmin', 'false');
        alertDiv.classList.remove('d-none');
        alertDiv.classList.add('d-block');
    }
});

