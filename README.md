# 우리 가족 젠더리빌 웹사이트

정적 웹사이트 두 페이지로 구성했습니다.

- `index.html`: D-Day 카운트다운과 가족의 성별 예상 선택. 실시간 그래프나 서버 전송은 없으며, 선택은 해당 브라우저에만 저장됩니다.
- 공개 시각이 되면 첫 페이지에 Zoom 링크와 `reveal.html` 링크가 나타납니다.
- `reveal.html`: `config.js`에서 설정한 비밀번호 `America`를 입력하면 성별·사진·문구를 보여줍니다.
- `config.js`: 날짜, Zoom 주소, 성별, 사진, 이름/예정일, 가족별 문구를 수정합니다.

## 먼저 설정하기

`config.js`를 열어 다음 항목을 수정하세요.

```js
family: 'inlaws',
revealDate: '2026-11-15T20:00:00-05:00',
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

실제 공개 날짜와 Zoom 주소를 입력하고, NIPT 결과 확인 후 `babySex`를 `boy` 또는 `girl`로 바꾸세요. 초음파 사진은 프로젝트 안에 `images` 폴더를 만들고 파일을 넣은 뒤 `photos` 배열에 경로와 설명을 추가합니다. 공개일에 친정용으로 바꿀 문구는 `revealCopy.parents`, 첫 화면 문구는 `copy.parents`에서 수정하세요. 첫 화면 주소에 `?family=parents`를 붙이면 친정용 문구가 표시됩니다.

## 투표 안내

방문자가 왕자님/공주님 중 하나를 고르면 버튼이 선택 완료 상태가 되고 “선택 완료! 성별은 공개일에 공개됩니다.”가 표시됩니다. 선택은 그 사람의 현재 브라우저에만 기록되며 가족 전체의 집계나 실시간 그래프는 없습니다.

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
