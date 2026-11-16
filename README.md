# 블루 아카이브 스토리 순서 가이드

스토리 뉴비를 위한 블루 아카이브 스토리 연표·감상 순서 페이지입니다. (비공식 팬 가이드)

원글: [블루 아카이브 마이너 갤러리 — 스토리 뉴비들을 위한 스토리연표 및 스토리순서](https://gall.dcinside.com/mgallery/board/view/?id=arona&no=10164)

## 기능
- 5가지 감상 루트 탭 (메인만 / 이벤트 포함 / 1부 이후 / 데카그라마톤 / 2부 프롤로그)
- 중요도 별표 (★★★ 필수 / ★★ 추천 / ★ 선택)
- 감상 체크 + 진행도 바 + "이어보기" 버튼 (브라우저에 저장)
- 카드 사진을 누르면 크게 보기 (‹ › 또는 ← →로 앞뒤 카드, Esc로 닫기)
- 화별 목록: 화 제목을 누르면 "여기까지 감상" 북마크 (마지막 화를 누르면 카드도 자동 체크)
- 필터 (안 본 것 / 필수급 / 메인 / 이벤트)
- 다크·라이트 테마

## GitHub Pages로 올리는 법
1. GitHub에서 새 저장소 만들기 (예: `bluearchive-storyline`, Public)
2. **Add file → Upload files** 로 `index.html`, `data.js`, `README.md` 업로드 → Commit
3. **Settings → Pages → Branch: `main` / `(root)`** 선택 후 Save
4. 1~2분 뒤 `https://<내아이디>.github.io/bluearchive-storyline/` 에서 확인

## 내용 수정
스토리 목록은 전부 `data.js`에 있습니다. 항목 하나는 이렇게 생겼어요:

```js
{ title: "Vol.1 대책위원회 편 1장", type: "main", imp: 3, notes: ["메모"] }
```

- `type`: `main` 메인 · `event` 이벤트 · `final` 최종편 · `todo` 작성 필요
- `imp`: `3` 필수 · `2` 추천 · `1` 선택 · `0` 표시 안 함
- `img`: 카드 그림 (`images/art/`, 480×270), `logo`: 그림 위에 얹을 이벤트 로고 (`images/logo/`)
  - `img`+`logo` → 그림 위에 로고 / `logo`만 → 하늘색 배경 위에 로고 / `img`만 → 그림만
  - 출처: 그림은 [Schale Calendar](https://schalecalendar.com/timeline), 한글 로고는 [SchaleDB](https://schaledb.com)
- `noReplay: true`: 게임 안 스토리 다시보기에 없는 이벤트 → 카드에 "다시보기 미수록" 태그
- `ep`: 화별 목록 키 (`episodes.js` 참고), 일부 화만 보려면 `epFrom` / `epTo`
- 소제목은 `{ group: "소제목" }`

원글 순서에 없는 이벤트는 `data.js`의 `window.EXTRAS`에 넣으면 페이지 맨 아래에 따로 표시됩니다 (`replay`: 게임 내 다시보기 수록 여부).
