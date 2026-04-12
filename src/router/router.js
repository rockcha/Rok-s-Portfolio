import { mount } from "../lib/dom.js";

const normalizePath = (path) => {
  if (!path || path === "") {
    return "/";
  }

  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
};

export const createRouter = ({ root, routes, renderLayout }) => {
  const routeTable = new Map(routes.map((route) => [route.path, route]));

  const render = () => {
    const path = normalizePath(window.location.pathname);
    const currentRoute = routeTable.get(path) || routeTable.get("*");

    if (!currentRoute) {
      return;
    }

    const content = currentRoute.render();
    mount(root, renderLayout({ path, content }));
    document.title = currentRoute.title || "정록's Portfolio";

    if (typeof currentRoute.afterRender === "function") {
      currentRoute.afterRender();
    }
  };

  const onClick = (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest("a[data-link]");
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    const url = new URL(link.href);
    if (url.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();
    navigate(url.pathname);
  };

  const navigate = (to, replace = false) => {
    const targetPath = normalizePath(to);

    if (targetPath === window.location.pathname) {
      return;
    }

    if (replace) {
      window.history.replaceState({}, "", targetPath);
    } else {
      window.history.pushState({}, "", targetPath);
    }

    render();
  };

  const start = () => {
    document.addEventListener("click", onClick);
    window.addEventListener("popstate", render);

    const initialPath = normalizePath(window.location.pathname);
    if (!routeTable.has(initialPath)) {
      navigate("/", true);
      return;
    }

    render();
  };

  return {
    start,
    navigate,
  };
};
