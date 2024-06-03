import { fetchUsers } from '../../api/profile.js';

export async function users() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/users/users.html');
    const usersHtml = await response.text();

    app.innerHTML = usersHtml;

    const usersResponse = await fetchUsers();
    const usersData = await usersResponse.json();
    console.log(usersData);

    const container = document.getElementById('auction-container');
    container.innerHTML = '';

    const auctionResponse = await fetchAuctions();
    const auctionsData = await auctionResponse.json();

    for (const auction of auctionsData) {
        const card = await createAuctionCard(auction);
        container.appendChild(card);
    }
}