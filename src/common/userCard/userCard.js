export async function createUserCard(user) {
    const response = await fetch('src/common/userCard/userCard.html');
    const html = await response.text();
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    const card = template.content.firstChild;

    card.id = user.idUser;
    card.querySelector('.user-name').textContent = user.name;
    card.querySelector('.user-surname').textContent = user.surname;
    card.querySelector('.user-description').textContent = user.description;

    card.addEventListener('click', () => {
        const baseUrl = `#/profile`;
        const params = new URLSearchParams({ id: user.idUser });
        window.location.href = `${baseUrl}?${params.toString()}`;
    });

    return card;
}
