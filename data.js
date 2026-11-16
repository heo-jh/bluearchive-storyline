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
  updated: "2026-11-16",
  source: {
    label: "원글: 블루 아카이브 마이너 갤러리 (KiyosumiAkira)",
    url: "https://gall.dcinside.com/mgallery/board/view/?id=arona&no=10164"
  },
  changelog: [
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
    id: "main1",
    name: "① 메인만 (1부 최종장까지)",
    short: "메인 1부",
    desc: "처음 시작하는 분께 추천. 메인 스토리만으로 1부 최종장까지 가장 깔끔하게 보는 순서입니다.",
    items: [
      { title: "Vol.1 대책위원회 편 1장", type: "main", imp: 3 },
      { title: "Vol.1 대책위원회 편 2장", type: "main", imp: 3 },
      { title: "Vol.2 시계태엽 꽃의 파반느 편 1장", type: "main", imp: 3 },
      { title: "Vol.3 에덴조약 편 1장", type: "main", imp: 3, notes: ["에덴조약 1~4장은 몰아서 봐도 순서상 문제 없음"] },
      { title: "Vol.3 에덴조약 편 2장", type: "main", imp: 3 },
      { title: "Vol.3 에덴조약 편 3장", type: "main", imp: 3 },
      { title: "RABBIT 소대 편 1장", type: "main", imp: 3 },
      { title: "Vol.3 에덴조약 편 4장", type: "main", imp: 3 },
      { title: "Vol.2 시계태엽 꽃의 파반느 편 2장", type: "main", imp: 3 },
      { title: "최종편 (1부 최종장)", type: "final", imp: 3, notes: ["여기까지가 1부입니다."] }
    ]
  },
  {
    id: "event1",
    name: "② 이벤트 포함 (1부 최종장까지)",
    short: "이벤트 1부",
    desc: "더 깊게 파고 싶은 분께. 원글에서는 모든 이벤트를 보는 것을 권장합니다. 메인은 ① 순서대로 보면서, 아래 이벤트를 사이사이 챙겨 보세요.",
    items: [
      { group: "필수급 — 메인 스토리와 직결" },
      { title: "선상의 바니 체이서", type: "event", imp: 3 },
      { title: "불인(不忍)의 마음", type: "event", imp: 3 },
      { group: "보는 게 좋음 — 학생들의 첫 만남 등 캐릭터 확장" },
      { title: "벚꽃만발 축제대소동", type: "event", imp: 2 },
      { title: "혁명의 이반 쿠팔라", type: "event", imp: 2 },
      { title: "227호 온천장 운영일지", type: "event", imp: 2 },
      { title: "신춘광상곡 제68번", type: "event", imp: 2 },
      { title: "아비도스 리조트 복구대책위원회", type: "event", imp: 2 },
      { title: "출장! 백야당 바다의 집 프랜차이즈 계획", type: "event", imp: 2 },
      { title: "달콤한 비밀: 총격전", type: "event", imp: 2 },
      { title: "Get Set, Go! 키보토스 황륜대제", type: "event", imp: 2 },
      { group: "나머지 — 스토리상 필수는 아님" },
      { title: "샬레의 해피 발렌타인 순찰", type: "event", imp: 1, notes: ["난이도가 부담되면 건너뛰어도 됨"] },
      { title: "코사카 와카모의 침묵과 축연", type: "event", imp: 1, notes: ["난이도가 부담되면 건너뛰어도 됨"] }
    ]
  },
  {
    id: "main2",
    name: "③ 메인만 (1부 최종장 이후, 데카그라마톤 포함)",
    short: "메인 이후",
    desc: "1부 최종장 이후는 별개의 이야기로, 따로 봐도 됩니다. KR·글로벌 기준, Vol.6 흘러간 시간들의 오라토리오 3장까지.",
    items: [
      { title: "상세 순서는 원글 이미지 참고 — data.js에 추가해 주세요", type: "todo", imp: 0 },
      { title: "Vol.6 흘러간 시간들의 오라토리오 3장", type: "main", imp: 3, notes: ["원글 기준 최신 (05/30)"] }
    ]
  },
  {
    id: "deca",
    name: "④ 데카그라마톤 (1부 최종장 이후)",
    short: "데카그라마톤",
    desc: "데카그라마톤 관련 스토리를 모아 보는 순서입니다.",
    items: [
      { title: "Vol.2 시계태엽 꽃의 파반느 편 1장", type: "main", imp: 3, notes: ["먼저 보고 올 것"] },
      { title: "Vol.2 시계태엽 꽃의 파반느 편 2장", type: "main", imp: 3, notes: ["먼저 보고 올 것"] },
      { title: "최종편 (1부 최종장)", type: "final", imp: 3, notes: ["먼저 보고 올 것"] },
      { title: "상세 순서는 원글 이미지 참고 — data.js에 추가해 주세요", type: "todo", imp: 0, notes: ["중간에 코드박스 이벤트를 보면 3장 이후 이해가 쉬움 (3장 추천)"] }
    ]
  },
  {
    id: "event2",
    name: "⑤ 이벤트 포함 (2부 프롤로그까지)",
    short: "2부 프롤로그",
    desc: "깊게 보실 분께. 1부 최종장 이후 이벤트는 중요한 것을 제외하면 대부분 메인 챕터 사이 아무 때나 봐도 됩니다. 예: '수토끼'·'숨겨진 유산'은 Vol.4 2장 ~ Vol.5 1장 사이.",
    items: [
      { title: "상세 순서는 원글 이미지 참고 — data.js에 추가해 주세요", type: "todo", imp: 0 },
      { title: "Vol.4 2장", type: "main", imp: 3 },
      { title: "수토끼", type: "event", imp: 2, notes: ["Vol.4 2장 ~ Vol.5 1장 사이"] },
      { title: "숨겨진 유산", type: "event", imp: 2, notes: ["Vol.4 2장 ~ Vol.5 1장 사이"] },
      { title: "Vol.5 1장", type: "main", imp: 3 }
    ]
  }
];

window.REFERENCES = [
  { title: "프로젝트MX 갤러리 — 뉴비용 스토리 순서 가이드", url: "https://gall.dcinside.com/mgallery/board/view/?id=projectmx&no=10529978" },
  { title: "note.com (dapper_worm1069) — 읽는 순서·공개 순서 정리 (일섭 스포 주의)", url: "https://note.com/dapper_worm1069" },
  { title: "kamigame.jp — 블루 아카이브 추천 스토리 순서·공개 순서 (일섭 스포 주의)", url: "https://kamigame.jp/" }
];
