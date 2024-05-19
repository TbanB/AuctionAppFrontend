import { apiUrl } from "../common/config.js";

async function fetchRegister(user) {
    const response = await fetch(`${apiUrl}/AuctionAppBackend/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...user }),
    });
    return response.status;
}

export { fetchRegister };