import { fetchGetUser } from '../../api/profile.js';
import { getUserId } from '../../common/config.js';

export async function profile() {
    const app = document.getElementById('app');
    const userResponse = await fetchGetUser(getUserId());
    const data = await userResponse.json();

    console.log(data);

    const response = await fetch('src/components/profile/profile.html');
    const profileHtml = await response.text();

    app.innerHTML = profileHtml;
}