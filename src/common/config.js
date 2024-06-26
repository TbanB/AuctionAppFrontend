//url para peticiones al backend
const apiUrl = 'http://localhost:8080/AuctionAppBackend';

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

// Guardar el userRole en localStorage
function saveUserRole(role) {
    localStorage.setItem('userRole', role);
}

// Eliminar el userRole de localStorage
function removeUserRole() {
    localStorage.removeItem('userRole');
}

// Recuperar el token de localStorage
function getUserRole() {
    return localStorage.getItem('userRole');
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

export { apiUrl, saveUserId, getUserId, saveUserRole, removeUserRole, getUserRole, removeUserId, saveToken, getToken, removeToken };
