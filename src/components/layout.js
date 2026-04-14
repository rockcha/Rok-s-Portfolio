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

const getTodayName = () =>
  ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"][
    new Date().getDay()
  ];

const renderSiteNotice = () => `
  <aside class="site-notice" data-site-notice aria-label="방문 안내">
    <p class="site-notice-eyebrow mb-2">NOTICE</p>
    <p class="site-notice-title mb-2">안녕하세요!! 환영합니다!! ✨</p>
 
    <p class="site-notice-text mb-0">
      Vanilla JavaScript와 Bootstrap을 기반으로 깔끔하고 담백한 디자인을 구현하여, 관심을 가져주신 모든 분들께 직관적이고 편안한 사용자 경험을 제공하고자 했습니다.
      <br/> 이곳에 머무는 동안에는 작은 버그 하나라도 발생하지 않기를 바라며, 행복한  <strong>${getTodayName()}</strong>이 되었으면 좋겠습니다!
    </p>
    <div class="site-notice-actions">
      <label class="site-notice-check">
        <input type="checkbox" data-site-notice-hide-today />
        <span>오늘 하루 안보기</span>
      </label>
      <button type="button" class="btn btn-success btn-sm" data-site-notice-close>
        응원하면서 닫기
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
