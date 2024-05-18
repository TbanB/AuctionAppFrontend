export async function activeAuctions() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/activeAuctions/activeAuctions.html');
    const activeAuctionsHtml = await response.text();

    app.innerHTML = activeAuctionsHtml;
}