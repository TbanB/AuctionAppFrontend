import { fetchAuctions } from '../../api/auction.js';
import { createAuctionCard } from '../../common/auctionCard/auctionCard.js';

export async function home() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/home/home.html');
    const homeHtml = await response.text();

    app.innerHTML = homeHtml;

    const container = document.getElementById('auction-container');
    container.innerHTML = '';

    const auctionResponse = await fetchAuctions();
    const data = await auctionResponse.json();

    console.log('Auctions: ', data);

    for (const auction of data) {
        const card = await createAuctionCard(auction);
        container.appendChild(card);
    }
}
