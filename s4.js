document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        showMessage('Registration successful!', 'green');
        document.getElementById('registerForm').reset();
        showLogin();
    } else {
        showMessage('Please fill in all fields.', 'red');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        showMessage('Login successful!', 'green');
        document.getElementById('loginForm').reset();
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('securedPage').style.display = 'block';
    } else {
        showMessage('Incorrect username or password.', 'red');
    }
});

document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('securedPage').style.display = 'none';
    showLogin();
});

document.getElementById('showLogin').addEventListener('click', showLogin);
document.getElementById('showRegister').addEventListener('click', showRegister);

function showLogin() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('message').textContent = '';
}

function showRegister() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
    document.getElementById('message').textContent = '';
}

function showMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}
