import { fetchProducts } from '../../api/products.js';

export async function home() {
    const app = document.getElementById('app');
    app.innerHTML = '<div class="container"><h1>Productos en Subasta</h1><div id="products"></div></div>';
    
    const products = await fetchProducts();
    const productsContainer = document.getElementById('products');
    
    products.forEach(product => {
        productsContainer.insertAdjacentHTML('beforeend', `
            <div class="card">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <button onclick="location.href='#/product/${product.id}'">Ver Detalles</button>
            </div>
        `);
    });
}
