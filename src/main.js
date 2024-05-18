import { initRouter } from './router.js';
import { navbar } from './common/navbar/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    navbar();
    initRouter();
});
