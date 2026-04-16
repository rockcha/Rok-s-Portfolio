import { DAY_NAMES, SITE_NOTICE_CONTENT } from "../constants/noticeContent.js";

const SITE_NOTICE_HIDE_KEY = "siteNoticeHiddenDate";
const SITE_NOTICE_DISMISSED_EVENT = "site-notice-dismiss";
let siteNoticeDismissedForSession = false;

const getTodayKey = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
};

const getTodayName = () => DAY_NAMES[new Date().getDay()];

const renderSiteNotice = () => `
  <aside class="site-notice" data-site-notice aria-label="${SITE_NOTICE_CONTENT.ariaLabel}">
    <p class="site-notice-eyebrow mb-2">${SITE_NOTICE_CONTENT.eyebrow}</p>
    <p class="site-notice-title mb-2">${SITE_NOTICE_CONTENT.title}</p>
 
    <p class="site-notice-text mb-0">
      ${SITE_NOTICE_CONTENT.description}
      <br/> ${SITE_NOTICE_CONTENT.wishPrefix} <strong>${getTodayName()}</strong>${SITE_NOTICE_CONTENT.wishSuffix}
    </p>
    <div class="site-notice-actions">
      <label class="site-notice-check">
        <input type="checkbox" data-site-notice-hide-today />
        <span>${SITE_NOTICE_CONTENT.hideTodayLabel}</span>
      </label>
      <button type="button" class="btn btn-success btn-sm" data-site-notice-close>
        ${SITE_NOTICE_CONTENT.closeLabel}
      </button>
    </div>
  </aside>
`;

export const initAppLayout = () => {
  const notice = document.querySelector("[data-site-notice]");

  if (!(notice instanceof HTMLElement)) {
    return;
  }

  const todayKey = getTodayKey();
  const hiddenDate = window.localStorage.getItem(SITE_NOTICE_HIDE_KEY);
  const shouldHide = siteNoticeDismissedForSession || hiddenDate === todayKey;

  notice.classList.toggle("is-visible", !shouldHide);

  const closeNotice = () => {
    siteNoticeDismissedForSession = true;
    notice.classList.remove("is-visible");
    notice.dispatchEvent(new CustomEvent(SITE_NOTICE_DISMISSED_EVENT));
  };

  notice
    .querySelector("[data-site-notice-close]")
    ?.addEventListener("click", closeNotice);

  const hideTodayInput = notice.querySelector("[data-site-notice-hide-today]");

  if (hideTodayInput instanceof HTMLInputElement) {
    hideTodayInput.addEventListener("change", () => {
      if (!hideTodayInput.checked) {
        return;
      }

      window.localStorage.setItem(SITE_NOTICE_HIDE_KEY, todayKey);
      closeNotice();
    });
  }
};

export const renderAppLayout = ({ path, content }) => {
  const isActive = (routePath) =>
    path === routePath ? "nav-link active fw-semibold" : "nav-link";

  return `
    <div class="app-shell">
      <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div class="container">
          <a class="navbar-brand fw-bold text-success brand-link" href="/" data-link>
            <span class="brand-emoji" aria-hidden="true">🧑‍💻</span>
            <span class="brand-label">정록's Portfolio</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main-nav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="${isActive("/")}" href="/" data-link>홈</a></li>
              <li class="nav-item"><a class="${isActive("/about")}" href="/about" data-link>소개</a></li>
              <li class="nav-item"><a class="${isActive("/portfolio")}" href="/portfolio" data-link>포트폴리오</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main class="container py-4 py-md-5">
        ${content}
      </main>
      ${renderSiteNotice()}
    </div>
  `;
};
