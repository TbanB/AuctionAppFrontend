//url para peticiones al backend
const apiUrl = 'http://localhost:8080';

// Guardar el userId en localStorage
function saveUserId(userId) {
    localStorage.setItem('userId', userId);
}

// Eliminar el userId de localStorage
function removeUserId() {
    localStorage.removeItem('userId');
}

// Recuperar el token de localStorage
function getUserId() {
    return localStorage.getItem('userId');
}

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

export { apiUrl, saveUserId, getUserId, removeUserId, saveToken, getToken, removeToken };
