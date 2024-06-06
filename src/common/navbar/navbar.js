import { getUserRole } from '../../common/config.js';

export function navbar() {
    const token = localStorage.getItem('token');
    const profileLink = token ? '#/profile' : '#/login';
    const isAdmin = getUserRole() === 'Admin';

    document.body.insertAdjacentHTML(
      "afterbegin",
      `
              <header>
                  <nav class="navbar">
                      <div class="navbar-logo">
                          <a href="#/">
                              Sell
                              <span class="material-symbols-outlined">
                              shopping_cart_checkout
                              </span>
                              It!
                          </a>
                      </div>
                      <ul class="navbar-links">
                          <li><a href="#/activeAuctions">Subastas activas</a></li>
                          <li><a href="#/categories">Categorías</a></li>
                          <li><a href="#/users" class="${token ? '' : 'disabled-link'}">Usuarios</a></li>
                      </ul>
                      <div class="navbar-logo">
                          <a href="${profileLink}">
                              <span class="material-symbols-outlined ${isAdmin ? 'admin-btn': ''}">
                                  ${isAdmin ? 'shield_person' : 'person'}
                              </span>
                          </a>
                      </div>
                  </nav>
              </header>
          `
    );

    if (!token) {
        const usersLink = document.querySelector('.navbar-links .disabled-link');
        usersLink.setAttribute('disabled', 'true');
    }
}
