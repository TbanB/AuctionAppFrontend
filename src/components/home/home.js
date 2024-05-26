import { fetchProducts } from '../../api/products.js';

export async function home() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/home/home.html');
    const homeHtml = await response.text();

    app.innerHTML = homeHtml;
}
