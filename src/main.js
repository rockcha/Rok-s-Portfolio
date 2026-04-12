import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/main.css";
import { createRouter } from "./router/router.js";
import { renderAppLayout } from "./components/layout.js";
import { routes } from "./router/routes.js";

const root = document.getElementById("app");

if (!root) {
  throw new Error("App root element not found");
}

const router = createRouter({
  root,
  routes,
  renderLayout: renderAppLayout,
});

router.start();
