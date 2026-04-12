export const HOME_CONTENT = {
  hero: {
    greeting: "안녕하세요,",
    highlight: "프론트엔드 개발자",
    nameSuffix: "오정록입니다.",
    profileAlt: "오정록 프로필 사진",
    profileFallback: "프로필 사진 준비 중",
    meta: [
      { label: "출생", value: "1998.08.17" },
      { label: "학력", value: "연세대학교 행정학과 | 2018-2023 (졸)" },
      {
        label: "기술 스택",
        value:
          "HTML · CSS · JavaScript · React · Next.js · TypeScript · Tailwind CSS",
      },
    ],
    links: [
      {
        key: "github",
        label: "GitHub",
        href: "https://github.com/rockcha/",
        ariaLabel: "GitHub",
      },
      {
        key: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/@codingfrog_kr",
        ariaLabel: "YouTube",
      },
    ],
  },
  intro: {
    title: "간단한 소개",
    ctaLabel: "소개페이지로",
    blocks: [
      {
        title: "다른 사람과 지식을 공유하며 함께 성장하는 것을 좋아합니다.",
        description:
          "약 8년간 다양한 과목의 과외를 진행해왔으며, 최근에는 개발 유튜브 채널을 운영하며 HTML, CSS, JavaScript, React 관련 영상을 약 80여 개 업로드하고 관련 지식들을 공유하고 있습니다.",
      },
      {
        title: "새로운 지식을 배우고 익히는 과정을 즐깁니다.",
        description:
          "이전에는 이해하지 못했거나, 구현하지 못했던 기능을 해결해서 내 것으로 만들었을 때 그 기분은 표현하기 어렵습니다. 저에게 개발 공부는 이러한 경험이 반복되는 과정이었습니다.",
      },
      {
        title: 'AI에 "의존"이 아닌, 효율적으로 "활용"하는 개발자를 지향합니다.',
        description:
          "주니어 단계에서 무분별한 AI 활용은 오히려 성장에 방해가 될 수 있다고 생각합니다. 따라서 기술을 충분히 이해하고 코드를 읽는 역량을 기르는 데 집중하며, 이를 바탕으로 생산성 향상을 위해서만 AI를 활용하고 있습니다.",
      },
    ],
  },
  preview: {
    title: "포트폴리오 미리보기",
    speedLabel: "전환 속도",
    ctaLabel: "포트폴리오 자세히 보기",
    imageAltPrefix: "포트폴리오 미리보기",
    imageFallback: "이미지를 준비 중입니다.",
    images: [
      "/images/thumb/portfolio1.png",
      "/images/thumb/portfolio2.png",
      "/images/thumb/portfolio3.png",
      "/images/thumb/portfolio4.png",
    ],
    speedOptions: [
      { label: "빠르게", value: 2000 },
      { label: "기본", value: 3000 },
      { label: "느리게", value: 5000 },
    ],
    defaultSpeed: 3000,
  },
};
