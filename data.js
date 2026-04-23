// Bilingual content + data
window.DATA = {
  ja: {
    boot: [
      { t: "login", body: "duck8823@portfolio ~ login: last login 2026.04.23 09:12 JST" },
      { t: "cmd", body: "$ whoami" },
      { t: "ok",  body: "→ Shunsuke Maeda / 前田隼輔" },
      { t: "cmd", body: "$ cat role.txt" },
      { t: "ok",  body: "→ Software Engineer · CI/CD · DevOps · 基盤" },
      { t: "cmd", body: "$ ls ~/life" },
      { t: "dim", body: "  dog/okaka.inu  cat/tunamayo.neko  hobby/flutter  work/ci-cd" },
      { t: "cmd", body: "$ ./start_portfolio.sh" },
      { t: "ok",  body: "→ [ok] rendering sections..." }
    ],
    nav: { about: "about", work: "work", projects: "projects", apps: "apps", talks: "writing", contact: "contact" },
    now: { label: "// now", items: [
      { k: "Working on", v: "フリーランスでぼちぼちやってます。<em>お仕事のご相談どうぞ</em>。" },
      { k: "Building",   v: "Flutter アプリ「わんぽ」「カロリズム」を Claude Code と一緒に開発" },
      { k: "Living with", v: "犬の<em>おかか</em>と猫の<em>ツナマヨ</em>、東京都内" }
    ]},
    intro: {
      label: "/ intro",
      body: "CI/CD とか開発基盤が好きで、CI サーバーを<em>自作するくらい</em>には好きです。必要なら何でもやります。趣味では Flutter でアプリを作り、犬の<em>おかか</em>と猫の<em>ツナマヨ</em>と暮らしています。",
      meta: [
        { k: "based", v: "Tokyo, JP" },
        { k: "role",  v: "Software Engineer" },
        { k: "focus", v: "CI/CD · Platform" },
        { k: "status", v: "Freelance · available" }
      ]
    },
    about: {
      kicker: "01 — about",
      title: "これまでとこれから",
      en: "Background",
      body: "DeNA の SWET で CI/CD 基盤やテスト自動化に携わったあたりから、開発プロセスや基盤寄りの仕事が多くなりました。エス・エム・エスではレガシーシステムのリプレイス、朝日新聞社では落ちているボールを拾いながらマイクロサービスの設計・開発をやっていました。基盤が軸ですが、必要なら何でもやるタイプです。最近は Claude Code などを使って AI と一緒に個人開発もしています。これからはフリーランスで、開発基盤や DevEx、AI と開発の交わり方を整えるような仕事をやっていきたいと思っています。"
    },
    skillsKicker: "02 — stack",
    skillsTitle: "使っている道具",
    skillsEn: "Stack",
    xp: {
      kicker: "03 — work",
      title: "これまでの仕事",
      en: "Experience",
      items: [
        { from: "2021", to: "2025", org: "朝日新聞社",  desc: "レガシーシステムの不具合調査や業務システムの開発・運用、マイクロサービスの設計・開発など、いろいろやっていました。", tags: ["Go","AWS","Terraform","ProtocolBuffers"] },
        { from: "2018", to: "2021", org: "エス・エム・エス", desc: "ヘルスケア SaaS のレガシーシステムリプレイスをしていました。", tags: ["Kotlin","Java","PostgreSQL"] },
        { from: "2017", to: "2018", org: "DeNA SWET",   desc: "CI/CD 環境の改善や、テストツールの検証・開発をしていました。", tags: ["CI/CD","iOS","Danger"] },
        { from: "2013", to: "2017", org: "日本ソフトウェアマネジメント", desc: "ウェブアプリを作っていました。", tags: ["Java","Perl"] }
      ]
    },
    proj: {
      kicker: "04 — oss",
      title: "作ったもの",
      en: "Projects",
      items: [
        { name: "traceary",          lang: "Go",         color: "#00ADD8", stars: "WIP", featured: true, desc: "AI エージェント（Claude Code / Codex / Gemini）のセッションログと監査証跡をローカルファーストに記録・検索する CLI ＆ MCP サーバー。今いちばん力を入れて開発中。", url: "https://github.com/duck8823/traceary" },
        { name: "duci",              lang: "Go",         color: "#00ADD8", stars: 74, desc: "CI が好きすぎて自作した Docker ベースの CI サーバー。GitHub Webhook でコンテナ上のビルドを回す。", url: "https://github.com/duck8823/duci" },
        { name: "Slack-RTM-Bot",     lang: "Perl",       color: "#0298c3", stars: 18, desc: "Slack RTM API で Bot を作るための Perl モジュール。", url: "https://github.com/duck8823/Slack-RTM-Bot" },
        { name: "danger-slack",      lang: "Ruby",       color: "#CC342D", stars: 11, desc: "Danger の結果を Slack に通知するプラグイン。", url: "https://github.com/duck8823/danger-slack" }
      ]
    },
    apps: {
      kicker: "05 — apps",
      title: "Flutter で出したアプリ",
      en: "Shipped apps",
      items: [
        { name: "わんぽ", tag: "DOG WALK TRACKER", img: "https://duck8823.github.io/wampo/images/ja/1_home.png",   feats: ["GPS","雨雲レーダー","ウィジェット","HealthKit"], desc: "おかかのためのお散歩管理アプリ。雨雲レーダーと GPS ログ、ホーム画面のウィジェットで次の散歩を逃さない。", url: "https://duck8823.github.io/wampo/index_ja.html" },
        { name: "カロリズム", tag: "CALORIE BUDGET",   img: "https://duck8823.github.io/calorithm/images/ja/daily.png", feats: ["収支の可視化","AI推定","HealthKit","ウィジェット"], desc: "摂取カロリーと消費カロリーの収支を一目で見えるカロリー家計簿。写真から AI が自動で推定し、HealthKit と連携して消費を集計。", url: "https://duck8823.github.io/calorithm/index_ja.html" }
      ]
    },
    talks: {
      kicker: "06 — talks",
      title: "登壇・寄稿",
      en: "Talks & Writing",
      items: [
        { y: "2022",    t: "detekt で任意の条件で警告させる", v: "Kotlin Fest 2022 LT", url: "https://speakerdeck.com/duck8823/jing-de-jie-xi-turu-detekt-deren-yi-falsetiao-jian-dejing-gao-saseru" },
        { y: "2019",    t: "Golang で Docker ベースの CI を作る", v: "Go Conference 2019 Spring", url: "https://speakerdeck.com/duck8823/golangdedockerbesufalseciwozuo-ru" },
        { y: "2019",    t: "私と OSS 活動と Perl", v: "YAPC::Tokyo 2019", url: "https://www.slideshare.net/slideshow/ossperl/129306353" },
        { y: "2018",    t: "外部環境への依存をテストする", v: "golang.tokyo", url: "https://www.slideshare.net/ShunsukeMaeda/ss-110757746" },
        { y: "2018",    t: "Android で利用できるデバイスファームの紹介", v: "DroidKaigi 2018", url: "https://www.slideshare.net/slideshow/droidkaigidevicefarm/87573170" },
        { y: "2017",    t: "iOS で利用できるデバイスファームのメリット・デメリット", v: "iOSDC 2017", url: "https://www.slideshare.net/slideshow/ios-79834769/79834769" },
        { y: "Article", t: "朝日新聞デジタルのデータアーキテクチャ", v: "Findy Tools", url: "https://findy-tools.io/companies/asashi/25/35" }
      ]
    },
    blog: {
      kicker: "07 — blog",
      title: "書いたもの",
      en: "Blog",
      more: "All posts ↗",
      moreUrl: "https://duck8823.hatenablog.com/archive",
      items: [
        { y: "2026.04", t: "AI エージェントの作業ログ、ちゃんと残してますか？", url: "https://duck8823.hatenablog.com/entry/2026/04/09/202627" },
        { y: "2026.03", t: "AI と個人開発する話", url: "https://duck8823.hatenablog.com/entry/2026/03/20/080436" },
        { y: "2020.08", t: "aibo 用にバーチャルウォールを作る", url: "https://duck8823.hatenablog.com/entry/2020/08/10/113844" },
        { y: "2020.07", t: "aibo と Nature Remo で電気を消してもらう", url: "https://duck8823.hatenablog.com/entry/2020/07/08/154740" },
        { y: "2018.09", t: "Golang で CI を作っている話", url: "https://duck8823.hatenablog.com/entry/2018/09/01/104130" },
        { y: "2018.05", t: "300 行弱のコードで簡易 CI サーバーを作った", url: "https://duck8823.hatenablog.com/entry/2018/05/06/174537" }
      ]
    },
    pets: {
      kicker: "08 — pets",
      title: "おかか & ツナマヨ",
      en: "Studio roommates",
      body: "プロジェクトマネージャー (おかか) とデバッグ担当 (ツナマヨ)。キーボードの上で寝るのが得意。"
    },
    contrib: {
      kicker: "09 — activity",
      title: "コミット活動",
      en: "Contributions",
      total: "commits in the last year"
    },
    footer: "made with ♥ in tokyo · 犬猫とコーヒーと CI と"
  },

  en: {
    boot: [
      { t: "login", body: "duck8823@portfolio ~ login: last login 2026.04.23 09:12 JST" },
      { t: "cmd", body: "$ whoami" },
      { t: "ok",  body: "→ Shunsuke Maeda / 前田隼輔" },
      { t: "cmd", body: "$ cat role.txt" },
      { t: "ok",  body: "→ Software Engineer · CI/CD · DevOps · Platform" },
      { t: "cmd", body: "$ ls ~/life" },
      { t: "dim", body: "  dog/okaka.inu  cat/tunamayo.neko  hobby/flutter  work/ci-cd" },
      { t: "cmd", body: "$ ./start_portfolio.sh" },
      { t: "ok",  body: "→ [ok] rendering sections..." }
    ],
    nav: { about: "about", work: "work", projects: "projects", apps: "apps", talks: "writing", contact: "contact" },
    now: { label: "// now", items: [
      { k: "Working on", v: "Freelancing at a steady pace — <em>open to inquiries</em>." },
      { k: "Building",   v: "Flutter apps with Claude Code as my pair" },
      { k: "Living with", v: "<em>Okaka</em> the dog and <em>Tunamayo</em> the cat, in Tokyo" }
    ]},
    intro: {
      label: "/ intro",
      body: "I love CI/CD and developer platforms — enough to have <em>built my own CI server</em>. Pragmatic generalist who does whatever the team needs. In my spare time I ship Flutter apps, and I live with <em>Okaka</em> the dog and <em>Tunamayo</em> the cat.",
      meta: [
        { k: "based", v: "Tokyo, JP" },
        { k: "role",  v: "Software Engineer" },
        { k: "focus", v: "CI/CD · Platform" },
        { k: "status", v: "Freelance · available" }
      ]
    },
    about: {
      kicker: "01 — about",
      title: "Where I've been",
      en: "About",
      body: "Somewhere around DeNA SWET — CI/CD platforms and test automation — I drifted into platform and developer-experience work, and mostly stayed there. Legacy replatforming of a healthcare SaaS at SMS, then microservices design & delivery at The Asahi Shimbun while picking up whatever balls were rolling past. Platforms are my anchor, but I'll do whatever the work needs. These days I also build personal apps alongside AI — mostly Claude Code. Freelancing from here on, I'd like to keep working on developer platforms, DevEx, and the seams where AI meets software delivery."
    },
    skillsKicker: "02 — stack",
    skillsTitle: "Tools I reach for",
    skillsEn: "Stack",
    xp: {
      kicker: "03 — work",
      title: "Where I've worked",
      en: "Experience",
      items: [
        { from: "2021", to: "2025", org: "The Asahi Shimbun", desc: "Legacy debugging, internal tools, microservice design & delivery — plus picking up whatever was needed.", tags: ["Go","AWS","Terraform","ProtocolBuffers"] },
        { from: "2018", to: "2021", org: "SMS Co., Ltd.", desc: "Replatformed a legacy healthcare SaaS.", tags: ["Kotlin","Java","PostgreSQL"] },
        { from: "2017", to: "2018", org: "DeNA SWET", desc: "CI/CD platform work and test-tooling evaluation.", tags: ["CI/CD","iOS","Danger"] },
        { from: "2013", to: "2017", org: "Nihon Software Management", desc: "Built web applications.", tags: ["Java","Perl"] }
      ]
    },
    proj: {
      kicker: "04 — oss",
      title: "Things I've built",
      en: "Projects",
      items: [
        { name: "traceary",          lang: "Go",         color: "#00ADD8", stars: "WIP", featured: true, desc: "Local-first CLI & MCP server that records and searches AI-agent session logs, command audits, and durable memory across Claude Code, Codex, and Gemini. My current main focus.", url: "https://github.com/duck8823/traceary" },
        { name: "duci",              lang: "Go",         color: "#00ADD8", stars: 74, desc: "A Docker-based CI server I wrote because I love CI this much. Webhook in, container build out.", url: "https://github.com/duck8823/duci" },
        { name: "Slack-RTM-Bot",     lang: "Perl",       color: "#0298c3", stars: 18, desc: "Perl module for building bots on Slack's RTM API.", url: "https://github.com/duck8823/Slack-RTM-Bot" },
        { name: "danger-slack",      lang: "Ruby",       color: "#CC342D", stars: 11, desc: "Danger plugin that posts PR review results into Slack.", url: "https://github.com/duck8823/danger-slack" }
      ]
    },
    apps: {
      kicker: "05 — apps",
      title: "Flutter apps I shipped",
      en: "Shipped apps",
      items: [
        { name: "Wampo",    tag: "DOG WALK TRACKER", img: "https://duck8823.github.io/wampo/images/ja/1_home.png",   feats: ["GPS","Rain radar","Widgets","HealthKit"], desc: "A walk tracker built for Okaka. GPS logs, rain radar, and home-screen widgets so you never miss the window.", url: "https://duck8823.github.io/wampo/" },
        { name: "Calorithm",tag: "CALORIE BUDGET",    img: "https://duck8823.github.io/calorithm/images/ja/daily.png", feats: ["Intake vs burn","AI estimate","HealthKit","Widgets"], desc: "A calorie ledger that shows intake vs burn at a glance. AI estimates from photos; HealthKit pulls in activity to complete the balance sheet.", url: "https://duck8823.github.io/calorithm/" }
      ]
    },
    talks: {
      kicker: "06 — talks",
      title: "Talks & Writing",
      en: "Talks & Writing",
      items: [
        { y: "2022",    t: "Custom rules in detekt", v: "Kotlin Fest 2022 LT", url: "https://speakerdeck.com/duck8823/jing-de-jie-xi-turu-detekt-deren-yi-falsetiao-jian-dejing-gao-saseru" },
        { y: "2019",    t: "Building a Docker-based CI in Go", v: "Go Conference 2019 Spring", url: "https://speakerdeck.com/duck8823/golangdedockerbesufalseciwozuo-ru" },
        { y: "2019",    t: "Me, OSS, and Perl", v: "YAPC::Tokyo 2019", url: "https://www.slideshare.net/slideshow/ossperl/129306353" },
        { y: "2018",    t: "Testing against external dependencies", v: "golang.tokyo", url: "https://www.slideshare.net/ShunsukeMaeda/ss-110757746" },
        { y: "2018",    t: "Device farms for Android", v: "DroidKaigi 2018", url: "https://www.slideshare.net/slideshow/droidkaigidevicefarm/87573170" },
        { y: "2017",    t: "iOS device farms: pros and cons", v: "iOSDC 2017", url: "https://www.slideshare.net/slideshow/ios-79834769/79834769" },
        { y: "Article", t: "Data architecture at Asahi Shimbun Digital", v: "Findy Tools", url: "https://findy-tools.io/companies/asashi/25/35" }
      ]
    },
    blog: {
      kicker: "07 — blog",
      title: "Writing",
      en: "Blog",
      more: "All posts ↗",
      moreUrl: "https://duck8823.hatenablog.com/archive",
      items: [
        { y: "2026.04", t: "Logging AI agent work, properly", url: "https://duck8823.hatenablog.com/entry/2026/04/09/202627" },
        { y: "2026.03", t: "Building alongside AI", url: "https://duck8823.hatenablog.com/entry/2026/03/20/080436" },
        { y: "2020.08", t: "A virtual wall for aibo", url: "https://duck8823.hatenablog.com/entry/2020/08/10/113844" },
        { y: "2020.07", t: "aibo + Nature Remo: turn off the lights", url: "https://duck8823.hatenablog.com/entry/2020/07/08/154740" },
        { y: "2018.09", t: "On building a CI in Go", url: "https://duck8823.hatenablog.com/entry/2018/09/01/104130" },
        { y: "2018.05", t: "A tiny CI server in <300 lines", url: "https://duck8823.hatenablog.com/entry/2018/05/06/174537" }
      ]
    },
    pets: {
      kicker: "08 — pets",
      title: "Okaka & Tunamayo",
      en: "Studio roommates",
      body: "Project manager (Okaka) and QA lead (Tunamayo). Both excel at sleeping on the keyboard."
    },
    contrib: {
      kicker: "09 — activity",
      title: "Commit activity",
      en: "Contributions",
      total: "commits in the last year"
    },
    footer: "made with ♥ in tokyo · dogs, cats, coffee, CI"
  }
};

// ── Skills (shared) ──
window.SKILLS = [
  { k: "lang",     v: "Go" },
  { k: "lang",     v: "Kotlin" },
  { k: "mobile",   v: "Flutter / Dart" },
  { k: "platform", v: "Docker" },
  { k: "platform", v: "CI/CD" },
  { k: "platform", v: "GitHub Actions" },
  { k: "cloud",    v: "AWS" },
  { k: "cloud",    v: "Terraform" },
  { k: "data",     v: "BigQuery" },
  { k: "data",     v: "PostgreSQL" },
  { k: "ai",       v: "Claude Code" },
  { k: "proto",    v: "Protocol Buffers" }
];

// ── Deterministic contribution heatmap (53 weeks × 7 days) ──
window.CONTRIB = (() => {
  const cells = [];
  let seed = 8823;
  const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let w = 0; w < 53; w++) {
    for (let d = 0; d < 7; d++) {
      // bias: more activity in recent weeks and on weekdays
      const recency = w / 53;
      const weekday = d >= 1 && d <= 5 ? 1 : 0.4;
      const base = rand() * 0.7 + recency * 0.3;
      let level;
      const r = base * weekday;
      if (r < 0.35) level = 0;
      else if (r < 0.55) level = 1;
      else if (r < 0.75) level = 2;
      else if (r < 0.9)  level = 3;
      else               level = 4;
      cells.push(level);
    }
  }
  // weekends slightly higher for hobby commits — add a little pulse
  return cells;
})();
