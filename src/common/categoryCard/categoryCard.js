import { categoryImage } from "../resources.js";
export async function createCategoryCard(category) {
    const response = await fetch('src/common/categoryCard/categoryCard.html');
    const html = await response.text();
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    const card = template.content.firstChild;

    card.id = category.idCategory;
    card.querySelector('#cate-img').src = categoryImage(category.catName);
    card.querySelector('.category-title').textContent = category.catName;

    return card;
}