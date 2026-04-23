// Hero + Terminal boot sequence
const { useState, useEffect, useRef } = React;

function TerminalBoot({ lines }) {
  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let cancelled = false;
    setVisible(0); setTyped("");
    async function run() {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const body = lines[i].body;
        // type each char quickly
        for (let c = 0; c <= body.length; c++) {
          if (cancelled) return;
          setTyped(body.slice(0, c));
          await new Promise(r => setTimeout(r, 8));
        }
        if (cancelled) return;
        setVisible(v => v + 1);
        setTyped("");
        await new Promise(r => setTimeout(r, 120));
      }
    }
    run();
    return () => { cancelled = true; };
  }, [lines]);

  return (
    <div className="hero-terminal" aria-hidden="true">
      {lines.slice(0, visible).map((l, i) => (
        <span key={i} className={`line ${l.t}`}>
          {l.body}
        </span>
      ))}
      {visible < lines.length && (
        <span className={`line ${lines[visible].t}`}>
          {typed}<span className="cursor-blink"></span>
        </span>
      )}
    </div>
  );
}

function Hero({ t, lang }) {
  return (
    <header className="hero">
      <TerminalBoot lines={t.boot} />

      <div className="hero-name-block">
        <h1 className="hero-name">
          {lang === "ja" ? (
            <>
              Shunsuke<br/>Maeda<span className="cursor-blink" style={{marginLeft:12}}></span>
              <span className="jp">前田 隼輔</span>
              <span className="duck">@duck8823 · ~/portfolio</span>
            </>
          ) : (
            <>
              Shunsuke<br/>Maeda<span className="cursor-blink" style={{marginLeft:12}}></span>
              <span className="jp">前田 隼輔 · Software Engineer</span>
              <span className="duck">@duck8823 · ~/portfolio</span>
            </>
          )}
        </h1>

        <div className="hero-pets">
          <div className="hero-pet-frame" data-name="duck8823" data-meta="HUMAN">
            <img src="images/avatar.jpg" alt="duck8823" loading="lazy"/>
          </div>
          <div className="hero-pet-row">
            <div className="hero-pet-frame" data-name="okaka.inu" data-meta="DOG · PM">
              <img src="images/okaka.jpg" alt="Okaka" loading="lazy"/>
            </div>
            <div className="hero-pet-frame" data-name="tunamayo.neko" data-meta="CAT · QA">
              <img src="images/tunamayo.jpg" alt="Tunamayo" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-intro reveal">
        <div className="hero-intro-label">{t.intro.label}</div>
        <div>
          <p className="hero-intro-body" dangerouslySetInnerHTML={{__html: t.intro.body}} />
          <div className="hero-socials">
            <a href="https://github.com/duck8823" target="_blank" rel="noopener" data-hover>
              <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              github
            </a>
            <a href="https://duck8823.hatenablog.com/" target="_blank" rel="noopener" data-hover>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <text x="12" y="18" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="20" fill="currentColor">B</text>
              </svg>
              hatena
            </a>
            <a href="https://speakerdeck.com/duck8823" target="_blank" rel="noopener" data-hover>
              <svg viewBox="0 0 24 24"><path d="M10.025 13.875H4.687a4.688 4.688 0 0 1 0-9.375h6.227a1.875 1.875 0 0 1 0 3.75H4.592a.937.937 0 1 0 0 1.875h5.337a4.687 4.687 0 1 1 0 9.375H1.875a1.875 1.875 0 0 1 0-3.75h8.15a.938.938 0 0 0 0-1.875z"/></svg>
              speakerdeck
            </a>
            <a href="https://www.slideshare.net/ShunsukeMaeda" target="_blank" rel="noopener" data-hover>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/></svg>
              slideshare
            </a>
            <a href="https://www.instagram.com/duck8823/" target="_blank" rel="noopener" data-hover>
              <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2 0 3.58-.07 4.85-.15 3.22-1.67 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2 0-3.58.07-4.85C2.27 3.97 3.79 2.42 7.05 2.27 8.32 2.21 8.7 2.2 12 2.2zm0 3.64a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.84a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
              instagram
            </a>
          </div>
        </div>
        <div className="hero-intro-meta">
          {t.intro.meta.map((m, i) => (
            <div key={i}>
              <span className="k">{m.k}</span>
              <span className="v">{(m.k === "status") ? <span className="hl">{m.v}</span> : m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { TerminalBoot, Hero });
