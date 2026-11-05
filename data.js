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
      { k: "Working on", v: "Go のバックエンド、クラウド基盤、CI/CD を中心に活動中。<em>業務委託のご相談どうぞ</em>。" },
      { k: "Building",   v: "Flutter アプリ「わんぽ」「カロリズム」を公開・運用。カロリズムはアプリ内課金にも対応" },
      { k: "Living with", v: "犬の<em>おかか</em>と猫の<em>ツナマヨ</em>、東京都内" }
    ]},
    intro: {
      label: "/ intro",
      body: "Go のバックエンド、AWS・Terraform によるクラウド基盤、CI/CD を、設計から実装・運用まで担当します。CI サーバーを<em>自作するくらい</em>開発基盤が好きです。個人では Flutter アプリを公開・運用し、犬の<em>おかか</em>と猫の<em>ツナマヨ</em>と暮らしています。",
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
      body: "事業会社の開発基盤チーム で CI/CD 基盤やテスト自動化、ヘルスケアSaaS企業で Kotlin によるレガシーシステムのリプレイス、メディア企業で Go のマイクロサービス開発を経験しました。現在はフリーランスとして、バックエンド・クラウド基盤の設計と実装を担当しています。LLM を使った文書の構造化・条件照合 PoC では、要件整理から実装・評価まで経験しました。基盤が軸ですが、必要なら画面や運用まで手を動かします。個人開発では、Claude Code や Codex を使いながら Flutter アプリの公開後の改善も続けています。"
    },
    skillsKicker: "02 — stack",
    skillsTitle: "使っている道具",
    skillsEn: "Stack",
    xp: {
      kicker: "03 — work",
      title: "これまでの仕事",
      en: "Experience",
      items: [
        { from: "2025", to: "現在", kind: "contract", duration: "継続中", org: "業務委託：バックエンド・クラウド基盤", desc: "Go・AWS・Terraform を用いた基盤の設計・実装・テスト・運用を担当。通知配信、データ連携・移行、業務 UI の再構築に携わり、API と画面の実装、監視・運用手順の整備まで進めています。", tags: ["Go","AWS","Terraform","TypeScript","React","CI/CD"] },
        { from: "2026", to: "2026", kind: "contract", duration: "PoC", org: "業務委託：LLM 活用 PoC", desc: "業務文書の自由記述を構造化し、入力データと条件を照合する PoC の主実装を担当。Python による設計・実装、通常ロジックと LLM 処理の分離、構造化出力の検証・再試行、評価・改善まで取り組みました。", tags: ["Python","LLM","PoC","構造化出力"] },
        { from: "2021", to: "2025", org: "メディア企業",  desc: "レガシーシステムの不具合調査や業務システムの開発・運用、マイクロサービスの設計・開発など、いろいろやっていました。", tags: ["Go","AWS","Terraform","ProtocolBuffers"] },
        { from: "2018", to: "2021", org: "ヘルスケアSaaS企業", desc: "ヘルスケア SaaS のレガシーシステムリプレイスをしていました。", tags: ["Kotlin","Java","PostgreSQL"] },
        { from: "2017", to: "2018", org: "Internet services company",   desc: "CI/CD 環境の改善や、テストツールの検証・開発をしていました。", tags: ["CI/CD","iOS","Danger"] },
        { from: "2013", to: "2017", org: "システム開発会社", desc: "ウェブアプリを作っていました。", tags: ["Java","Perl"] }
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
        { name: "わんぽ", tag: "DOG WALK TRACKER", img: "images/apps/wampo-app-store-20261105.jpg", feats: ["GPS","雨雲レーダー","Apple Watch","Live Activity"], desc: "愛犬との散歩を記録・振り返る Flutter アプリ。GPS ルート、天気、写真や日々の記録をまとめ、Apple Watch や Live Activity とも連携。企画・実装からストア公開後の改善・運用まで継続しています。", url: "https://duck8823.github.io/wampo/index_ja.html" },
        { name: "カロリズム", tag: "CALORIE BUDGET", img: "images/apps/calorithm-app-store-20261105.jpg", feats: ["収支の可視化","AI推定","HealthKit","アプリ内課金"], desc: "摂取・消費カロリーの収支を記録し、グラフやふりかえりで確認する Flutter アプリ。AI 推定と HealthKit 連携に加え、有料プランのアプリ内課金を実装。企画・実装・ストア公開・継続改善まで担当しています。", url: "https://duck8823.github.io/calorithm/index_ja.html" }
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
      { k: "Working on", v: "Go backends, cloud infrastructure, and CI/CD — <em>open to contract inquiries</em>." },
      { k: "Building",   v: "Shipping and maintaining Wampo and Calorithm in Flutter; Calorithm includes in-app purchases" },
      { k: "Living with", v: "<em>Okaka</em> the dog and <em>Tunamayo</em> the cat, in Tokyo" }
    ]},
    intro: {
      label: "/ intro",
      body: "I design, implement, and operate Go backends, AWS infrastructure with Terraform, and CI/CD pipelines. I love developer platforms enough to have <em>built my own CI server</em>. I also ship and maintain Flutter apps, and live with <em>Okaka</em> the dog and <em>Tunamayo</em> the cat.",
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
      body: "My background spans CI/CD and test automation at Internet services company, a legacy-to-Kotlin migration at a healthcare SaaS provider, and Go microservices at Media company. As a freelancer, I work on backends and cloud infrastructure. I have also taken an LLM-assisted document structuring and condition-matching PoC from requirements through implementation and evaluation. Platforms are my anchor, but I also implement interfaces and operational tooling when needed. In personal development, I use Claude Code and Codex while continuing to improve my published Flutter apps."
    },
    skillsKicker: "02 — stack",
    skillsTitle: "Tools I reach for",
    skillsEn: "Stack",
    xp: {
      kicker: "03 — work",
      title: "Where I've worked",
      en: "Experience",
      items: [
        { from: "2025", to: "present", kind: "contract", duration: "ongoing", org: "Contract: backend & cloud infrastructure", desc: "Design, implementation, testing, and operation of Go/AWS/Terraform-based systems. Work spans notification delivery, data integration and migration, and rebuilding internal interfaces, including APIs, frontend implementation, monitoring, and operational documentation.", tags: ["Go","AWS","Terraform","TypeScript","React","CI/CD"] },
        { from: "2026", to: "2026", kind: "contract", duration: "PoC", org: "Contract: LLM-assisted PoC", desc: "Primary implementation of a PoC that structures free-text business documents and matches conditions against input data. Designed and implemented the Python processing, separated deterministic logic from LLM processing, and handled output validation, retries, evaluation, and refinement.", tags: ["Python","LLM","PoC","Structured output"] },
        { from: "2021", to: "2025", org: "Media company", desc: "Legacy debugging, internal tools, microservice design & delivery — plus picking up whatever was needed.", tags: ["Go","AWS","Terraform","ProtocolBuffers"] },
        { from: "2018", to: "2021", org: "Healthcare SaaS provider", desc: "Replatformed a legacy healthcare SaaS.", tags: ["Kotlin","Java","PostgreSQL"] },
        { from: "2017", to: "2018", org: "Internet services company", desc: "CI/CD platform work and test-tooling evaluation.", tags: ["CI/CD","iOS","Danger"] },
        { from: "2013", to: "2017", org: "Software development company", desc: "Built web applications.", tags: ["Java","Perl"] }
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
        { name: "Wampo", tag: "DOG WALK TRACKER", img: "images/apps/wampo-app-store-20261105.jpg", feats: ["GPS","Rain radar","Apple Watch","Live Activity"], desc: "A Flutter app for recording and reviewing walks with your dog. Combines GPS routes, weather, photos, and daily observations, with Apple Watch and Live Activity support. I handle planning, implementation, store publication, and ongoing improvements and operation.", url: "https://duck8823.github.io/wampo/" },
        { name: "Calorithm", tag: "CALORIE BUDGET", img: "images/apps/calorithm-app-store-20261105.jpg", feats: ["Intake vs burn","AI estimate","HealthKit","In-app purchases"], desc: "A Flutter app for tracking calorie intake and expenditure through charts and reflections. Includes AI estimation, HealthKit integration, and in-app purchases for a paid plan. I handle planning, implementation, store publication, and ongoing improvements.", url: "https://duck8823.github.io/calorithm/" }
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
  { k: "ai",       v: "Codex" },
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
