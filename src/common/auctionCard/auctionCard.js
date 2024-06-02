export async function createAuctionCard(auction) {
    const response = await fetch('src/common/auctionCard/auctionCard.html');
    const html = await response.text();
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    const card = template.content.firstChild;

    card.querySelector('.product-name').textContent = auction.product.prodName;
    card.querySelector('.product-category').textContent = auction.product.catName;
    card.querySelector('.active-auction').style.display = auction.isActive ? 'block' : 'none';
    card.querySelector('.product-description').textContent = auction.product.prodDescription;
    card.querySelector('.product-year').textContent = `${auction.product.year}`;

    card.querySelector('.initial-value').textContent = `€${auction.initialValue}`;
    card.querySelector('.goal-value').textContent = `€${auction.goalValue}`;
    card.querySelector('.final-value').textContent = `€${auction.finalValue ? auction.finalValue : ' --'}`;
    card.querySelector('.start-time').textContent = auction.startTime;
    card.querySelector('.end-time').textContent = auction.endTime;

    return card;
}