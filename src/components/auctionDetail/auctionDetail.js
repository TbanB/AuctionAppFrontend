import { getUserRole, getToken } from '../../common/config.js';

export async function auctionDetail() {
    const app = document.getElementById('app');
    const role = getUserRole();
    const token = getToken();

    const hash = window.location.hash;
    const queryParams = new URLSearchParams(hash.split('?')[1]);
    const auctionString = queryParams.get('params');
    const auction = JSON.parse(auctionString);

    const response = await fetch('src/components/auctionDetail/auctionDetail.html');
    const auctionDetailHtml = await response.text();

    app.innerHTML = auctionDetailHtml;

    const form = document.getElementById('auctionForm');

    document.getElementById('auction-product-image').src = auction.img;
    form.querySelector('.product-name').textContent = auction.product.prodName;
    form.querySelector('.product-year').textContent = auction.product.year;
    form.querySelector('.initial-value').textContent = `€${auction.initialValue}`;
    form.querySelector('.goal-value').textContent = `€${auction.goalValue}`;
    form.querySelector('.final-value').textContent = auction.finalValue ? `€${auction.finalValue}` : '€ --';
    form.querySelector('.start-time').textContent = new Date(auction.startTime).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'medium' });
    form.querySelector('.end-time').textContent = new Date(auction.endTime).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'medium' });

    if (auction.isActive) {
        form.querySelector('.status-label').style.display = 'inline-block';
    }

    document.getElementById('bidButton').addEventListener('click', () => {
        const bidAmount = document.getElementById('bidAmount').value;
        if (bidAmount && bidAmount > 0) {
            alert(`Pujaste con éxito €${bidAmount}`);
        } else {
            alert('Por favor ingrese una cantidad válida para pujar.');
        }
    });

    const bidButton = document.getElementById('bidButton');
    const userProfileLink = document.getElementById('userProfileLink');
    userProfileLink.addEventListener('click', () => {
        const baseUrl = `#/profile`;
        const params = new URLSearchParams({ id: auction.idUser });
        window.location.href = `${baseUrl}?${params.toString()}`;
    });

    if (!role || !token) {
        userProfileLink.disabled = true;
        userProfileLink.style.backgroundColor = '#ccc';
        userProfileLink.style.cursor = 'not-allowed';
        bidButton.disabled = true;
        bidButton.style.backgroundColor = '#ccc';
        bidButton.style.cursor = 'not-allowed';
        document.getElementById('bidAmount').disabled = true;
    }

    document.getElementById('sendChatButton').addEventListener('click', () => {
        const message = document.getElementById('chatInput').value;
        if (message) {
            const chatMessages = document.getElementById('chatMessages');
            const newMessage = document.createElement('div');
            newMessage.textContent = message;
            chatMessages.appendChild(newMessage);
            document.getElementById('chatInput').value = '';
        }
    });
}
