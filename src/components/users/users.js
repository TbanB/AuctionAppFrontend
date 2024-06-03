import { fetchUsers } from '../../api/profile.js';
import { createUserCard } from '../../common/userCard/userCard.js'

export async function users() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/users/users.html');
    const usersHtml = await response.text();

    app.innerHTML = usersHtml;

    const container = document.getElementById('users-container');
    container.innerHTML = '';

    const usersResponse = await fetchUsers();
    const usersData = await usersResponse.json();

    for (const user of usersData) {
        const card = await createUserCard(user);
        container.appendChild(card);
    }
}