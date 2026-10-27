# 우리 가족 젠더리빌 웹사이트

정적 웹사이트 두 페이지로 구성했습니다.

- `index.html`: D-Day 카운트다운.
- 공개 시각이 되면 첫 페이지에 Zoom 링크와 `reveal.html` 링크가 나타납니다.
- `preview.html`: 카운트다운이 끝난 뒤의 Zoom/공개 페이지 링크 화면을 미리 확인합니다. 실제 날짜나 공개 설정은 변경되지 않습니다.
- `reveal.html`: `config.js`에서 설정한 비밀번호 `America`를 입력하면 성별·사진·문구를 보여줍니다.
- `config.js`: 날짜, Zoom 주소, 성별, 사진, 이름/예정일, 가족별 문구를 수정합니다.

## 공개일 화면 미리 보기

사이트의 `preview.html`을 열면 D-Day가 끝난 뒤 화면이 가상으로 표시됩니다. GitHub Pages에 올린 뒤에는 사이트 주소 끝에 `/preview.html?family=inlaws`를 붙여 열 수 있고, 친정 문구는 `?family=parents`로 확인합니다. 이 페이지는 실제 공개일을 기다리지 않고 화면만 보여줍니다.

## 먼저 설정하기

## 초보자를 위한 파일 수정 방법

1. Finder를 열고 프로젝트 폴더 `referenced-chatgpt-conversation-this-is-an`을 엽니다. 현재 폴더는 `Codex` → `2026-10-23` 안에 있습니다.
2. `config.js` 파일을 엽니다. Mac에서는 파일을 Control-클릭(또는 오른쪽 클릭)하고 **다음으로 열기 → 텍스트 편집기(TextEdit)** 를 선택하세요. TextEdit 메뉴에서 **포맷 → 일반 텍스트로 만들기**가 보이면 눌러 일반 텍스트 상태로 편집합니다. VS Code가 설치되어 있으면 VS Code로 열어도 됩니다.
3. 아래 예시처럼 `revealDate:` 뒤의 날짜/시간 텍스트만 고칩니다. 따옴표와 쉼표는 그대로 둡니다. 현재 설정은 `2026-10-30T21:00:00-04:00`이며, 한국시간으로 2026년 10월 31일 오전 10시입니다.
4. 파일 메뉴에서 **저장**을 누릅니다 (`Command + S`). 파일 이름이 `config.js.txt`가 되지 않도록 확인하세요. 파일 이름은 정확히 `config.js`여야 합니다.
5. 브라우저의 사이트 화면으로 돌아와 새로고침합니다 (`Command + R`). 오래된 내용이 보이면 강력 새로고침 `Command + Shift + R`을 시도하세요. 미리보기는 프로젝트 안의 `preview.html`, 일반 페이지는 `index.html`입니다.
6. 변경이 보이지 않으면 파일이 실제 프로젝트 폴더 안의 `config.js`인지, 저장 후 브라우저가 다시 불러왔는지 확인합니다. 브라우저 주소가 `file:///.../index.html`이면 지금 컴퓨터의 파일을 직접 보는 것입니다. GitHub 사이트를 바꾸려면 수정한 파일을 저장소에도 업로드/커밋해야 합니다.

`config.js`를 열어 다음 항목을 수정하세요.

```js
family: 'inlaws',
revealDate: '2026-10-30T21:00:00-04:00',
revealTimeZone: 'America/New_York',
revealPassword: 'America',
zoomUrl: 'https://zoom.us/j/여기에-초대링크',
babySex: 'girl', // 'boy' 또는 'girl'
babyName: '',
dueDate: '',
photos: [
  {src: 'images/first-hello.jpg', alt: '아기의 초음파 사진', caption: '우리의 첫 만남'}
],
```

실제 공개 날짜와 Zoom 주소를 입력하고, 필요한 경우 `babySex`를 `boy` 또는 `girl`로 바꾸세요. 공개일에 가족별로 표시할 문구는 `revealCopy.inlaws`와 `revealCopy.parents`에서 수정합니다. 첫 화면은 성별 공개를 떠올리지 않도록 중립적인 카운트다운만 표시합니다.

## 모든 화면 문구 바꾸기

코드를 수정할 필요 없이 `config.js`의 `ui`와 `revealUi` 안에서 화면 문구를 바꿀 수 있습니다.

- `ui`: 카운트다운 화면 제목, 날짜 뒤 문구, 날짜 단위, 공개일 안내, Zoom 및 공개 페이지 버튼 문구
- `revealUi`: 비밀번호 페이지 제목·안내·버튼·오류 메시지, 결과 화면 기본 문구
- `revealCopy.inlaws` / `revealCopy.parents`: 각 가족에게 보여줄 성별 공개 제목과 메시지

각 항목은 `이름:'보일 문구'` 형태입니다. 바꾸고 싶은 문구의 작은따옴표 안 글자만 교체하고, 따옴표와 항목 끝 쉼표는 그대로 남겨두세요. 줄바꿈은 문구 안에 `\n`을 씁니다. 날짜 표시는 `revealDate`와 `revealTimeZone`에서 바꿉니다. 카운트다운 첫 화면의 텍스트는 `ui.brand`, `ui.eyebrow`, `ui.countdownHeading`, `ui.dateSuffix`에서 설정합니다. 현재 기본 문구는 젠더리빌이나 임신을 암시하지 않는 중립적인 표현입니다.

## 초음파 사진 추가하기

1. 컴퓨터에서 이 웹사이트 프로젝트 폴더를 엽니다. `images`라는 새 폴더를 만듭니다.
2. 원하는 사진을 `images` 안에 넣고, 파일명을 영문과 숫자로 간단히 바꿉니다. 예: `first-hello.jpg` (대문자/소문자와 확장자를 설정에 똑같이 적어야 합니다.)
3. `config.js`의 `photos:[]`를 다음처럼 수정합니다.

```js
photos:[
  {src:'images/first-hello.jpg',alt:'아기의 초음파 사진',caption:'우리의 첫 만남'}
],
```

사진을 더 넣으려면 항목을 쉼표로 구분해 추가할 수 있습니다. 예를 들어 `{src:'images/second.jpg',alt:'두 번째 초음파 사진',caption:'조금 더 자란 우리 아기'}`를 첫 항목 뒤에 추가합니다. 공개 페이지에 사진이 여러 장 있으면 좌우 화살표로 한 장씩 넘기는 슬라이드쇼로 표시됩니다. 변경한 `config.js`와 사진 파일을 함께 GitHub 저장소에 올리면 게시된 사이트에서도 사진이 표시됩니다.

성별 테마는 `config.js`의 `babySex` 값으로 선택합니다. `boy`이면 파란색, `girl`이면 핑크색 배경으로 바뀌고 기존 콘페티 애니메이션은 그대로 나옵니다.

초음파 이미지는 민감한 가족 정보입니다. 이 프로젝트의 비밀번호 화면은 정적 사이트에서 진짜 사진 보호 기능이 아닙니다. 사진을 저장소와 Pages 사이트에 올리면 주소를 아는 사람은 사진 파일에 직접 접근할 수 있으니, 공개해도 괜찮은 사진만 게시하세요.

## GitHub Pages로 게시하기

1. GitHub에서 저장소를 만들고 이 폴더의 파일을 저장소 최상위에 올립니다. `index.html`, `reveal.html`, `config.js`, `reveal.js`, `script.js`, `styles.css`가 루트에 있어야 합니다.
2. 저장소의 **Settings → Pages**로 이동합니다.
3. **Build and deployment**에서 **Deploy from a branch**를 선택하고, `main` 브랜치의 `/(root)`를 지정한 다음 저장합니다.
4. Pages 설정 화면에 표시되는 사이트 주소를 열어 확인합니다. 주소는 `https://사용자이름.github.io/저장소이름/` 형태일 수 있습니다.
5. 링크를 먼저 가족에게 보내고, 공개일에는 영상 통화로 함께 확인하면 됩니다. 친정에 보낼 링크는 끝에 `?family=parents`를 붙이세요.

GitHub 공식 안내: [GitHub Pages 사이트 만들기](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## 꼭 알아둘 점: 정적 사이트의 비밀번호는 잠금 장치가 아닙니다

요청하신 대로 서버 확인 없이 `America`만 입력하면 페이지가 열립니다. 그래서 비밀번호와 `config.js`에 넣은 성별·Zoom 주소, 업로드한 사진은 사이트 파일을 열어보는 사람에게 공개되어 있습니다. 비밀번호 화면은 방문자의 실수로 먼저 열어보는 것을 막는 간단한 화면일 뿐, 사진과 정보를 비공개로 보호하지 않습니다. 이 구성으로 게시하기 전에 사진과 성별이 웹사이트 파일에 공개되어도 괜찮은지 확인하세요. `noindex` 설정도 검색 노출을 보장해서 막아주지는 않습니다.

초음파 사진을 올리면 해당 파일의 공개 URL을 아는 누구나 볼 수 있습니다. 더 강한 보호가 필요하면 정적 GitHub Pages 대신 서버에서 비밀번호와 파일 접근을 검증하는 호스팅 구조가 필요합니다.
