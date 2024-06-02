import { apiUrl } from "../common/config.js";

async function fetchCategories() {
    const response = await fetch(`${apiUrl}/categories`, {
        method: 'GET'
    });
    return response;
}

export { fetchCategories };