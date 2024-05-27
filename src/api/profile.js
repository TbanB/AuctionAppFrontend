import { apiUrl, getToken } from "../common/config.js";

async function fetchGetUser(userId) {
    const response = await fetch(`${apiUrl}/AuctionAppBackend/users/${userId}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
    return response;
}

async function fetchUpdateUser(userId, data) {
    const response = await fetch(`${apiUrl}/AuctionAppBackend/users/${userId}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${getToken()}` },
        body: JSON.stringify({ ...data })
    });
    return response;
}

async function fetchDeleteUser(userId) {
    const response = await fetch(`${apiUrl}/AuctionAppBackend/users/${userId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${getToken()}` }
    });
    return response;
}

export { fetchGetUser, fetchUpdateUser, fetchDeleteUser };