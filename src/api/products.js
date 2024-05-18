import { apiUrl } from "../common/config.js";

export async function fetchProduct() {
    const response = await fetch(`${apiUrl}/products`);
    return response.json();
}

export async function fetchProducts() {
    const response = await fetch(`${apiUrl}/products`);
    return response.json();
}
