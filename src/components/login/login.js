import { saveToken } from "../../common/config.js";
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

    const response = fetchLogin(email, password);

    if (response.ok) {
        const data = await response.json();
        saveToken(data.token);
        window.location.href = '#/home';
    } else {
        console.error('Login fallido');
    }
}
