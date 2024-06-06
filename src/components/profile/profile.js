import { fetchGetUser, fetchUpdateUser, fetchDeleteUser } from '../../api/profile.js';
import { fetchUserAuctions } from '../../api/auction.js';
import { fetchCloseSession } from '../../api/login.js';
import { getUserId, removeToken, removeUserId, getUserRole } from '../../common/config.js';
import { convertDate } from '../../common/utils.js';
import { createAuctionCard } from '../../common/auctionCard/auctionCard.js'

export async function profile() {
    const app = document.getElementById('app');
    const role = getUserRole();
    
    const hash = window.location.hash;
    const queryParams = new URLSearchParams(hash.split('?')[1]);
    const userId = getUserId();
    const paramId = queryParams.get('id');
    const userResponse = await fetchGetUser(paramId || userId);
    const data = await userResponse.json();

    const response = await fetch('src/components/profile/profile.html');
    const profileHtml = await response.text();

    app.innerHTML = profileHtml;

    const form = document.getElementById('userForm');

    form.idUser.value = data.idUser;
    form.name.value = data.name;
    form.surname.value = data.surname;
    form.email.value = data.loginDetails.email;
    form.birthday.value = convertDate(data.birthday);
    form.address.value = data.address;
    form.country.value = data.country;
    form.description.value = data.description;
    form.isStore.checked = data.isStore;

    if (role !== 'Admin' && (paramId && paramId !== userId) || role === 'Admin' && !paramId || role === 'Admin' && (paramId && paramId === userId)) {
        notUserPrivilages(form);
    }

    document.getElementById('editUser').addEventListener('click', (e) => {
        e.preventDefault();
        handleUpdate(data);
    });

    document.getElementById('closeSession').addEventListener('click', (e) => {
        e.preventDefault();
        handleClose();
    });

    document.getElementById('deleteUser').addEventListener('click', (e) => {
        e.preventDefault();
        handleDelete();
    });

    const container = document.getElementById('profile-auction-container');
    container.innerHTML = '';

    const auctionResponse = await fetchUserAuctions(paramId || userId);
    const auctionsData = await auctionResponse.json();

    for (const auction of auctionsData) {
        const card = await createAuctionCard(auction);
        container.appendChild(card);
    }
}

async function handleUpdate(data) {
    const idUser = data.idUser;
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const birthday = document.getElementById('birthday').value;
    const address = document.getElementById('address').value.trim();
    const country = document.getElementById('country').value.trim();
    const description = document.getElementById('description').value.trim();
    const isStore = document.getElementById('isStore').checked;
    const loginDetails = data.loginDetails;

    if (!birthday) {
        alert("Por favor, introduce una fecha de nacimiento válida.");
        return;
    }

    const formattedBirthday = new Date(birthday).toISOString().split('T')[0];

    const editedData = { name, surname, birthday: formattedBirthday, address, country, description, isStore, loginDetails };
    const response = await fetchUpdateUser(idUser, editedData);

    if (response.status === 200) {
        alert("Se ha actualizado los datos del usuario");
    }
}

async function handleClose() {
    fetchCloseSession(getUserId());
    removeUserCredentials();
    window.location.href = '#/';
    window.location.reload(true);
}

async function handleDelete() {
    const confirmed = window.confirm("¿Estás seguro de querer borrar el usuario?");
    if (confirmed) {
        const response = await fetchDeleteUser(getUserId());
        if (response.status === 200) {
            removeUserCredentials();
            alert("Se ha eliminado el usuario");
            window.location.href = '#/';
            window.location.reload(true);
        }
    }
}

function notUserPrivilages(form) {
    Array.from(form.elements).forEach(element => element.disabled = true);
    // Ocultar botones
    document.getElementById('editUser').style.display = 'none';
    document.getElementById('closeSession').style.display = 'none';
    document.getElementById('deleteUser').style.display = 'none';
}

function removeUserCredentials() {
    removeUserId();
    removeToken();
}