export async function categories() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/categories/categories.html');
    const categoriesHtml = await response.text();

    app.innerHTML = categoriesHtml;
}