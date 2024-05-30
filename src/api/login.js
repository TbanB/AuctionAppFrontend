import { apiUrl } from "../common/config.js";

async function fetchLogin(email, password) {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    return response;
}

async function fetchCloseSession(idUser) {
    const response = await fetch(`${apiUrl}/login/${idUser}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    return response;
}

export { fetchLogin, fetchCloseSession };