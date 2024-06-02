import { apiUrl } from "../common/config.js";

async function fetchAuction(id) {
    const response = await fetch(`${apiUrl}/auctions/${id}`, {
        method: 'GET'
    });
    return response;
}

async function fetchCategoryAuctions(id) {
    const response = await fetch(`${apiUrl}/auctions/category/${id}`, {
        method: 'GET'
    });
    return response;
}

async function fetchAuctions() {
    const response = await fetch(`${apiUrl}/auctions`, {
        method: 'GET'
    });
    return response;
}

async function fetchActiveAuctions() {
    const response = await fetch(`${apiUrl}/auctions/active`, {
        method: 'GET'
    });
    return response;
}

export { fetchAuction, fetchCategoryAuctions, fetchAuctions, fetchActiveAuctions };