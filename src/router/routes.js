import { renderAboutPage } from "../pages/about.js";
import { renderHomePage, initHomePage } from "../pages/home.js";
import { renderPortfolioPage, initPortfolioPage } from "../pages/portfolio.js";
import { renderNotFoundPage } from "../pages/notFound.js";

export const routes = [
  {
    path: "/",
    title: "정록's Portfolio | 홈",
    render: renderHomePage,
    afterRender: initHomePage,
  },
  {
    path: "/about",
    title: "정록's Portfolio | 소개",
    render: renderAboutPage,
  },
  {
    path: "/portfolio",
    title: "정록's Portfolio | 포트폴리오",
    render: renderPortfolioPage,
    afterRender: initPortfolioPage,
  },
  {
    path: "*",
    title: "정록's Portfolio",
    render: renderNotFoundPage,
  },
];
