//url para peticiones al backend
const apiUrl = 'http://localhost:8080';

// Guardar el token en localStorage
function saveToken(token) {
    localStorage.setItem('token', token);
}

// Recuperar el token de localStorage
function getToken() {
    return localStorage.getItem('token');
}

// Eliminar el token de localStorage
function removeToken() {
    localStorage.removeItem('token');
}

export { apiUrl, saveToken, getToken, removeToken };
