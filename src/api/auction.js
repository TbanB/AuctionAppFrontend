import { apiUrl } from "../common/config.js";

export async function fetchAuction(id) {
    const response = await fetch(`${apiUrl}/auctions/${id}`);
    return response;
}

export async function fetchAuctions() {
    const response = await fetch(`${apiUrl}/auctions`, {
        method: 'GET'
    });
    return response;
}
