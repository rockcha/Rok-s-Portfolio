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
    </div>
  `;
};
