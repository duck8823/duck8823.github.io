// App shell: chrome bar, tweaks, cursor, scroll reveal, i18n + theme
const { useState, useEffect, useRef } = React;

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function formatClock(d) {
  const pad = n => String(n).padStart(2, "0");
  return `JST ${d.getFullYear()}.${pad(d.getMonth()+1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function Chrome({ lang, setLang, theme, setTheme, tweaksOn, setTweaksOn }) {
  const now = useClock();
  return (
    <div className="chrome">
      <div className="chrome-inner">
        <div className="chrome-left">
          <div className="chrome-dots"><span/><span/><span/></div>
          <span className="chrome-path"><span className="tilde">~/</span>duck8823/portfolio — zsh</span>
        </div>
        <div className="chrome-center">[ duck8823@portfolio : node healthy : uptime ok ]</div>
        <div className="chrome-right">
          <span className="chrome-time">{formatClock(now)}</span>
          <div className="tweaks-seg">
            <button className={lang === "ja" ? "active" : ""} onClick={() => setLang("ja")} data-hover>JA</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} data-hover>EN</button>
          </div>
          <button className="chrome-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")} data-hover>
            {theme === "light" ? "◐ dark" : "◑ light"}
          </button>
        </div>
      </div>
    </div>
  );
}

function TweaksPanel({ open, lang, setLang, theme, setTheme, onClose }) {
  if (!open) return null;
  return (
    <div className="tweaks-panel open">
      <div className="tweaks-hdr">
        <span>// tweaks</span>
        <span style={{cursor:"pointer"}} onClick={onClose} data-hover>×</span>
      </div>
      <div className="tweaks-row">
        <label>theme</label>
        <div className="tweaks-seg">
          <button className={theme === "light" ? "active" : ""} onClick={() => setTheme("light")}>light</button>
          <button className={theme === "dark" ? "active" : ""} onClick={() => setTheme("dark")}>dark</button>
        </div>
      </div>
      <div className="tweaks-row">
        <label>language</label>
        <div className="tweaks-seg">
          <button className={lang === "ja" ? "active" : ""} onClick={() => setLang("ja")}>JA</button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const defaults = window.__TWEAK_DEFAULTS || { theme: "light", lang: "ja" };
  const [theme, setTheme] = useState(defaults.theme || "light");
  const [lang, setLang] = useState(defaults.lang || "ja");
  const [tweaksOn, setTweaksOn] = useState(false);
  const t = window.DATA[lang];

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  // Apply lang
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  // Persist tweak changes back to disk
  const persist = (edits) => {
    window.parent?.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
  };

  // Edit mode protocol
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setTweaksOn(true);
      if (d.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", onMsg);
    // now announce availability
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const changeTheme = (v) => { setTheme(v); persist({ theme: v }); };
  const changeLang  = (v) => { setLang(v);  persist({ lang: v }); };

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) en.target.classList.add("in");
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  // Custom cursor
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`; };
    const raf = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    };
    window.addEventListener("mousemove", move);
    const handle = requestAnimationFrame(raf);

    const onOver = (e) => {
      if (e.target.closest("a, button, [data-hover]")) document.body.classList.add("hovering");
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, [data-hover]")) document.body.classList.remove("hovering");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(handle);
    };
  }, []);

  return (
    <>
      <Chrome lang={lang} setLang={changeLang} theme={theme} setTheme={changeTheme} tweaksOn={tweaksOn} setTweaksOn={setTweaksOn} />
      <div className="wrap">
        <Hero t={t} lang={lang} />
        <Now t={t} />
        <About t={t} />
        <Skills t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Apps t={t} />
        <Pets t={t} />
        <Talks t={t} />
        <Blog t={t} />
        <Footer t={t} />
      </div>
      <TweaksPanel open={tweaksOn} lang={lang} setLang={changeLang} theme={theme} setTheme={changeTheme} onClose={() => setTweaksOn(false)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
