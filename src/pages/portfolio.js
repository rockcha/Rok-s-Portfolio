import { PROJECTS } from "../constants/projects.js";

const deployIcon = `
  <svg class="project-link-icon project-link-icon--line" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3.5c2.4 1.5 4 4.1 4 7 0 1.9-.7 3.7-1.8 5.1l.8 3.4-3-1.7-3 1.7.8-3.4C8.7 14.2 8 12.4 8 10.5c0-2.9 1.6-5.5 4-7Z" />
    <path d="M12 3.5v13.8" />
    <path d="M9.2 15.7 6.4 18.5" />
    <path d="M14.8 15.7l2.8 2.8" />
    <circle cx="12" cy="9" r="1.7" />
  </svg>
`;

const githubIcon = `
  <svg class="project-link-icon project-link-icon--fill" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-4.6 0-1 .4-1.9 1.1-2.6-.1-.3-.5-1.3.1-2.6 0 0 .9-.3 2.8 1.1a9.7 9.7 0 0 1 5.1 0c1.9-1.4 2.8-1.1 2.8-1.1.6 1.3.2 2.3.1 2.6.7.7 1.1 1.6 1.1 2.6 0 3.6-2.4 4.4-4.6 4.6.4.3.7.9.7 1.8v2.5c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" />
  </svg>
`;

const renderSideNav = () => `
  <nav class="pf-sidenav" id="pf-sidenav" aria-label="프로젝트 네비게이션">
    <ul class="pf-sidenav-list">
      <li class="pf-sidenav-item">
        <button
          class="pf-sidenav-dot"
          data-nav-to="portfolio-top"
          title="모아보기"
          aria-label="모아보기로 이동"
        ><span class="pf-sidenav-num">0</span></button>
        <span class="pf-sidenav-line"></span>
      </li>
      ${PROJECTS.map(
        ({ id, title }, i) => `
        <li class="pf-sidenav-item">
          <button
            class="pf-sidenav-dot"
            data-nav-to="project-${id}"
            title="${title}"
            aria-label="${title}로 이동"
          ><span class="pf-sidenav-num">${id}</span></button>
          ${i < PROJECTS.length - 1 ? '<span class="pf-sidenav-line"></span>' : ""}
        </li>
      `,
      ).join("")}
    </ul>
  </nav>
`;

const renderProjectInfoContent = ({ link, github, detail }) => `
  <ul class="list-unstyled small text-secondary mb-0">
    <li class="mb-2"><span class="fw-medium text-dark">역할</span><br>${detail.role}</li>
    <li class="mb-2"><span class="fw-medium text-dark">기간</span><br>${detail.period}</li>
    <li class="mb-2">
      <span class="fw-medium text-dark">기술 스택</span><br>
      ${detail.stack.join(" · ")}
    </li>
  </ul>
  <div class="project-link-list mt-3">
    <a href="${link}" class="project-link-item" target="_blank" rel="noopener noreferrer">
      <span class="project-link-label">
        ${deployIcon}
        배포 사이트
      </span>
      <span class="project-link-url">${link}</span>
    </a>
    <a href="${github}" class="project-link-item" target="_blank" rel="noopener noreferrer">
      <span class="project-link-label">
        ${githubIcon}
        깃허브
      </span>
      <span class="project-link-url">${github}</span>
    </a>
  </div>
`;

const renderFixedProjectInfo = () => `
  <aside class="pf-project-info-panel" id="pf-project-info-panel" aria-label="현재 프로젝트 정보">
    ${PROJECTS.map(
      (project) => `
      <div class="pf-project-info-card" data-project-info="${project.id}">
        <div class="detail-info-heading">
          <h6 class="detail-block-title mb-0">ℹ️ 프로젝트 정보</h6>
        </div>
        <p class="pf-project-info-title mb-3">${project.logoName}</p>
        ${renderProjectInfoContent(project)}
      </div>
    `,
    ).join("")}
  </aside>
`;

const getCardThumbPath = (id) => `/images/thumb/portfolio${id}.png`;

const renderCard = ({ id, logoName, summary, title }) => `
  <div class="col-12 col-sm-6 col-lg-3">
    <div class="card h-100 border-0 shadow-sm">
      <div class="portfolio-card-thumb-wrap">
        <img
          src="${getCardThumbPath(id)}"
          alt="${title} 미리보기"
          class="portfolio-card-thumb"
          loading="lazy"
          onerror="this.closest('.portfolio-card-thumb-wrap')?.classList.add('is-empty');"
        />
        <p class="portfolio-card-thumb-fallback mb-0">이미지를 준비 중입니다.</p>
      </div>
      <div class="card-body d-flex flex-column p-4">
        <h5 class="fw-bold mb-2">${logoName}</h5>
        <p class="text-secondary small mb-3">${summary}</p>
        <button
          class="btn btn-outline-success btn-sm mt-auto"
          data-scroll-to="project-${id}"
        >자세히 보기</button>
      </div>
    </div>
  </div>
`;

const getLegacyImagePath = (path) => {
  if (!path || !path.includes("/feature/")) {
    return path;
  }

  return path.replace("/feature/", "/");
};

const renderOptionalImage = (image, title) => {
  if (!image) {
    return "";
  }

  const fallbackImage = getLegacyImagePath(image);

  return `
    <button
      type="button"
      class="portfolio-image-trigger"
      data-preview-src="${image}"
      data-preview-fallback-src="${fallbackImage}"
      data-preview-alt="${title}"
      aria-label="이미지 크게 보기"
    >
      <img
        src="${image}"
        alt="${title}"
        class="portfolio-evidence-img"
        loading="lazy"
        onerror="if (!this.dataset.fallbackApplied) { this.dataset.fallbackApplied = '1'; this.src = '${fallbackImage}'; }"
      />
    </button>
  `;
};

const renderImageDialog = () => `
  <dialog id="portfolio-image-dialog" class="portfolio-image-dialog">
    <button type="button" class="portfolio-dialog-close" data-dialog-close aria-label="닫기">×</button>
    <img id="portfolio-image-dialog-img" class="portfolio-dialog-img" alt="" />
    <p id="portfolio-image-dialog-caption" class="portfolio-dialog-caption mb-0"></p>
  </dialog>
`;

const renderMainFeatures = (items) =>
  `<div class="main-feature-grid">
    ${items
      .map(
        ({ title, description, image }, i) => `
      <div class="ts-item main-feature-item">
        <div class="ts-content ${image ? "has-image" : ""}">
          <div class="ts-text">
            <p class="ts-title fw-semibold mb-1">${["1️⃣", "2️⃣", "3️⃣"][i] ?? `${i + 1}.`} ${title}</p>
            <p class="ts-label text-secondary small mb-0">${description}</p>
          </div>
          ${image ? `<div class="ts-media">${renderOptionalImage(image, `${title} 스크린샷`)}</div>` : ""}
        </div>
      </div>
    `,
      )
      .join("")}
  </div>`;

const renderTroubleShooting = (items) =>
  items
    .map(
      ({ title, problem, solution, image }) => `
    <div class="ts-item mb-3">
      <div class="ts-content ${image ? "has-image" : ""}">
        <div class="ts-text ts-text--troubleshooting">
          <p class="ts-title fw-semibold mb-1">${title}</p>
          <div class="ts-note ts-note--problem">
            <p class="ts-note-title mb-1">⚠️ 문제</p>
            <p class="ts-label text-secondary small mb-0">${problem}</p>
          </div>
          <div class="ts-note ts-note--solution">
            <p class="ts-note-title mb-1">✅ 해결</p>
            <p class="ts-label text-secondary small mb-0">${solution}</p>
          </div>
        </div>
        ${image ? `<div class="ts-media">${renderOptionalImage(image, `${title} 트러블슈팅 이미지`)}</div>` : ""}
      </div>
    </div>
  `,
    )
    .join("");

const renderIntroductionImage = (image, title) => {
  if (!image) {
    return "";
  }

  return `
    <div class="detail-section detail-section--separated">
      <div class="detail-introduction-image-wrap">
        <img
          src="${image}"
          alt="${title} 소개 이미지"
          class="detail-introduction-image"
          loading="lazy"
        />
      </div>
    </div>
  `;
};

const renderReview = (review) => {
  if (!review) {
    return "";
  }

  return `
    <div class="detail-section">
      <h6 class="detail-block-title">💬 프로젝트 후기</h6>
      <p class="text-secondary small mb-0">${review}</p>
    </div>
  `;
};

const renderDetail = ({
  id,
  title,
  key,
  introductionImage,
  link,
  github,
  detail,
}) => `
  <section id="project-${id}" class="portfolio-detail mt-5 pt-4 border-top">
    <div class="mb-4">
      <h3 class="fw-bold mb-0">${title}</h3>
    </div>

    <div class="row g-4">
      <div class="col-12 col-md-8">
        <div class="detail-section detail-section--separated">
          <h6 class="detail-block-title">🎬 소개 영상</h6>
          <div class="detail-video-wrap">
            <video
              class="detail-video"
              controls
              preload="metadata"
              playsinline
              aria-label="${title} 소개 영상"
            >
              <source src="/videos/${key}.mp4" type="video/mp4" />
              이 브라우저는 video 태그를 지원하지 않습니다.
            </video>
          </div>
        </div>

        <div class="detail-section detail-section--separated">
          <h6 class="detail-block-title">📌 프로젝트 소개</h6>
          <p class="portfolio-detail-body portfolio-detail-summary text-secondary small mb-0">${detail.shortDescription}</p>
        </div>

        ${renderIntroductionImage(introductionImage || detail.introductionImage, title)}

        <div class="detail-section detail-section--separated">
          <h6 class="detail-block-title">✅ 주요 기능</h6>
          ${renderMainFeatures(detail.mainFeatures)}
        </div>

        <div class="detail-section${detail.review ? " detail-section--separated" : ""}">
          <h6 class="detail-block-title">🔥 트러블슈팅</h6>
          ${renderTroubleShooting(detail.troubleShooting)}
        </div>

        ${renderReview(detail.review)}
      </div>

      <div class="col-12 col-md-4 detail-info-col">
        <div class="detail-block detail-info-card">
          <div class="detail-info-heading">
            <h6 class="detail-block-title mb-0">ℹ️ 프로젝트 정보</h6>
          </div>
          ${renderProjectInfoContent({ link, github, detail })}
        </div>
      </div>
    </div>
  </section>
`;

export const renderPortfolioPage = () => `
  ${renderSideNav()}
  ${renderFixedProjectInfo()}
  <section id="portfolio-top">
    <div class="mb-4 pb-2 border-bottom">
      <h2 class="fw-bold mb-1">포트폴리오</h2>
      <p class="text-secondary mb-0">핵심 프로젝트만 간단히 모아봤습니다.</p>
    </div>
   
    <div class="row g-4">
      ${PROJECTS.map(renderCard).join("")}
    </div>
  </section>
  ${PROJECTS.map(renderDetail).join("")}
  ${renderImageDialog()}
`;

export const initPortfolioPage = () => {
  const dots = document.querySelectorAll(".pf-sidenav-dot");
  const projectInfoPanel = document.getElementById("pf-project-info-panel");
  const projectInfoCards = document.querySelectorAll("[data-project-info]");

  const setActive = (activeId) => {
    dots.forEach((dot) => {
      const isActive = dot.dataset.navTo === activeId;
      dot.classList.toggle("is-active", isActive);
    });

    const projectId = activeId.startsWith("project-")
      ? activeId.replace("project-", "")
      : "";

    if (projectInfoPanel) {
      projectInfoPanel.classList.toggle("is-visible", Boolean(projectId));
    }

    projectInfoCards.forEach((card) => {
      card.classList.toggle("is-active", card.dataset.projectInfo === projectId);
    });
  };

  // 자세히 보기 버튼 스크롤
  document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setActive(btn.dataset.scrollTo);
      const target = document.getElementById(btn.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // 사이드 네비 클릭 스크롤
  document.querySelectorAll("[data-nav-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setActive(btn.dataset.navTo);
      const target = document.getElementById(btn.dataset.navTo);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // 스크롤 위치에 따라 활성 dot 표시
  const sections = [
    document.getElementById("portfolio-top"),
    ...PROJECTS.map(({ id }) => document.getElementById(`project-${id}`)),
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
  );

  sections.forEach((el) => {
    if (el) observer.observe(el);
  });

  setActive("portfolio-top");

  // 이미지 클릭 시 다이얼로그 미리보기
  const dialog = document.getElementById("portfolio-image-dialog");
  const dialogImg = document.getElementById("portfolio-image-dialog-img");
  const dialogCaption = document.getElementById(
    "portfolio-image-dialog-caption",
  );
  const closeBtn = document.querySelector("[data-dialog-close]");

  if (
    dialog instanceof HTMLDialogElement &&
    dialogImg instanceof HTMLImageElement &&
    dialogCaption instanceof HTMLElement
  ) {
    document.querySelectorAll(".portfolio-image-trigger").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!(btn instanceof HTMLButtonElement)) {
          return;
        }

        const src = btn.dataset.previewSrc;
        const fallbackSrc = btn.dataset.previewFallbackSrc;
        const alt = btn.dataset.previewAlt || "포트폴리오 이미지";

        if (!src) {
          return;
        }

        dialogImg.dataset.fallbackSrc = fallbackSrc || "";
        dialogImg.dataset.fallbackApplied = "";
        dialogImg.src = src;
        dialogImg.alt = alt;
        dialogCaption.textContent = alt;
        dialog.showModal();
      });
    });

    dialogImg.addEventListener("error", () => {
      const fallbackSrc = dialogImg.dataset.fallbackSrc;
      const fallbackApplied = dialogImg.dataset.fallbackApplied === "1";

      if (!fallbackSrc || fallbackApplied) {
        return;
      }

      dialogImg.dataset.fallbackApplied = "1";
      dialogImg.src = fallbackSrc;
    });

    const closeDialog = () => {
      if (dialog.open) {
        dialog.close();
      }
    };

    if (closeBtn instanceof HTMLButtonElement) {
      closeBtn.addEventListener("click", closeDialog);
    }

    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const isBackdropClick =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (isBackdropClick) {
        closeDialog();
      }
    });
  }
};
