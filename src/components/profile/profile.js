export async function profile() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/profile/profile.html');
    const profileHtml = await response.text();

    app.innerHTML = profileHtml;
}