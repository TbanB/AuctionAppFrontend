import { fetchProduct } from '../api/products.js';

export async function productDetail(params) {
    const app = document.getElementById('app');
    const product = await fetchProduct(params.id);
    
    app.innerHTML = `
        <div class="container">
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p>Precio inicial: ${product.startingPrice}</p>
            <button>Pujar</button>
        </div>
    `;
}
