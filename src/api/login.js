import { apiUrl } from "../common/config.js";

async function fetchLogin(email, password) {
    const response = await fetch(`${apiUrl}/AuctionAppBackend/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
}

export { fetchLogin };