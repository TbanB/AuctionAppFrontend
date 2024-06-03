import { home } from "./components/home/home.js";
import { login } from "./components/login/login.js";
import { register } from "./components/register/register.js";
import { profile } from "./components/profile/profile.js";
import { categories } from "./components/categories/categories.js";
import { users } from "./components/users/users.js";
import { activeAuctions } from "./components/activeAuctions/activeAuctions.js";

const routes = {
  "/": home,
  "/login": login,
  "/register": register,
  "/profile": profile,
  "/categories": categories,
  "/users": users,
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
  const [pathWithoutQuery, queryString] = path.split('?');

  for (const route in routes) {
    const regex = new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`);
    if (regex.test(pathWithoutQuery)) {
      return () => {
        const paramNames = (route.match(/:\w+/g) || []).map((param) =>
          param.slice(1)
        );
        const paramValues = (pathWithoutQuery.match(regex) || []).slice(1);
        const params = Object.fromEntries(
          paramNames.map((_, i) => [paramNames[i], paramValues[i]])
        );

        if (queryString) {
          const queryParams = new URLSearchParams(queryString);
          queryParams.forEach((value, key) => {
            params[key] = value;
          });
        }

        routes[route](params);
      };
    }
  }
  return () => console.error(`Route not found: ${path}`);
}