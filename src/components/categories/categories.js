import { fetchCategories } from '../../api/category.js';
import { fetchCategoryAuctions } from '../../api/auction.js';
import { createCategoryCard } from '../../common/categoryCard/categoryCard.js';
import { createAuctionCard } from '../../common/auctionCard/auctionCard.js';

export async function categories() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/categories/categories.html');
    const homeHtml = await response.text();

    app.innerHTML = homeHtml;

    const container = document.getElementById('category-container');
    container.innerHTML = '';

    const categoriesResponse = await fetchCategories();
    const data = await categoriesResponse.json();

    setCategories(container, data);
}

async function setCategories(container, categories) {
    for (const category of categories) {
        const card = await createCategoryCard(category);
        container.appendChild(card);
        const cateCard = document.getElementById(category.idCategory);
        cateCard.addEventListener('click', () => {
            fetchFilteredAuctions(category.idCategory);
        })
    }
}

async function fetchFilteredAuctions(id) {
    const auctionResponse = await fetchCategoryAuctions(id);
    const data = await auctionResponse.json();

    const container = document.getElementById('filtered-auctions');
    container.innerHTML = '';

    for (const auction of data) {
        const card = await createAuctionCard(auction);
        container.appendChild(card);
    }
}