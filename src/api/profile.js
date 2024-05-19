import { apiUrl, getToken } from "../common/config.js";

async function fetchGetUser(user) {
    const response = await fetch(`${apiUrl}/AuctionAppBackend/users/${user}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
    return response;
}

export { fetchGetUser };