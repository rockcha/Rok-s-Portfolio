import { HOME_CONTENT } from "../constants/siteContent.js";

const HOME_CAROUSEL_SPEED_KEY = "homeCarouselSpeed";
const { hero, intro, preview } = HOME_CONTENT;
const DEFAULT_HOME_CAROUSEL_SPEED = preview.defaultSpeed;
const HOME_CAROUSEL_IMAGES = preview.images;
const HOME_CAROUSEL_SPEEDS = preview.speedOptions;

let homeCarouselTimer = null;

const renderAnimatedChars = (text, className = "") =>
  Array.from(text)
    .map(
      (char, index) =>
        `<span class="landing-title-char ${className}" style="--char-index: ${index}">${char === " " ? "&nbsp;" : char}</span>`,
    )
    .join("");

const getSavedHomeCarouselSpeed = () => {
  const savedSpeed = Number(
    window.localStorage.getItem(HOME_CAROUSEL_SPEED_KEY),
  );

  return HOME_CAROUSEL_SPEEDS.some(({ value }) => value === savedSpeed)
    ? savedSpeed
    : DEFAULT_HOME_CAROUSEL_SPEED;
};

const stopHomeCarousel = () => {
  if (homeCarouselTimer !== null) {
    window.clearInterval(homeCarouselTimer);
    homeCarouselTimer = null;
  }
};

const formatSpeedHint = (speed) => `${speed / 1000}초마다 전환`;

export const renderHomePage = () => `
  <section class="landing-hero">
    <div class="landing-grid">
      <div class="profile-photo-wrap" aria-label="프로필 사진 영역">
        <img
          class="profile-photo"
          src="/images/profile.jpg"
          alt="오정록 프로필 사진"
          onerror="this.style.display='none'; this.parentElement.classList.add('is-empty');"
        />
        <div class="profile-photo-fallback" aria-hidden="true">
          <span>프로필 사진 준비 중</span>
        </div>
      </div>

      <div class="landing-main">
     
        <h1 class="landing-title" aria-label="${hero.greeting} ${hero.highlight} ${hero.nameSuffix}">
          ${renderAnimatedChars(`${hero.greeting} `)}
          ${renderAnimatedChars(hero.highlight, "landing-highlight")}
          ${renderAnimatedChars(` ${hero.nameSuffix}`)}
        </h1>

        <dl class="landing-meta">
          ${hero.meta
            .map(
              ({ label, value }) => `
            <div>
              <dt>${label}</dt>
              <dd>${value}</dd>
            </div>
          `,
            )
            .join("")}
        </dl>

        <div class="landing-links">
          ${hero.links
            .map(({ key, href, ariaLabel, label }) =>
              key === "github"
                ? `
          <a
            class="social-link"
            href="${href}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${ariaLabel}"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.41 2.86 8.16 6.83 9.49.5.09.69-.22.69-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.03 1.54 1.03.9 1.53 2.35 1.09 2.92.84.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.85c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.41.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.91.68 1.83 0 1.32-.01 2.39-.01 2.72 0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
            </svg>
            ${label}
          </a>
        `
                : `
          <a
            class="social-link"
            href="${href}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${ariaLabel}"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1c-1.86-.5-9.4-.5-9.4-.5s-7.54 0-9.4.5A3 3 0 0 0 .5 7.2C0 9.06 0 12 0 12s0 2.94.5 4.8a3 3 0 0 0 2.1 2.1c1.86.5 9.4.5 9.4.5s7.54 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.86.5-4.8.5-4.8s0-2.94-.5-4.8ZM9.6 15.3V8.7l5.8 3.3-5.8 3.3Z" />
            </svg>
            ${label}
          </a>
        `,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="home-sub-section intro-section">
    <h2>${intro.title}</h2>
    <div class="intro-copy">
      ${intro.blocks
        .map(
          ({ title, description }) => `
        <div>
          <p class="intro-copy-title">${title}</p>
          <p>${description}</p>
        </div>
      `,
        )
        .join("")}
    </div>
    <a href="/about" data-link class="btn btn-success">${intro.ctaLabel}</a>
  </section>

  <section class="home-sub-section preview-section">
    <h2>${preview.title}</h2>
    <div class="home-carousel-toolbar">
      <label for="home-carousel-speed">${preview.speedLabel}</label>
      <select id="home-carousel-speed" class="home-carousel-speed" data-home-carousel-speed>
        ${HOME_CAROUSEL_SPEEDS.map(
          ({ label, value }) => `
          <option value="${value}">${label}</option>
        `,
        ).join("")}
      </select>
      <span class="home-carousel-speed-hint" data-home-carousel-speed-hint>
        ${formatSpeedHint(DEFAULT_HOME_CAROUSEL_SPEED)}
      </span>
    </div>
    <div class="home-carousel" aria-label="포트폴리오 미리보기 캐러셀">
      <div class="home-carousel-track" data-home-carousel-track>
        ${HOME_CAROUSEL_IMAGES.map(
          (src, index) => `
          <div class="home-carousel-slide" aria-hidden="${index === 0 ? "false" : "true"}">
            <img
              src="${src}"
              alt="${preview.imageAltPrefix} ${index + 1}"
              loading="lazy"
              onerror="this.closest('.home-carousel-slide')?.classList.add('is-empty');"
            />
            <p class="home-carousel-fallback">${preview.imageFallback}</p>
          </div>
        `,
        ).join("")}
      </div>
    </div>
    <a href="/portfolio" data-link class="btn btn-success">${preview.ctaLabel}</a>
  </section>
`;

export const initHomePage = () => {
  stopHomeCarousel();

  const track = document.querySelector("[data-home-carousel-track]");
  if (!(track instanceof HTMLElement)) {
    return;
  }

  const slides = Array.from(track.querySelectorAll(".home-carousel-slide"));
  if (slides.length < 2) {
    return;
  }

  let currentIndex = 0;
  let currentSpeed = getSavedHomeCarouselSpeed();
  const speedSelect = document.querySelector("[data-home-carousel-speed]");
  const speedHint = document.querySelector("[data-home-carousel-speed-hint]");

  const updateSpeedHint = () => {
    if (speedHint instanceof HTMLElement) {
      speedHint.textContent = formatSpeedHint(currentSpeed);
    }
  };

  if (speedSelect instanceof HTMLSelectElement) {
    speedSelect.value = String(currentSpeed);
  }

  updateSpeedHint();

  const showSlide = (index) => {
    const safeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${safeIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      slide.setAttribute(
        "aria-hidden",
        slideIndex === safeIndex ? "false" : "true",
      );
    });

    currentIndex = safeIndex;
  };

  showSlide(0);

  const startCarousel = () => {
    stopHomeCarousel();
    homeCarouselTimer = window.setInterval(() => {
      showSlide(currentIndex + 1);
    }, currentSpeed);
  };

  if (speedSelect instanceof HTMLSelectElement) {
    speedSelect.addEventListener("change", () => {
      currentSpeed = Number(speedSelect.value) || DEFAULT_HOME_CAROUSEL_SPEED;
      window.localStorage.setItem(
        HOME_CAROUSEL_SPEED_KEY,
        String(currentSpeed),
      );
      updateSpeedHint();
      startCarousel();
    });
  }

  startCarousel();
};
