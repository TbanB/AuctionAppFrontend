import { fetchRegister } from '../../api/register.js';

export async function register() {
    const app = document.getElementById('app');

    const response = await fetch('src/components/register/register.html');
    const registerHtml = await response.text();

    app.innerHTML = registerHtml;
    
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    });
}

async function validateForm() {
    const errorMessages = [];
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const passwordConf = document.getElementById('passwordConf').value;
    const birthday = document.getElementById('birthday').value;
    const address = document.getElementById('address').value.trim();
    const country = document.getElementById('country').value.trim();
    const description = document.getElementById('description').value.trim();
    const isStore = document.getElementById('isStore').checked;

    // Validaciones
    if (name.length === 0) {
        errorMessages.push('El nombre es obligatorio.');
    }
    if (surname.length === 0) {
        errorMessages.push('El apellido es obligatorio.');
    }
    if (!validateEmail(email)) {
        errorMessages.push('El correo electrónico no es válido.');
    }
    if (password.length < 8) {
        errorMessages.push('La contraseña debe tener al menos 8 caracteres.');
    }
    if (password !== passwordConf) {
        errorMessages.push('Las contraseñas no coinciden.');
    }
    if (new Date(birthday) > new Date()) {
        errorMessages.push('La fecha de nacimiento no puede ser en el futuro.');
    }
    if (address.length === 0) {
        errorMessages.push('La dirección es obligatoria.');
    }
    if (country.length === 0) {
        errorMessages.push('El país es obligatorio.');
    }

    const errorContainer = document.getElementById('errorMessages');
    errorContainer.innerHTML = '';
    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            const errorElement = document.createElement('div');
            errorElement.textContent = message;
            errorContainer.appendChild(errorElement);
        });
    } else {
        const newUserData = { name, surname, birthday, address, country, description, isStore, loginDetails: { email, password } };
        const response = await fetchRegister(newUserData);
        console.log('response:', response);
        console.log('Formulario enviado:', newUserData);
        if (response === 201) {
            window.location.href = '#/login';
            alert("Su usuario a sido creado");
        }
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
