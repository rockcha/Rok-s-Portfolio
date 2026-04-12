import { ABOUT_CONTENT } from "../constants/aboutContent.js";

export const renderAboutPage = () => `
  <section class="about-page py-2 py-md-3">
    <div class="about-page-body px-1 px-md-2">
      <h2 class="fw-bold mb-4">${ABOUT_CONTENT.pageTitle}</h2>

      <div class="row g-4">
        <div class="col-12 col-md-4 text-center">
          <div class="about-profile-card p-4">
            <div class="about-profile-image-wrap mb-3">
              <img
                class="about-profile-image"
                src="${ABOUT_CONTENT.hero.profileImage}"
                alt="${ABOUT_CONTENT.hero.profileAlt}"
                loading="lazy"
                onerror="this.style.display='none'; this.parentElement.classList.add('is-empty');"
              />
              <p class="about-profile-fallback mb-0">${ABOUT_CONTENT.hero.profileFallback}</p>
            </div>
            <p class="about-greeting mb-2">${ABOUT_CONTENT.hero.greeting}</p>
            <p class="about-intro mb-3">${ABOUT_CONTENT.hero.intro}</p>
            <a class="btn btn-success btn-sm about-skill-link mb-3" href="#about-skills">
              기술 스택보기
            </a>
            <p class="text-secondary mb-1 small">${ABOUT_CONTENT.hero.role}</p>
            <p class="text-secondary mb-0 small">${ABOUT_CONTENT.hero.education}</p>
          </div>
        </div>

        <div class="col-12 col-md-8">
          <div class="about-story d-grid gap-4">
            ${ABOUT_CONTENT.sections
              .map(
                ({ emoji, heading, paragraphs, links = [] }) => `
              <section class="about-story-section">
                <h5 class="fw-bold mb-2">${emoji} ${heading}</h5>
                ${paragraphs
                  .map(
                    (text) => `
                  <p class="text-secondary mb-2">${text}</p>
                `,
                  )
                  .join("")}
                ${links
                  .map(
                    ({ label, href, displayText }) => `
                  <p class="mb-0">
                    <a
                      class="link-success text-decoration-none"
                      href="${href}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >${label}: ${displayText || href}</a>
                  </p>
                `,
                  )
                  .join("")}
              </section>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>

      <section class="about-skills mt-5" id="about-skills">
        <h2 class="fw-bold mb-4">${ABOUT_CONTENT.skills.heading}</h2>

        <section class="about-skill-group">
          <h6 class="about-skills-subtitle mb-3">💻 프론트엔드</h6>
          <div class="about-skills-list">
          ${ABOUT_CONTENT.skills.frontend
            .map(
              ({ name, description }) => `
            <div class="about-skill-item">
              <p class="about-skill-name mb-1">${name}</p>
              <p class="text-secondary mb-0">${description}</p>
            </div>
          `,
            )
            .join("")}
          </div>
        </section>

        <section class="about-skill-group mt-4">
          <h6 class="about-skills-subtitle mb-3">🗄️ 백엔드</h6>
          <div class="about-skills-list">
          ${ABOUT_CONTENT.skills.backend
            .map(
              ({ name, description }) => `
            <div class="about-skill-item">
              <p class="about-skill-name mb-1">${name}</p>
              <p class="text-secondary mb-0">${description}</p>
            </div>
          `,
            )
            .join("")}
          </div>
        </section>

        <section class="about-skill-group mt-4">
          <h6 class="about-skills-subtitle mb-3">🚀 배포</h6>
          <ul class="about-deploy-list mb-0">
            ${ABOUT_CONTENT.skills.deploy.map((name) => `<li>${name}</li>`).join("")}
          </ul>
        </section>
      </section>
    </div>
  </section>
`;
