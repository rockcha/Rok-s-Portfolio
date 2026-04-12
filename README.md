# 정록's Portfolio

Vanilla JavaScript와 Vite를 기반으로 만든 자기소개 및 포트폴리오 웹사이트입니다. 프레임워크 없이 SPA와 유사한 라우팅 흐름을 직접 구현하고, 프로젝트 소개와 자기소개 콘텐츠를 데이터 중심 구조로 관리하도록 구성했습니다.

## 소개

이 프로젝트는 다음 목적을 중심으로 제작되었습니다.

- 자기소개와 기술 스택, 프로젝트 경험을 한 곳에서 정리
- Vanilla JavaScript 기반의 라우팅 및 렌더링 구조 실습
- 프로젝트 데이터 상수 분리를 통한 유지보수성 개선
- 반응형 UI와 간단한 인터랙션을 포함한 포트폴리오 페이지 구현

## 기술 스택

- Vanilla JavaScript
- Vite
- Bootstrap 5
- CSS3

## 주요 기능

- Home / About / Portfolio 페이지 라우팅
- History API 기반 SPA 스타일 네비게이션
- 데이터 상수 기반 자기소개, 기술 스택, 프로젝트 렌더링
- 포트폴리오 카드 및 프로젝트 상세 섹션
- 프로젝트 소개 이미지 / 기능 이미지 / 트러블슈팅 이미지 표시
- 홈 화면 포트폴리오 미리보기 캐러셀
- 모바일 네비게이션 토글

## 프로젝트 구조

```text
src/
  components/
  constants/
  pages/
  router/
  styles/
public/
  images/
  videos/
```

## 시작 방법

```bash
npm install
npm run dev
```

기본 개발 서버는 Vite로 실행되며, 브라우저에서 로컬 주소로 확인할 수 있습니다.

## 빌드

```bash
npm run build
npm run preview
```

## 메모

- 포트폴리오 상세 영상은 `public/videos/*.mp4` 경로를 사용합니다.
- 프로젝트 데이터는 `src/constants/projects.js`에서 관리합니다.
- 홈/소개 페이지 문구 데이터는 `src/constants/siteContent.js`, `src/constants/aboutContent.js`에서 관리합니다.
