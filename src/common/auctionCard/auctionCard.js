export async function createAuctionCard(auction) {
    const response = await fetch('src/common/auctionCard/auctionCard.html');
    const html = await response.text();
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    const card = template.content.firstChild;

    console.log('card', card);
    card.querySelector('.product-name').textContent = auction.product.prodName;
    card.querySelector('.product-category').textContent = `Category: ${auction.product.catName}`;
    card.querySelector('.product-description').textContent = auction.product.prodDescription;
    card.querySelector('.product-year').textContent = `Year: ${auction.product.year}`;

    card.querySelector('.initial-value').textContent = `Initial Value: $${auction.initialValue}`;
    card.querySelector('.goal-value').textContent = `Goal Value: $${auction.goalValue}`;
    card.querySelector('.final-value').textContent = `Final Value: $${auction.finalValue}`;
    card.querySelector('.start-time').textContent = `Start Time: ${auction.startTime}`;
    card.querySelector('.end-time').textContent = `End Time: ${auction.endTime}`;
    card.querySelector('.is-active').textContent = auction.isActive ? 'Active' : 'Inactive';

    return card;
}