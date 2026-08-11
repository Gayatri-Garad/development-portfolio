import React, { useEffect, useRef, useState } from "react";

const slidesData = [
  {
    header: "loan application",
    title: "Step 3 of 5",
    link: "#experience",
    cards: ["KYC verification", "Document upload", "Repayment schedule"],
    fill: "68%",
  },
  {
    header: "tech stack",
    title: "Skills",
    link: "#skills",
    cards: ["React Native (Expo)", "TypeScript, JavaScript", "Zustand, Redux Toolkit"],
    fill: "82%",
  },
  {
    header: "education",
    title: "Academics",
    link: "#education",
    cards: ["BCA — Chandigarh University", "CGPA 7.07 · 2024", "HSC 84% · SSC 70.40%"],
    fill: "70%",
  },
  {
    header: "my projects",
    title: "Featured work",
    link: "#projects",
    cards: ["Lending app — FlexiLoans", "Project two", "Project three"],
    fill: "75%",
  },
  {
    header: "contact me",
    title: "Let's connect",
    link: "#contact",
    cards: ["+91 9145305128", "garadgaytri09@gmail.com", "Pune, Maharashtra"],
    fill: "100%",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [cardStep, setCardStep] = useState(0); // konta card active zalay
  const phoneRef = useRef(null);

  useEffect(() => {
  setCardStep(0);
  const cardsInSlide = slidesData[current].cards.length;
  let step = 0;

  const cardTimer = setInterval(() => {
    step++;
    if (step <= cardsInSlide) {
      setCardStep(step);
    }
    if (step >= cardsInSlide) {
      clearInterval(cardTimer);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slidesData.length);
      }, 1500);
    }
  }, 1000);

  return () => clearInterval(cardTimer);
}, [current]);
  useEffect(() => {
    const handleMove = (e) => {
      if (!phoneRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * -14;
      phoneRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  const goToSection = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero" id="home">
      <div className="hero-left">
        <div className="dual-badge enter d1">
          <span className="mob">
            <svg className="icon" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></svg>
            Mobile
          </span>
          <span className="web">
            <svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="3" y1="12" x2="21" y2="12" /><path d="M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></svg>
            Web
          </span>
        </div>

        <div className="hero-name enter d2">
          Hi, I'm <span className="grad">Gayatri Vyavahare</span>
        </div>
        <div className="hero-role enter d3">React Native and React developer</div>
        <div className="hero-desc enter d4">
          I build cross-platform mobile apps and responsive web interfaces — from OTP-based
          auth flows to API-driven dynamic journeys, with clean state management and
          pixel-accurate UI.
        </div>

        <div className="btn-row enter d5">
          <a className="btn solid" href="#projects">
            <svg className="icon" viewBox="0 0 24 24" style={{ width: 15, height: 15, stroke: "#0b0f1a" }}>
              <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            View work
          </a>
          <a className="btn" href="/pdf/Gayatri-Vyavahare-Resume.pdf" download>
            <svg className="icon" viewBox="0 0 24 24" style={{ width: 15, height: 15 }}>
              <path d="M12 3v12m0 0l-4-4m4 4l4-4" /><path d="M4 19h16" />
            </svg>
            Resume
          </a>
        </div>
      </div>

      <div className="phone-wrap">
        <div className="phone" ref={phoneRef}>
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <div className="status-bar">
              <span>9:41</span>
              <div className="status-icons">
                <div className="signal-bars"><span></span><span></span><span></span><span></span></div>
              </div>
            </div>

            <div className="slides-wrap">
              {slidesData.map((slide, i) => (
                <div
                  key={i}
                  className={`slide ${i === current ? "active" : ""}`}
                  onClick={() => goToSection(slide.link)}
                  style={{ cursor: "pointer" }}
                  title={`Go to ${slide.link.replace("#", "")}`}
                >
                  <div className="app-header">{slide.header}</div>
                  <div className="app-title">{slide.title}</div>
                  {slide.cards.map((cardText, ci) => (
                    <div
                      key={ci}
                      className={`app-card ${i === current && ci < cardStep ? "active" : ""}`}
                    >
                      {cardText}
                      {i === current && ci < cardStep && (
                        <span className="app-check">
                          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        </span>
                      )}
                    </div>
                  ))}
                  <div style={{ marginTop: "auto" }}>
                    <div className="app-bar">
                      <div
                        className="app-bar-fill"
                        style={{
                          width:
                            i === current
                              ? `${(cardStep / slide.cards.length) * 100}%`
                              : "0%",
                          transition: "width 0.5s ease",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slide-dots">
              {slidesData.map((_, i) => (
                <span
                  key={i}
                  className={`sdot ${i === current ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(i);
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;