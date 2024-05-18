import { home } from "./components/home.js";
import { login } from "./components/login/login.js";
import { register } from "./components/register/register.js";
import { productDetail } from "./components/productDetail.js";
import { profile } from "./components/profile/profile.js";
import { categories } from "./components/categories/categories.js";
import { activeAuctions } from "./components/activeAuctions/activeAuctions.js";

const routes = {
  "/": home,
  "/login": login,
  "/register": register,
  "/profile": profile,
  "/product/:id": productDetail,
  "/categories": categories,
  "/activeAuctions": activeAuctions
};

export function initRouter() {
  window.addEventListener("hashchange", () => {
    loadRoute();
  });
  loadRoute();
}

function loadRoute() {
  const path = window.location.hash.slice(1) || "/";
  const route = matchRoute(path);
  route();
}

function matchRoute(path) {
  for (const route in routes) {
    const regex = new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`);
    if (regex.test(path)) {
      return () => {
        const paramNames = (route.match(/:\w+/g) || []).map((param) =>
          param.slice(1)
        );
        const paramValues = (path.match(regex) || []).slice(1);
        const params = Object.fromEntries(
          paramNames.map((_, i) => [paramNames[i], paramValues[i]])
        );
        routes[route](params);
      };
    }
  }
  return () => console.error(`Route not found: ${path}`);
}
