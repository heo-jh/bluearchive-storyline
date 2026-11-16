// ============================================================
//  스토리 데이터 — 이 파일만 고치면 사이트 내용이 바뀝니다.
//
//  imp(중요도): 3 = 필수(빨간별), 2 = 보는 게 좋음(노란별), 1 = 선택, 0 = 표시 안 함
//  type: "main"(메인) | "event"(이벤트) | "final"(최종편) | "todo"(작성 필요)
//  notes: 카드 아래 표시되는 메모 (배열)
// ============================================================

window.SITE = {
  title: "블루 아카이브 스토리 순서 가이드",
  subtitle: "스토리 뉴비들을 위한 스토리 연표 및 감상 순서 (1부 ~ 2부)",
  updated: "2026-11-17",
  source: {
    label: "원글: 블루 아카이브 마이너 갤러리 (KiyosumiAkira)",
    url: "https://gall.dcinside.com/mgallery/board/view/?id=arona&no=10164"
  },
  changelog: [
    { date: "2026-11-17", tag: "디자인", text: "카드 이미지 통일 — 메인은 장별 게임 그림, 이벤트는 게임 그림 위에 한글 로고" },
    { date: "2026-11-17", tag: "디자인", text: "이벤트 카드 이미지를 한글 이벤트 로고 + 통일 배경으로 교체 (설명 글이 박힌 공지 배너 대신)" },
    { date: "2026-11-17", tag: "기능", text: "맨 아래에 '원글 순서에 없는 이벤트' 섹션 추가 (어떤 과학의 청춘기록, 출항! 만마선)" },
    { date: "2026-11-17", tag: "기능", text: "게임 안 다시보기에 없는 이벤트에 '다시보기 미수록' 표시 추가" },
    { date: "2026-11-17", tag: "기능", text: "이벤트 스토리 카드에도 화별 제목 목록 추가" },
    { date: "2026-11-17", tag: "기능", text: "메인 스토리 카드에 화별 제목 목록 추가 ('화별 목록'을 눌러 펼치기)" },
    { date: "2026-11-17", tag: "내용", text: "데카그라마톤 3장 22~26화(결전 이후) 추가, '합장의 하늘' → '합일의 하늘' 표기 수정" },
    { date: "2026-11-16", tag: "기능", text: "1부에도 메인 스토리별 소제목 추가, 바로가기를 큰 구간 위주로 정리" },
    { date: "2026-11-16", tag: "기능", text: "스토리 순서 상단에 바로가기 추가, 카드 높이 줄임(썸네일 왼쪽 배치)" },
    { date: "2026-11-16", tag: "기능", text: "1부 최종편과 1부 이후 사이에 구분선 추가, 한국어 제목 확인 메모 삭제" },
    { date: "2026-11-16", tag: "기능", text: "스토리별 대표 이미지(img) 연결 — 한국 공식 포럼 한글 배너 우선" },
    { date: "2026-11-16", tag: "기능", text: "통합 순서를 처음~2부 한 탭으로 합침, 이벤트 전용 탭 삭제" },
    { date: "2026-11-16", tag: "내용", text: "227호 온천장 → 발렌타인 순찰 → 와카모 순으로 조정" },
    { date: "2026-11-16", tag: "내용", text: "③ 메인 이후·④ 데카그라마톤을 원글 이미지대로 교체, 1부 이후 통합 순서에 이벤트 추가" },
    { date: "2026-11-16", tag: "내용", text: "1부 통합 순서를 원글 이미지 순서 그대로 교체" },
    { date: "2026-11-16", tag: "기능", text: "1부 최종장 이후 ~ 2부 통합 순서 탭 추가" },
    { date: "2026-11-16", tag: "내용", text: "'불인의 마음' 위치를 에덴조약 3장 이후로 조정, 데카그라마톤 1장 1~13화 추가" },
    { date: "2026-11-16", tag: "기능", text: "메인+이벤트 통합 순서 탭 추가 (기본 탭)" },
    { date: "2026-11-16", tag: "기능", text: "사이트 최초 공개 — 원글 섹션 1·2 반영, 섹션 3~5 틀 마련" }
  ],
  notice: [
    "이 순서는 <b>비공식</b>입니다. 공식 순서가 아닌 커뮤니티 추천 순서예요.",
    "스토리의 <b>재미를 평가하지 않고</b>, 감상 순서만 정리합니다.",
    "에덴조약 1~4장은 한 번에 몰아 봐도 스토리 순서상 문제 없습니다.",
    "섹션 3 이후는 KR·글로벌 서버 기준이며, 원글 작성 시점(05/30) 기준 Vol.6 3장까지 다룹니다."
  ]
};

window.ROUTES = [
  {
    id: "all1",
    name: "⭐ 통합 순서 (메인+이벤트, 처음부터 2부까지)",
    short: "⭐ 통합 순서",
    desc: "처음부터 2부까지 메인+이벤트를 한 줄로 이은 순서입니다. 1부는 원글 이미지 순서 그대로, 1부 이후는 원글의 메인·데카그라마톤 순서 사이에 일본 서버 공개 순서대로 이벤트를 넣었어요.",
    items: [
      { divider: "1부", jump: "1부" },
      { group: "프롤로그 · Vol.1 대책위원회 편" },
      { title: "프롤로그", ep: "pro", type: "main", imp: 3, img: "images/art/pro.jpg" },
      { title: "Vol.1 대책위원회 편 1장", ep: "v1c1", type: "main", imp: 3, img: "images/art/v1c1.jpg" },
      { title: "Vol.1 대책위원회 편 2장", ep: "v1c2", type: "main", imp: 3, img: "images/art/v1c2.jpg" },
      { title: "벚꽃만발 축제대소동!", ep: "ouka-ranman", type: "event", imp: 2, img: "images/art/ouka-ranman.jpg", logo: "images/logo/ouka-ranman.webp" },
      { title: "혁명의 이반 쿠팔라", ep: "ivan-kupala", type: "event", imp: 2, img: "images/art/ivan-kupala.jpg", logo: "images/logo/ivan-kupala.webp" },
      { title: "네버랜드에서의 술래잡기", ep: "catch-in-neverland", type: "event", imp: 1, img: "images/art/catch-in-neverland.jpg", logo: "images/logo/catch-in-neverland.webp" },
      { group: "Vol.2 태엽감는 꽃의 파반느 편 1장" },
      { title: "Vol.2 태엽감는 꽃의 파반느 편 1장", ep: "v2c1", type: "main", imp: 3, img: "images/art/v2c1.jpg" },
      { title: "선상의 바니 체이서", noReplay: true, ep: "bunny-chaser", type: "event", imp: 3, img: "images/art/bunny-chaser.jpg", logo: "images/logo/bunny-chaser.webp", notes: ["메인과 직결되는 필수급 이벤트"] },
      { title: "제68번 신춘광상곡", noReplay: true, ep: "new-years-rhapsody-68", type: "event", imp: 2, img: "images/art/new-years-rhapsody-68.jpg", logo: "images/logo/new-years-rhapsody-68.webp" },
      { group: "Vol.3 에덴조약 편 1~3장", jump: "에덴조약" },
      { title: "Vol.3 에덴조약 편 1장", ep: "v3c1", type: "main", imp: 3, img: "images/art/v3c1.jpg" },
      { title: "Vol.3 에덴조약 편 2장", ep: "v3c2", type: "main", imp: 3, img: "images/art/v3c2.jpg" },
      { title: "Vol.3 에덴조약 편 3장 (1~4화)", ep: "v3c3", epTo: 4, type: "main", imp: 3, img: "images/art/v3c3.jpg", notes: ["4화까지만 보고 이벤트로"] },
      { title: "히나 선도부장님의 여름방학!", noReplay: true, ep: "hina-summer-vacation", type: "event", imp: 1, img: "images/art/hina-summer-vacation.jpg", logo: "images/logo/hina-summer-vacation.webp" },
      { title: "여름 하늘의 위시리스트", ep: "summer-sky-wishlist", type: "event", imp: 1, img: "images/art/summer-sky-wishlist.jpg", logo: "images/logo/summer-sky-wishlist.webp" },
      { title: "Vol.3 에덴조약 편 3장 (5화~)", ep: "v3c3", epFrom: 5, type: "main", imp: 3, img: "images/art/v3c3.jpg" },
      { group: "Vol.3 에덴조약 편 4장" },
      { title: "Vol.3 에덴조약 편 4장", ep: "v3c4", type: "main", imp: 3, img: "images/art/v3c4.jpg" },
      { title: "227호 온천장 운영일지!", noReplay: true, ep: "hot-spring-227", type: "event", imp: 2, img: "images/art/hot-spring-227.jpg", logo: "images/logo/hot-spring-227.webp" },
      { title: "샬레의 해피 발렌타인 순찰", noReplay: true, ep: "valentine-patrol", type: "event", imp: 1, img: "images/art/valentine-patrol.jpg", logo: "images/logo/valentine-patrol.webp", notes: ["난이도가 부담되면 건너뛰어도 됨"] },
      { title: "코사카 와카모의 침묵과 축연", noReplay: true, ep: "wakamo", type: "event", imp: 1, img: "images/art/wakamo.jpg", logo: "images/logo/wakamo.webp", notes: ["난이도가 부담되면 건너뛰어도 됨"] },
      { title: "우당탕탕 수녀님과 고서관의 마술사", noReplay: true, ep: "slapstick-sister", type: "event", imp: 1, img: "images/art/slapstick-sister.jpg", logo: "images/logo/slapstick-sister.webp" },
      { group: "Vol.4 카르바노그의 토끼 편 1장", jump: "토끼 1장" },
      { title: "Vol.4 카르바노그의 토끼 편 1장", ep: "v4c1", type: "main", imp: 3, img: "images/art/v4c1.jpg" },
      { title: "불인(不忍)의 마음", noReplay: true, ep: "unconcealed-heart", type: "event", imp: 3, img: "images/art/unconcealed-heart.jpg", logo: "images/logo/unconcealed-heart.webp", notes: ["메인과 직결되는 필수급 이벤트"] },
      { title: "아비도스 리조트 복구 대책위원회", ep: "abydos-resort", type: "event", imp: 2, img: "images/art/abydos-resort.jpg", logo: "images/logo/abydos-resort.webp" },
      { title: "출장! 백야당 바다의 집 프랜차이즈 계획", ep: "momoyodou-beach-house", type: "event", imp: 2, img: "images/art/momoyodou-beach-house.jpg", logo: "images/logo/momoyodou-beach-house.webp" },
      { title: "달콤한 비밀과 총격전", ep: "sweet-secrets", type: "event", imp: 2, img: "images/art/sweet-secrets.jpg", logo: "images/logo/sweet-secrets.webp" },
      { title: "ON YOUR MARK @MILLENNIUM (키보토스 황륜대제)", ep: "on-your-mark", type: "event", imp: 2, img: "images/art/on-your-mark.jpg", logo: "images/logo/on-your-mark.webp" },
      { title: "Get Set, Go! (키보토스 황륜대제)", ep: "get-set-go", type: "event", imp: 2, img: "images/art/get-set-go.jpg", logo: "images/logo/get-set-go.webp" },
      { title: "Ex. 데카그라마톤 편 1장 지혜의 뱀 (1~13화)", ep: "dc1", epTo: 13, type: "main", imp: 2, img: "images/art/dc1.jpg", notes: ["13화 '새로운 시작'까지만 보고 멈추기", "14화부터는 1부 완결 이후 구간에서"] },
      { group: "Vol.2 태엽감는 꽃의 파반느 편 2장 · 최종편", jump: "최종편" },
      { title: "Vol.2 태엽감는 꽃의 파반느 편 2장", ep: "v2c2", type: "main", imp: 3, img: "images/art/v2c2.jpg" },
      { title: "성당의 메리 크리스마스", noReplay: true, ep: "cathedral-christmas", type: "event", imp: 1, img: "images/art/cathedral-christmas.jpg", logo: "images/logo/cathedral-christmas.webp" },
      { title: "새해의 아페리티프", ep: "new-year-aperitif", type: "event", imp: 1, img: "images/art/new-year-aperitif.jpg", logo: "images/logo/new-year-aperitif.webp" },
      { title: "Final. 그리고 모든 기적이 시작되는 곳 편", ep: ["fc1", "fc2", "fc3", "fc4"], type: "final", imp: 3, img: "images/art/fc1.jpg", notes: ["여기까지가 1부입니다."] },
      { divider: "1부 완결 · 여기부터 1부 이후", jump: "1부 이후" },
      { group: "최종편 후일담 무렵" },
      { title: "D.U. 시라토리구 복구작업", noReplay: true, ep: "du-shiratori", type: "event", imp: 1, logo: "images/logo/du-shiratori.webp" },
      { title: "백아의 예고장 ~허식의 저택과 미학의 소재~", noReplay: true, ep: "alabaster-calling-card", type: "event", imp: 1, img: "images/art/alabaster-calling-card.jpg", logo: "images/logo/alabaster-calling-card.webp" },
      { title: "용무동주 ~그려보는 하나의 미래~", noReplay: true, ep: "dragon-tortoise", type: "event", imp: 1, img: "images/art/dragon-tortoise.jpg", logo: "images/logo/dragon-tortoise.webp" },
      { group: "Vol.4 카르바노그의 토끼 편 2장", jump: "토끼 2장" },
      { title: "Vol.4 카르바노그의 토끼 편 2장", ep: "v4c2", type: "main", imp: 3, img: "images/art/v4c2.jpg" },
      { title: "여름 특수작전! RABBIT 소대와 사라진 새우의 수수께끼 (수토끼)", ep: "rabbit-shrimp", type: "event", imp: 2, logo: "images/logo/rabbit-shrimp.webp", notes: ["토끼 편 2장 직후 추천 (원글)"] },
      { title: "숨겨진 유산을 찾아서 ~트리니티의 과외활동~", ep: "hidden-heritage", type: "event", imp: 2, logo: "images/logo/hidden-heritage.webp", notes: ["백화요란 1장 전 추천 (원글)"] },
      { title: "학만동인 이야기 ~두 사람이 바라는 최종화~", ep: "academy-club-story", type: "event", imp: 1, img: "images/art/academy-club-story.jpg", logo: "images/logo/academy-club-story.webp" },
      { title: "TRIP TRAP TRAIN", ep: "trip-trap-train", type: "event", imp: 1, img: "images/art/trip-trap-train.jpg", logo: "images/logo/trip-trap-train.webp" },
      { group: "Vol.5 백화요란 편 1장" },
      { title: "Vol.5 백화요란 편 1장", ep: "v5c1", type: "main", imp: 3, img: "images/art/v5c1.jpg" },
      { title: "Ex. 데카그라마톤 편 1장 지혜의 뱀 (14~17화)", ep: "dc1", epFrom: 14, type: "main", imp: 2, img: "images/art/dc1.jpg" },
      { title: "전뇌 신춘행진곡", noReplay: true, ep: "new-year-march", type: "event", imp: 1, img: "images/art/new-year-march.jpg", logo: "images/logo/new-year-march.webp" },
      { title: "볕 드는 그녀들의 소야곡", ep: "sunshine-serenade", type: "event", imp: 1, img: "images/art/sunshine-serenade.jpg", logo: "images/logo/sunshine-serenade.webp" },
      { group: "Vol.1 대책위원회 편 3장", jump: "대책위 3장" },
      { title: "Vol.1 대책위원회 편 3장", ep: "v1c3", type: "main", imp: 3, img: "images/art/v1c3.jpg" },
      { title: "0068 오페라로부터 사랑을 담아!", noReplay: true, ep: "0068-opera", type: "event", imp: 1, img: "images/art/0068-opera.jpg", logo: "images/logo/0068-opera.webp" },
      { title: "니기니기와 유키유키테", ep: "get-hyped-march-on", type: "event", imp: 1, img: "images/art/get-hyped-march-on.jpg", logo: "images/logo/get-hyped-march-on.webp" },
      { title: "-ive aLIVE!", ep: "ive-alive", type: "event", imp: 1, img: "images/art/ive-alive.jpg", logo: "images/logo/ive-alive.webp" },
      { title: "Say-Bing!", ep: "say-bing", type: "event", imp: 1, img: "images/art/say-bing.jpg", logo: "images/logo/say-bing.webp" },
      { title: "Sheside Outside", ep: "sheside-outside", type: "event", imp: 1, img: "images/art/sheside-outside.jpg", logo: "images/logo/sheside-outside.webp" },
      { title: "월화몽소", noReplay: true, ep: "moonlight-dream", type: "event", imp: 1, img: "images/art/moonlight-dream.jpg" },
      { title: "오진래강", noReplay: true, ep: "five-senses", type: "event", imp: 1, logo: "images/logo/five-senses.webp" },
      { title: "Serenade Promenade", noReplay: true, ep: "serenade-promenade", type: "event", imp: 1, img: "images/art/serenade-promenade.jpg", logo: "images/logo/serenade-promenade.webp" },
      { group: "Ex. 데카그라마톤 편 2장", jump: "데카 2장" },
      { title: "Ex. 데카그라마톤 편 2장 불타는 검", ep: "dc2", type: "main", imp: 3, img: "images/art/dc2.jpg" },
      { title: "비밀의 미드나이트 파티", noReplay: true, ep: "secret-midnight-party", type: "event", imp: 1, img: "images/art/secret-midnight-party.jpg", logo: "images/logo/secret-midnight-party.webp" },
      { title: "Code: BOX 밀레니엄에 다가오는 그림자", noReplay: true, ep: "code-box", type: "event", imp: 3, img: "images/art/code-box.jpg", logo: "images/logo/code-box.webp", notes: ["데카그라마톤 3장 전 필수 시청 추천 (원글)"] },
      { title: "팬데믹 해저드 ~기적의 팬케이크~", noReplay: true, ep: "pandemic-hazard", type: "event", imp: 1, img: "images/art/pandemic-hazard.jpg", logo: "images/logo/pandemic-hazard.webp" },
      { title: "플레이볼! ~노려라! 만루 홈런~", noReplay: true, ep: "pray-ball", type: "event", imp: 1, img: "images/art/pray-ball.jpg", logo: "images/logo/pray-ball.webp" },
      { title: "하이랜더 철도 폭주 사건 ~그리고 열차는 사라졌다~", ep: "highlander-railroad", type: "event", imp: 1, img: "images/art/highlander-railroad.jpg" },
      { group: "Vol.5 백화요란 편 2장" },
      { title: "Vol.5 백화요란 편 2장", ep: "v5c2", type: "main", imp: 3, img: "images/art/v5c2.jpg" },
      { title: "백에서 피어나는 한 송이 ~수상 승부~", ep: "flower-among-hundred", type: "event", imp: 1, img: "images/art/flower-among-hundred.jpg", logo: "images/logo/flower-among-hundred.webp" },
      { title: "여름 하늘의 약속", ep: "summer-sky-promise", type: "event", imp: 1, img: "images/art/summer-sky-promise.jpg", logo: "images/logo/summer-sky-promise.webp" },
      { title: "우리는 오컬트 연구회!", noReplay: true, ep: "occult-research", type: "event", imp: 1, img: "images/art/occult-research.jpg", logo: "images/logo/occult-research.webp" },
      { group: "Vol.6 흘러간 시간들의 오라토리오 편", jump: "오라토리오" },
      { title: "Vol.6 흘러간 시간들의 오라토리오 편 1장", ep: "v6c1", type: "main", imp: 3, img: "images/art/v6c1.jpg" },
      { title: "누구를 위한 예술", noReplay: true, ep: "art-for-whom", type: "event", imp: 1, img: "images/art/art-for-whom.jpg", logo: "images/logo/art-for-whom.webp" },
      { title: "Vol.6 흘러간 시간들의 오라토리오 편 2장", ep: "v6c2", type: "main", imp: 3, img: "images/art/v6c2.jpg" },
      { title: "마법소녀 헤비캘리버", noReplay: true, ep: "heavy-caliber", type: "event", imp: 1, img: "images/art/heavy-caliber.jpg", logo: "images/logo/heavy-caliber.webp" },
      { title: "Vol.6 흘러간 시간들의 오라토리오 편 3장", ep: "v6c3", type: "main", imp: 3, img: "images/art/v6c3.jpg" },
      { title: "겨울 하늘의 문예부흥", noReplay: true, ep: "winter-renaissance", type: "event", imp: 1, img: "images/art/winter-renaissance.jpg", logo: "images/logo/winter-renaissance.webp" },
      { title: "불인의 길 ~패션쇼 경호 임무!~", noReplay: true, ep: "unconcealed-path", type: "event", imp: 2, img: "images/art/unconcealed-path.jpg", logo: "images/logo/unconcealed-path.webp", notes: ["불인의 마음 후속"] },
      { group: "Ex. 데카그라마톤 편 3장 (원글 이미지 순서)", jump: "데카 3장" },
      { title: "Ex. 데카그라마톤 편 3장 합일의 하늘 (1~10화)", ep: "dc3", epTo: 10, type: "main", imp: 3, img: "images/art/dc3.jpg" },
      { title: "강철대륙 공략전 (1~23화)", noReplay: true, ep: "steel", epTo: 23, type: "main", imp: 3, img: "images/kr-ev-steel-continent.jpg" },
      { title: "연합작전: 말쿠트 (24~26화)", noReplay: true, ep: "steel", epFrom: 24, epTo: 26, type: "main", imp: 3, img: "images/kr-ev-malkuth.jpg" },
      { title: "Ex. 데카그라마톤 편 3장 합일의 하늘 (11화)", ep: "dc3", epFrom: 11, epTo: 11, type: "main", imp: 3, img: "images/art/dc3.jpg" },
      { title: "Ex. 데카그라마톤 편 3장 합일의 하늘 (12~21화)", ep: "dc3", epFrom: 12, epTo: 21, type: "main", imp: 3, img: "images/art/dc3.jpg" },
      { title: "연합작전: 데카그라마톤 결전", noReplay: true, ep: "steel", epFrom: 27, type: "main", imp: 3, img: "images/kr-ev-deca-final.jpg" },
      { title: "Ex. 데카그라마톤 편 3장 합일의 하늘 (22~26화)", ep: "dc3", epFrom: 22, type: "main", imp: 3, img: "images/art/dc3.jpg" },
      { divider: "2부", jump: "2부" },
      { title: "2부 프롤로그", ep: "p2pro", type: "main", imp: 3, img: "images/art/p2pro.jpg" },
      { title: "Vol.0 연방학생회 편 1장", ep: "p2v0c1", type: "main", imp: 3, img: "images/art/p2v0c1.jpg" },
      { title: "Ex. 로어 추적 편 2장", ep: "lorec2", type: "main", imp: 2, img: "images/art/lorec2.jpg" },
      { title: "2부 Vol.1 불꽃과 그림자 편 1장", ep: "p2v1c1", type: "main", imp: 3, img: "images/art/p2v1c1.jpg" },
      { title: "2부 Vol.1 불꽃과 그림자 편 2장", ep: "p2v1c2", type: "main", imp: 3, img: "images/art/p2v1c2.jpg", notes: ["한국 서버 2026-11 기준 최신"] }
    ]
  },
  {
    id: "main1",
    name: "① 메인만 (1부 최종장까지)",
    short: "메인 1부",
    desc: "처음 시작하는 분께 추천. 메인 스토리만으로 1부 최종장까지 가장 깔끔하게 보는 순서입니다.",
    items: [
      { title: "Vol.1 대책위원회 편 1장", ep: "v1c1", type: "main", imp: 3, img: "images/art/v1c1.jpg" },
      { title: "Vol.1 대책위원회 편 2장", ep: "v1c2", type: "main", imp: 3, img: "images/art/v1c2.jpg" },
      { title: "Vol.2 태엽감는 꽃의 파반느 편 1장", ep: "v2c1", type: "main", imp: 3, img: "images/art/v2c1.jpg" },
      { title: "Vol.3 에덴조약 편 1장", ep: "v3c1", type: "main", imp: 3, img: "images/art/v3c1.jpg", notes: ["에덴조약 1~4장은 몰아서 봐도 순서상 문제 없음"] },
      { title: "Vol.3 에덴조약 편 2장", ep: "v3c2", type: "main", imp: 3, img: "images/art/v3c2.jpg" },
      { title: "Vol.3 에덴조약 편 3장", ep: "v3c3", type: "main", imp: 3, img: "images/art/v3c3.jpg" },
      { title: "Vol.4 카르바노그의 토끼 편 1장", ep: "v4c1", type: "main", imp: 3, img: "images/art/v4c1.jpg" },
      { title: "Vol.3 에덴조약 편 4장", ep: "v3c4", type: "main", imp: 3, img: "images/art/v3c4.jpg" },
      { title: "Vol.2 태엽감는 꽃의 파반느 편 2장", ep: "v2c2", type: "main", imp: 3, img: "images/art/v2c2.jpg" },
      { title: "Final. 그리고 모든 기적이 시작되는 곳 편", ep: ["fc1", "fc2", "fc3", "fc4"], type: "final", imp: 3, img: "images/art/fc1.jpg", notes: ["여기까지가 1부입니다."] }
    ]
  },
  {
    id: "main2",
    name: "③ 메인만 (1부 최종장 이후, 오라토리오까지)",
    short: "메인 이후",
    desc: "원글 이미지 순서. 최종장 이후 데카그라마톤은 따로 봐도 별 상관 없어요(④ 탭).",
    items: [
      { title: "Vol.4 카르바노그의 토끼 편 2장", ep: "v4c2", type: "main", imp: 3, img: "images/art/v4c2.jpg" },
      { title: "Vol.5 백화요란 편 1장", ep: "v5c1", type: "main", imp: 3, img: "images/art/v5c1.jpg" },
      { title: "Vol.1 대책위원회 편 3장", ep: "v1c3", type: "main", imp: 3, img: "images/art/v1c3.jpg" },
      { title: "Vol.5 백화요란 편 2장", ep: "v5c2", type: "main", imp: 3, img: "images/art/v5c2.jpg" },
      { title: "Vol.6 흘러간 시간들의 오라토리오 편 1장", ep: "v6c1", type: "main", imp: 3, img: "images/art/v6c1.jpg" },
      { title: "Vol.6 흘러간 시간들의 오라토리오 편 2장", ep: "v6c2", type: "main", imp: 3, img: "images/art/v6c2.jpg" },
      { title: "Vol.6 흘러간 시간들의 오라토리오 편 3장", ep: "v6c3", type: "main", imp: 3, img: "images/art/v6c3.jpg" },
    ]
  },
  {
    id: "deca",
    name: "④ 데카그라마톤 (1부 최종장 이후)",
    short: "데카그라마톤",
    desc: "원글 이미지 순서. Vol.2 태엽감는 꽃의 파반느 편 1~2장과 1부 최종편을 반드시 먼저 보세요.",
    items: [
      { title: "Ex. 데카그라마톤 편 1장 지혜의 뱀 (14~17화)", ep: "dc1", epFrom: 14, type: "main", imp: 3, img: "images/art/dc1.jpg" },
      { title: "Ex. 데카그라마톤 편 2장 불타는 검", ep: "dc2", type: "main", imp: 3, img: "images/art/dc2.jpg" },
      { title: "Code: BOX 밀레니엄에 다가오는 그림자", noReplay: true, ep: "code-box", type: "event", imp: 3, img: "images/art/code-box.jpg", logo: "images/logo/code-box.webp", notes: ["데카그라마톤 3장 전 필수 시청 추천"] },
      { title: "Ex. 데카그라마톤 편 3장 합일의 하늘 (1~10화)", ep: "dc3", epTo: 10, type: "main", imp: 3, img: "images/art/dc3.jpg" },
      { title: "강철대륙 공략전 (1~23화)", noReplay: true, ep: "steel", epTo: 23, type: "main", imp: 3, img: "images/kr-ev-steel-continent.jpg" },
      { title: "연합작전: 말쿠트 (24~26화)", noReplay: true, ep: "steel", epFrom: 24, epTo: 26, type: "main", imp: 3, img: "images/kr-ev-malkuth.jpg" },
      { title: "Ex. 데카그라마톤 편 3장 합일의 하늘 (11화)", ep: "dc3", epFrom: 11, epTo: 11, type: "main", imp: 3, img: "images/art/dc3.jpg" },
      { title: "Ex. 데카그라마톤 편 3장 합일의 하늘 (12~21화)", ep: "dc3", epFrom: 12, epTo: 21, type: "main", imp: 3, img: "images/art/dc3.jpg" },
      { title: "연합작전: 데카그라마톤 결전", noReplay: true, ep: "steel", epFrom: 27, type: "main", imp: 3, img: "images/kr-ev-deca-final.jpg" },
      { title: "Ex. 데카그라마톤 편 3장 합일의 하늘 (22~26화)", ep: "dc3", epFrom: 22, type: "main", imp: 3, img: "images/art/dc3.jpg" },
    ]
  },
];

// 원글 순서에 없는 이벤트 — 페이지 맨 아래 따로 표시 (진행도에는 포함 안 됨)
//  replay: 게임 안 스토리 다시보기에 있으면 true
window.EXTRAS = {
  title: "원글 순서에 없는 이벤트",
  desc: "원글 감상 순서에는 없는 이벤트를 따로 모았어요. 순서 목록에 넣을 위치가 정해지지 않아서 진행도에는 포함되지 않아요.",
  items: [
    { title: "어떤 과학의 청춘기록", replay: true, ep: "certain-scientific", logo: "images/logo/certain-scientific.webp", notes: ["「어떤 과학의 초전자포 T」 콜라보 이벤트"] },
    { title: "출항! 만마선 ~마코토 의장님의 화려한 피서~", replay: true, ep: "pandemonium-ship", img: "images/art/pandemonium-ship.jpg", logo: "images/logo/pandemonium-ship.webp", notes: ["게헨나 만마전 여름 이벤트, 오디세이아 해양학원 등장", "12~15화는 후일담, 16~27화는 미니게임 스토리"] }
  ]
};

window.REFERENCES = [
  { title: "메인·이벤트 공개 순서표 (일본어)", url: "https://ameararedou.com/bruaka-story-order/" },
  { title: "Yahoo!知恵袋 — 최종편 이후 추천 순서 (일본어)", url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11327762851" },
  { title: "Gamerch 블루 아카이브 위키 — 이벤트 스토리 추천 감상 시점 (일본어)", url: "https://gamerch.com/bluearchive/648183" },
  { title: "프로젝트MX 갤러리 — 뉴비용 스토리 순서 가이드", url: "https://gall.dcinside.com/mgallery/board/view/?id=projectmx&no=10529978" },
  { title: "note.com (dapper_worm1069) — 읽는 순서·공개 순서 정리 (일섭 스포 주의)", url: "https://note.com/dapper_worm1069" },
  { title: "kamigame.jp — 블루 아카이브 추천 스토리 순서·공개 순서 (일섭 스포 주의)", url: "https://kamigame.jp/" }
];
