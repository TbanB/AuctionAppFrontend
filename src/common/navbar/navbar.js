export function navbar() {
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
                        <li><a href="#/categories">Categorias</a></li>
                    </ul>
                    <div class="navbar-logo">
                        <a href="#/login">
                            <span class="material-symbols-outlined">
                                person
                            </span>
                        </a>
                    </div>
                </nav>
            </header>
        `
  );
}
