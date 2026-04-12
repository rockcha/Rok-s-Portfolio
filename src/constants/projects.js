export const PROJECTS = [
  {
    id: 1,
    title: "1️⃣ 정록's Portfolio - 자기소개 웹페이지",
    logoName: "정록's Portfolio",
    key: "spa",
    summary:
      "지금 보고 계신 웹 페이지로, 간단한 제 소개와 제작한 프로젝트들을 소개하기 위해 바닐라 JS로 SPA 구조를 모방하여 만들었습니다.",
    link: "https://roksportfolio.netlify.app/",
    github: "https://github.com/rockcha/Rok-s-Portfolio",
    detail: {
      role: "프론트엔드 개발 (1인)",
      period: "2026.04 - 진행 중",
      stack: ["Vanilla JavaScript", "Vite", "Bootstrap 5", "CSS3"],
      shortDescription:
        "지금 보고 있는 웹페이지로, 프레임워크 없이 Vanilla JavaScript를 이용해 리액트와 유사한 SPA 라우팅을 직접 구현하기 위한 목적으로 만들었습니다. 부드러운 페이지 전환과 함께 Bootstrap을 이용해 디자인과 반응형을 신경 쓴 자기소개용 웹페이지입니다.",
      mainFeatures: [
        {
          title: "navigate 함수로 SPA 이동 처리",
          description:
            "페이지를 새로고침하지 않고 내부 링크 클릭만으로 Home, About, Portfolio 화면을 전환하도록 구현했습니다. a태그의 기본 동작을 막으면서도, history.pushState()와 replaceState()를 사용해 URL은 바꾸면서도 화면은 직접 render()로 갱신하는 구조입니다.",
          image: "/images/portfolio/spa/feature/1.png",
        },
        {
          title: "프로젝트 데이터 기반 포트폴리오 자동 렌더링",
          description:
            "프로젝트 정보를 PROJECTS 배열로 관리하고, 카드 목록과 상세 섹션을 map()으로 자동 생성하도록 만들었습니다. 프로젝트가 추가될 때 HTML을 매번 복사하지 않고 데이터만 추가하면 화면에 반영되는 구조라 유지보수가 쉽습니다.",
          image: "/images/portfolio/spa/feature/2.png",
        },
      ],
      troubleShooting: [
        {
          title: "1️⃣ 동일 경로 재이동 시 불필요 렌더링",
          problem:
            "data-link가 붙은 내부 링크를 클릭하면 history.pushState() 후 render()가 실행되도록 구현했습니다. 그런데 현재 페이지와 같은 메뉴를 다시 클릭해도 렌더링이 다시 발생해서, 화면이 불필요하게 갱신되고 afterRender() 이벤트 초기화도 반복될 수 있는 문제가 있었습니다.",
          solution:
            "navigate() 함수에서 이동하려는 경로를 normalizePath()로 정리한 뒤, 현재 window.location.pathname과 같으면 바로 return하도록 처리했습니다. 이 조건문 덕분에 같은 경로 클릭 시 pushState()와 render()가 실행되지 않아 중복 렌더링을 막을 수 있었습니다.",
          image: "/images/portfolio/spa/troubleshooting/1.png",
        },
      ],
      review:
        "바닐라 자바스크립트만으로 SPA 구조를 직접 구현하면서 라우팅, 렌더링, 이벤트 초기화 흐름을 전체적으로 이해할 수 있었던 프로젝트입니다. 이 과정에서 리액트가 얼마나 편리한 라이브러리인가에 대해서 피부로 체감하게 되었습니다.",
    },
  },
  {
    id: 2,
    title: "2️⃣ Orbit - 우주탐사 시뮬레이션",
    logoName: "Orbit",
    key: "orbit",
    summary:
      "우주선 상태를 관리하고, 탐험을 하며 탐험일지를 작성하는 우주탐험 시뮬레이션 프로젝트입니다.",
    link: "https://beautiful-frangollo-5fec8a.netlify.app/",
    github: "https://github.com/rockcha/orbit",
    detail: {
      role: "프론트엔드 개발 (1인)",
      period: "2025.03 - 2025.04",
      stack: [
        "React",
        "TanStack Query",
        "Zustand",
        "json-server",
        "Tailwind CSS",
      ],
      shortDescription:
        "json-server에 우주선, 행성, 탐험일지 등의 데이터를 저장하고, React Query와 커스텀 훅들을 이용해서 조회/추가/수정/삭제(CRUD)하는 흐름을 구현했습니다. 실제 우주선 분위기의 UI와 화면 전환 애니메이션 완성도에 집중한 프로젝트입니다.",
      mainFeatures: [
        {
          title: "Zustand 기반 우주선 전역 상태 관리",
          description:
            "spaceship, isLoading, isPending, error를 Zustand 스토어에서 관리하여 UI 컴포넌트는 상태를 구독해서 화면만 책임지도록 분리하고 있습니다. 데이터 조회와 수정 로직을 스토어 액션으로 분리하였으며 Immer를 통한 간결한 불변성 처리를 하고 있습니다. ",
          image: "/images/portfolio/orbit/feature/1.png",
        },
        {
          title: "React Query 기반 서버 상태 관리",
          description:
            "행성 목록, 행성 상세, 탐사 기록 목록처럼 서버에서 가져오는 데이터를 useQuery로 관리했습니다. 각 데이터마다 queryKey를 분리해 캐싱이 가능하도록 구성했고, 탐사 기록 생성은 useMutation으로 처리했으며, 저장 성공 후 invalidateQueries로 탐사 기록 목록을 다시 동기화했습니다. 이를 통해 API 호출, 로딩/에러 처리, 캐시 갱신 흐름을 커스텀 훅으로 분리해 재사용성과 유지보수성을 높였습니다.",
          image: "/images/portfolio/orbit/feature/2.png",
        },
        {
          title: "화면 전환 애니메이션",
          description:
            "행성 선택 후 이동 버튼을 누르면 fuelCost만큼 연료를 차감하고 /travel/:id 페이지로 이동하도록 구현했습니다. 연료 부족, 우주선 손상 여부를 검사해 조건을 만족할 때만 이동이 실행되도록 처리했습니다. 이동 페이지에서는 useParams와 React Query로 행성 데이터를 조회하고, travelTime에 맞춰 progress bar를 애니메이션으로 표시했습니다.",
          image: "/images/portfolio/orbit/feature/3.png",
        },
      ],
      troubleShooting: [
        {
          title: "1️⃣ 연료 차감 전에 페이지 이동이 먼저 실행되는 문제",
          problem:
            "행성 이동 버튼을 누르면 우주선 연료를 차감한 뒤 이동 페이지로 넘어가야 하는데, 연료 차감 API는 비동기 처리이고 페이지 이동은 바로 실행될 수 있었습니다. 이 경우 연료 차감이 실패했는데도 /travel/:id 페이지로 이동하거나, 저장 결과와 화면 상태가 어긋날 가능성이 있었습니다.",
          solution:
            "consumeFuel이 연료 차감 성공 여부를 true/false로 반환하도록 만들고, 이동 버튼에서는 await consumeFuel(...) 결과가 성공일 때만 navigate를 실행하도록 처리했습니다. 또한 isPending 상태를 활용해 요청 중에는 이동 버튼을 비활성화하여 중복 클릭으로 인한 중복 차감도 방지했습니다.",
          image: "/images/portfolio/orbit/troubleshooting/1.png",
        },
      ],
      review:
        "리액트에서 자주 사용되는 라이브러리인 Zustand와 TanStack Query를 연습하기 위해 시작한 프로젝트였습니다. 서버 상태와 클라이언트 상태를 나누어 관리하면서 데이터 흐름을 더 명확하게 설계하는 경험을 할 수 있었습니다. ",
    },
  },
  {
    id: 3,
    title: "3️⃣ DKMV - AI 코딩 평가 VS Code Extension",
    logoName: "DKMV",
    key: "dkmv",
    introductionImage: "/images/portfolio/dkmv/introduction.png",
    summary:
      "VS Code Marketplace에 등록한 AI 코딩 실력 점수화 익스텐션으로 관련 지표들을 다양한 통계로 별도의 웹페이지에서 제공합니다.",
    link: "https://web-dkmv.vercel.app/",
    github: "https://github.com/rockcha/DKMV-Extension",
    detail: {
      role: "익스텐션 및 웹 개발",
      period: "2025.01 - 2025.02",
      stack: ["TypeScript", "VS Code API", "Webview"],
      shortDescription:
        "DKMV는 AI가 생성한 코드의 품질을 점수로 정량화하고, 리뷰와 개선 코드까지 함께 제공하여 사용자가 자신의 AI 코딩 실력을 점검하고 웹 대시보드를 이용하여 지속적으로 성장할 수 있게 돕는 서비스입니다. 현재는 서버가 닫혀서, 정상 작동하지 않을 수 있으나, 녹화된 영상으로 사용법을 확인하실 수 있습니다.",
      mainFeatures: [
        {
          title: "OAuth 기반 로그인 및 사용자 인증",
          description:
            "사용자가 외부 계정으로 로그인하고, 인증된 사용자만 서비스 기능을 사용할 수 있도록 OAuth 인증 흐름을 구성했습니다. 로그인 요청, 콜백 처리, 토큰 저장/검증 흐름을 분리해 인증 로직의 안정성과 확장성을 높였습니다.",
          image: "/images/portfolio/dkmv/feature/1.png",
        },
        {
          title: "VS Code 선택 코드 분석 연동",
          description:
            "VS Code에서 선택한 코드 또는 전체 문서를 Webview로 전달하고, 사용자가 선택한 모델로 분석 요청을 보낼 수 있게 구성했습니다. Extension host와 React Webview가 메시지 기반으로 통신하도록 설계해 VS Code 환경 안에서 자연스럽게 코드 리뷰를 실행할 수 있습니다.",
          image: "/images/portfolio/dkmv/feature/2.png",
        },
        {
          title: "AI 리뷰 결과 시각화 대시보드",
          description:
            "분석 결과를 총점, 카테고리별 점수, 리뷰 요약, 원본 JSON으로 나누어 보여주는 Webview UI를 구현했습니다. 점수 애니메이션과 복사 기능을 분리해 사용성과 유지보수성을 함께 챙겼습니다.",
          image: "/images/portfolio/dkmv/feature/3.png",
        },
      ],
      troubleShooting: [
        {
          title:
            "1️⃣ 선택 영역 적용 시 VS Code 포커스가 웹뷰로 넘어가 선택이 사라지는 문제",
          problem:
            "사용자가 코드를 드래그한 뒤 웹뷰 버튼을 누르면 포커스가 웹뷰로 이동합니다. 이때 activeTextEditor나 현재 selection만 믿으면, 개선 코드를 원래 선택 영역에 적용하지 못하는 문제가 생겼습니다.",
          solution:
            "마지막 선택 영역을 lastSelectionSnapshot으로 저장해 두고, 적용 시점에 현재 selection이 없으면 저장된 스냅샷을 fallback으로 사용했습니다.",
          image: "/images/portfolio/dkmv/troubleshooting/1.png",
        },
      ],
      review:
        "5명의 동료와 함께 협업하며 완성한 결과물로서, 백엔드 및 LLM 파트와의 소통을 통해 서비스의 핵심 가치를 극대화하는 API 구조, 데이터 흐름과 UI를 함께 이해하고 논의하면서 수동적으로 정해진 결과를 구현하는 역할에 머무르지 않고 능동적으로 서비스의 만족도를 올리기 위해 노력했습니다. VS Code 익스텐션 개발은 특히 처음 경험해보는 영역이었고, 웹과는 다른 실행 환경과 제약 조건을 이해하는 과정이 쉽지 않았습니다. 하지만, 최종적으로 한컴 AI 아카데미 2기 최종 프로젝트에서 최우수 팀으로 선정되면서 가장 재미있는 협업 경험이자 프로젝트 경험으로 남게 되었습니다. ",
    },
  },
  {
    id: 4,
    title: "4️⃣ 하루, 담 - 멀티기능 일정 관리 서비스",
    logoName: "하루, 담",
    key: "harudam",
    summary:
      "할 일/일정/메모/음악/일기까지 관리하는 멀티기능 일정 관리 서비스입니다.",
    link: "https://haru-dam.vercel.app/intro",
    github: "https://github.com/rockcha/haru-dam",
    detail: {
      role: "프론트엔드 개발",
      period: "2025.06 - 2025.07",
      stack: ["Supabase", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      shortDescription:
        "하루하루의 내용을 이 웹 페이지에 담아낸다는 의미로 만든 서비스이며, Supabase에 오늘의 할 일, 일정, 나의 음악, 메모, 일기 데이터를 저장하고 조회/추가/수정/삭제(CRUD)할 수 있는 멀티기능 일정 페이지이며, 반응형 레이아웃과 깔끔한 디자인 완성도에 집중한 프로젝트입니다. 지인들의 사용 후기로 지속적인 피드백을 받아 기능의 다양성과 UX를 개선하고 있습니다. ",
      mainFeatures: [
        {
          title: "오늘의 할 일 낙관적 업데이트",
          description:
            "사용자가 할 일을 체크하거나 수정하면 서버 응답을 기다리지 않고 UI를 즉시 갱신하도록 구현했습니다. 이후 비동기 요청 결과에 맞춰 데이터를 동기화하여, 느린 네트워크 환경에서도 빠르고 자연스러운 사용 경험을 제공합니다. 요청 실패 시 원본으로 복구하는 작업까지 안전하게 구현하였습니다.",
          image: "/images/portfolio/harudam/feature/1.png",
        },
        {
          title: "일정 카운트다운 및 월간 캘린더 관리",
          description:
            "사용자가 등록한 일정을 월간 캘린더에서 확인하고, 홈 화면에서는 다가오는 일정만 추려 남은 시간을 실시간으로 보여주는 기능입니다. 일정 유형별 아이콘/색상, 상세 모달, 추가 폼까지 포함되어 있어 단순 목록보다 완성도 있는 일정 관리 경험을 제공합니다.",
          image: "/images/portfolio/harudam/feature/2.png",
        },
        {
          title: "개발자 공지 팝업과 오늘 하루 안 보기",
          description:
            "Supabase에 등록된 개발자 공지를 팝업으로 제공하고, 사용자가 “오늘 하루 안 보기”를 선택하면 해당 날짜를 localStorage에 저장해 같은 날에는 공지가 다시 노출되지 않도록 구현했습니다. 공지 확인 피로도를 줄이면서도 다음 날에는 다시 안내를 받을 수 있도록 사용자 경험을 고려했습니다.",
          image: "/images/portfolio/harudam/feature/3.png",
        },
      ],
      troubleShooting: [
        {
          title: "1️⃣ 접힌 홈 섹션의 데이터 요청 지연 처리",
          problem:
            "홈 대시보드의 여러 섹션이 초기 진입 시 동시에 데이터를 요청하면서, 사용자가 보지 않는 접힌 영역까지 불필요하게 네트워크 요청이 발생하였습니다. 현재는 섹션이 여러 개가 아니지만, 앞으로 섹션이 추가될 때마다, 서버의 데이터가 늘어날 때마다 성능 저하를 피할 수 없다고 판단하였습니다. ",
          solution:
            "TanStack Query의 enabled 옵션을 활용해 섹션이 펼쳐진 경우에만 데이터를 가져오도록 개선했습니다. 이를 통해 접힌 섹션 기준 최대 6개의 초기 요청을 지연시킬 수 있고, 사용자가 실제로 확인하는 영역 중심으로 데이터를 로딩하도록 UX와 성능을 개선했습니다.",
          image: "/images/portfolio/harudam/troubleshooting/1.png",
        },
      ],
      review:
        "개인적인 일정 관리를 위해 처음 시작한 프로젝트였으나, 지인들의 호평으로 인해 점차 기능들을 늘려가고 있는 프로젝트입니다. 지속적인 피드백을 통해 사용자 경험을 극대화시키고 있으며 Supabase 기능을 최대한 활용해 백엔드의 역할과 프론트의 역할을 구분하여 서로의 장점을 살리는 방향으로 설계하는 연습을 하게 되었습니다.",
    },
  },
];
