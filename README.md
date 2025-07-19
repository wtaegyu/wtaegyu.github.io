# 개인 포트폴리오 웹사이트

깔끔하고 모던한 디자인의 개인 포트폴리오 웹사이트입니다.

## 🚀 GitHub Pages 배포 방법

### 1. GitHub 저장소 생성
1. GitHub에서 새 저장소를 생성합니다
2. 저장소 이름을 `yourusername.github.io`로 설정합니다 (yourusername은 본인의 GitHub 사용자명)

### 2. 파일 업로드
1. 이 프로젝트의 모든 파일을 GitHub 저장소에 업로드합니다
2. 또는 Git 명령어를 사용하여 업로드:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### 3. GitHub Pages 활성화
1. GitHub 저장소 페이지에서 `Settings` 탭으로 이동
2. 왼쪽 메뉴에서 `Pages` 클릭
3. `Source` 섹션에서 `Deploy from a branch` 선택
4. `Branch`를 `main`으로 설정하고 `Save` 클릭

### 4. 웹사이트 확인
몇 분 후에 `https://yourusername.github.io`에서 웹사이트를 확인할 수 있습니다.

## 📁 파일 구조

```
├── index.html          # 메인 HTML 파일
├── style.css           # CSS 스타일
├── script.js           # JavaScript 기능
└── README.md           # 이 파일
```

## 🎨 커스터마이징

### 개인 정보 수정
- `index.html`에서 `[이름]` 부분을 본인의 이름으로 변경
- 이메일, GitHub, LinkedIn 링크를 본인의 정보로 수정
- 프로젝트 정보를 실제 프로젝트로 교체

### 디자인 수정
- `style.css`에서 색상, 폰트, 레이아웃을 수정
- `#2563eb` (파란색)을 다른 색상으로 변경 가능

### 기능 추가
- `script.js`에서 추가 인터랙션 구현
- 새로운 섹션 추가 가능

## 📱 반응형 디자인

이 웹사이트는 모바일, 태블릿, 데스크톱 모든 기기에서 최적화되어 있습니다.

## 🛠️ 기술 스택

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Google Fonts (Noto Sans KR)

## 📞 연락처

궁금한 점이 있으시면 언제든 연락주세요!

---

**참고**: GitHub Pages는 무료로 제공되며, 저장소가 public이어야 합니다.
