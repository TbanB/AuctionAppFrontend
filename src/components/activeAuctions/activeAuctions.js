import { fetchActiveAuctions } from '../../api/auction.js';
import { createAuctionCard } from '../../common/auctionCard/auctionCard.js';

export async function activeAuctions() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/activeAuctions/activeAuctions.html');
    const activeAuctionsHtml = await response.text();

    app.innerHTML = activeAuctionsHtml;

    const container = document.getElementById('auction-container');
    container.innerHTML = '';

    const auctionResponse = await fetchActiveAuctions();
    const data = await auctionResponse.json();

    for (const auction of data) {
        const card = await createAuctionCard(auction);
        container.appendChild(card);
    }
}
