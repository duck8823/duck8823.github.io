// Remaining sections: about, skills, xp, projects, apps, talks, blog, pets, contrib, now, footer

function SectionHead({ kicker, title, en }) {
  return (
    <div className="section-head">
      <div className="section-kicker">{kicker}</div>
      <h2 className="section-title">
        <span className="en">{en}</span>
        {title}
      </h2>
    </div>
  );
}

function Now({ t }) {
  return (
    <section className="section reveal">
      <SectionHead kicker="00 — now" title={t.now.label.replace("//","").trim()} en="// now" />
      <div className="now">
        {t.now.items.map((i, idx) => (
          <div key={idx} className="now-item">
            <div className="k">{i.k}</div>
            <div className="v" dangerouslySetInnerHTML={{__html: i.v.replace(/<em>/g,'<span class="hl">').replace(/<\/em>/g,'</span>')}}/>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section className="section reveal" id="about">
      <SectionHead kicker={t.about.kicker} title={t.about.title} en={t.about.en} />
      <div style={{maxWidth: 760, fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.9, color: "var(--fg)"}}>
        {t.about.body}
      </div>
    </section>
  );
}

function Skills({ t }) {
  return (
    <section className="section reveal">
      <SectionHead kicker={t.skillsKicker} title={t.skillsTitle} en={t.skillsEn} />
      <div className="skills-grid">
        {window.SKILLS.map((s, i) => (
          <div key={i} className="skill-cell">
            <span className="k">{s.k}</span>
            <span className="v">{s.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience({ t }) {
  return (
    <section className="section reveal" id="work">
      <SectionHead kicker={t.xp.kicker} title={t.xp.title} en={t.xp.en} />
      <div className="xp-list">
        {t.xp.items.map((x, i) => {
          const dur = parseInt(x.to) - parseInt(x.from);
          return (
            <div key={i} className="xp">
              <div className="xp-when">
                <span className="bullet">●</span> {x.from} <span style={{color:"var(--rule-2)"}}>→</span> {x.to}
              </div>
              <div className="xp-body">
                <h3>{x.org}</h3>
                <p>{x.desc}</p>
                <div className="xp-tags">
                  {x.tags && x.tags.map((tg, j) => <span key={j} className="tag-xs">{tg}</span>)}
                </div>
              </div>
              <div className="xp-dur">~{dur}y</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Projects({ t }) {
  return (
    <section className="section reveal" id="projects">
      <SectionHead kicker={t.proj.kicker} title={t.proj.title} en={t.proj.en} />
      <div className="proj-grid">
        {t.proj.items.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener"
             className={"proj" + (p.featured ? " proj-featured" : "")} data-hover>
            <div className="proj-hdr">
              <div className="proj-name">
                <span className="slash">~/</span>{p.name}
                {p.featured && <span className="proj-badge">◉ now focused</span>}
              </div>
              <div className="proj-stars">{typeof p.stars === "number" ? `★ ${p.stars}` : p.stars}</div>
            </div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-foot">
              <span className="proj-lang"><span className="dot" style={{background: p.color}}></span>{p.lang}</span>
              <span className="proj-link">github.com/duck8823/{p.name.toLowerCase()} ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Apps({ t }) {
  return (
    <section className="section reveal" id="apps">
      <SectionHead kicker={t.apps.kicker} title={t.apps.title} en={t.apps.en} />
      <div className="apps-grid">
        {t.apps.items.map((a, i) => (
          <a key={i} className="app-card" href={a.url} target="_blank" rel="noopener" data-hover>
            <div className="shot">
              <img src={a.img} alt={a.name} loading="lazy" onError={(e)=>{e.target.style.display='none'}}/>
            </div>
            <div className="body">
              <div className="tagline">{a.tag}</div>
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
              <div className="feats">
                {a.feats.map((f, j) => <span key={j} className="tag-xs">{f}</span>)}
              </div>
              <div className="cta">$ open →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Talks({ t }) {
  return (
    <section className="section reveal" id="talks">
      <SectionHead kicker={t.talks.kicker} title={t.talks.title} en={t.talks.en} />
      <div className="talks">
        {t.talks.items.map((k, i) => (
          <a key={i} className="talk" href={k.url} target="_blank" rel="noopener" data-hover>
            <div className="talk-year">{k.y}</div>
            <div>
              <h4>{k.t}</h4>
              <div className="venue">{k.v}</div>
            </div>
            <div className="talk-arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Blog({ t }) {
  return (
    <section className="section reveal" id="blog">
      <div className="section-head">
        <div className="section-kicker">{t.blog.kicker}</div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:32}}>
          <h2 className="section-title">
            <span className="en">{t.blog.en}</span>
            {t.blog.title}
          </h2>
          <a href={t.blog.moreUrl} target="_blank" rel="noopener"
             style={{fontFamily:"var(--mono)", fontSize:11, color:"var(--fg-3)", letterSpacing:".08em", textTransform:"uppercase"}}
             data-hover>
            {t.blog.more}
          </a>
        </div>
      </div>
      <div className="talks">
        {t.blog.items.map((k, i) => (
          <a key={i} className="talk" href={k.url} target="_blank" rel="noopener" data-hover>
            <div className="talk-year">{k.y}</div>
            <div><h4>{k.t}</h4></div>
            <div className="talk-arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Pets({ t }) {
  // Real photos — okaka (shih tzu) and tunamayo (fluffy cat).
  // Layout: 12-col masonry, row height 90px. col×row chosen so each
  // tile's box matches the image's aspect ratio (fills cleanly, no crop of faces).
  const tiles = [
    { src: "images/duo.png",            alt: "okaka & tunamayo",     tag: "okaka × tunamayo",   col: 4, row: 4, pos: "center" },         // 1:1
    { src: "images/okaka-park.png",     alt: "okaka at the park",    tag: "okaka · park",       col: 3, row: 4, pos: "center" },         // 3:4
    { src: "images/tunamayo-bowl.png",  alt: "tunamayo in a bowl",   tag: "tunamayo · bowl",    col: 5, row: 4, pos: "center" },         // 4:3
    { src: "images/okaka-snow.png",     alt: "okaka in the snow",    tag: "okaka · snow day",   col: 3, row: 4, pos: "center" },         // 3:4
    { src: "images/tunamayo-mug.png",   alt: "tunamayo with a mug",  tag: "tunamayo · mug",     col: 3, row: 4, pos: "center" },         // 3:4 — vertical
    { src: "images/okaka-denim.png",    alt: "okaka in denim",       tag: "okaka · denim",      col: 6, row: 4, pos: "center" },         // 4:3 wider
    { src: "images/tunamayo-sleep.png", alt: "tunamayo sleeping",    tag: "tunamayo · asleep",  col: 4, row: 4, pos: "center" },         // 1:1
    { src: "images/okaka-run.png",      alt: "okaka running",        tag: "okaka · run",        col: 4, row: 4, pos: "center" },         // 1:1
    { src: "images/tunamayo-shelf.png", alt: "tunamayo on the shelf",tag: "tunamayo · shelf",   col: 4, row: 4, pos: "center" },         // 3:4
    { src: "images/okaka-nap.png",      alt: "okaka napping",        tag: "okaka · nap",        col: 6, row: 4, pos: "center" },         // 3:4 stretched
    { src: "images/tunamayo-sit.png",   alt: "tunamayo sitting",     tag: "tunamayo · sit",     col: 6, row: 4, pos: "center" },         // 1:1 stretched
  ];
  return (
    <section className="section reveal" id="pets">
      <SectionHead kicker={t.pets.kicker} title={t.pets.title} en={t.pets.en} />
      <p style={{fontFamily:"var(--serif)", fontSize:17, lineHeight:1.9, color:"var(--fg)", maxWidth:620, marginBottom:24}}>
        {t.pets.body}
      </p>
      <div className="pet-gallery">
        {tiles.map((tile, i) => (
          <div key={i} className="pet-tile"
               style={{gridColumn: `span ${tile.col}`, gridRow: `span ${tile.row}`}}
               data-tag={tile.tag}>
            <img src={tile.src} alt={tile.alt} loading="lazy" style={{objectPosition: tile.pos}}/>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({ t }) {
  const ascii =
`     ___          _
  __|   |_     __| |_   _  ___ _  __
 / _` + "`" + ` / _ \\  / _` + "`" + ` | | | |/ __| |/ /
| (_| | (_) || (_| | |_| | (__|   <
 \\__,_|\\___/  \\__,_|\\__,_|\\___|_|\\_\\
`;
  return (
    <footer className="footer">
      <div>
        <div>© 2026 Shunsuke Maeda (@duck8823)</div>
        <div style={{marginTop: 6, color:"var(--fg-3)"}}>{t.footer}</div>
        <div style={{marginTop: 10}}>
          <span style={{color:"var(--accent)"}}>●</span> system online · rendered with react + love
        </div>
      </div>
      <pre className="ascii">{ascii}</pre>
    </footer>
  );
}

Object.assign(window, { SectionHead, Now, About, Skills, Experience, Projects, Apps, Talks, Blog, Pets, Footer });
