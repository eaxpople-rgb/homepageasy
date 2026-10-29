# 안수연 R&D 포트폴리오 — 정적 반응형 홈페이지 초안

## 바로 실행하기
1. ZIP 파일을 압축 해제합니다.
2. 폴더 최상단의 `index.html`을 Chrome, Edge 또는 Firefox로 엽니다.
3. 메인 메뉴, 3개 프로젝트 카드, 이메일, 이력서 PDF 버튼이 작동합니다.

별도 개발 서버, npm 설치 또는 외부 CDN이 필요하지 않습니다. HTML, CSS, JavaScript만 사용했습니다.

## 파일 구조

```
index.html
projects/
  ncm-recycling/index.html
  mhp-purification/index.html
  lfp-development/index.html
assets/
  style.css
  site.js
  profile.webp
  resume-and-statement.pdf
```

## 구현 내용
- 메인 8개 섹션: Hero, Highlights, About, Experience, Projects, Skills, Publications, Contact
- 연구 프로젝트 상세 페이지 3개: Overview, Problem, Approach, Analysis, Results, Contribution, Takeaways
- 반응형 레이아웃 (PC / 태블릿 / 모바일), 상단 고정 메뉴, 모바일 메뉴, 스크롤 진행 표시, 현재 섹션 강조
- 이메일 보내기, 이메일 복사, 실제 PDF 다운로드, 프로젝트 간 이전/다음 링크
- 키보드 접근성, reduced-motion, 인쇄용 CSS 일부 반영

## 페이지 주소
- 로컬/일반 정적 호스팅: `index.html`, `projects/ncm-recycling/index.html` 등
- `/projects/ncm-recycling` 같은 확장자 없는 주소를 사용하려면 호스팅에서 directory index 제공 또는 리라이트 설정을 확인해야 합니다.

## 게시 전 검토 사항
- 첨부 문서에 포함된 사진, 개인 연락처, 이력서 및 자기소개서를 **공개 웹사이트에 게시해도 되는지** 확인하세요.
- SK온 기업과제 내용, 분석 수치, 그래프와 장비 정보를 공개 가능한 범위에서 사용하세요.
- 첨부 이력서의 연구성과 및 학위 예정 정보를 기반으로 작성되었습니다. 최종 논문 DOI, 실제 실험 이미지, 학회 발표명 등을 추가하세요.
- 개념도는 웹사이트를 위한 SVG 삽화로 원시 실험 이미지나 측정 그래프가 아닙니다.
- HTML의 `mailto:`는 사용자의 운영체제/브라우저에 이메일 앱이 설정된 경우 실행됩니다.

## 정보 수정
- 이름/설명: 각 HTML 파일
- 디자인 전반: `assets/style.css`
- 모바일 메뉴/이메일 복사/진행 표시: `assets/site.js`
- 얼굴 사진: `assets/profile.webp`
- 다운로드 문서: `assets/resume-and-statement.pdf`
