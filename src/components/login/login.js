import { saveToken, saveUserId } from "../../common/config.js";
import { fetchLogin } from "../../api/login.js";

export async function login() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/login/login.html');
    const loginHtml = await response.text();

    app.innerHTML = loginHtml;

    document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetchLogin(email, password);

    if (response.status === 200) {
        const data = await response.json();
        saveToken(data.token);
        saveUserId(data.userId);
        window.location.href = '#/';
        window.location.reload(true);
    } else {
        alert('Login fallido');
    }
}
