import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function FloatingPetals() {
  const petals = ["🌸", "🌷", "💗", "✿", "🦋"];

  return (
    <div className="petal-layer" aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          className="falling-petal"
          key={i}
          style={{
            left: `${(i * 37 + 7) % 100}%`,
            animationDelay: `${(i % 8) * 1.4}s`,
            animationDuration: `${9 + (i % 5) * 2}s`,
            fontSize: `${14 + (i % 4) * 5}px`,
          }}
        >
          {petals[i % petals.length]}
        </span>
      ))}
    </div>
  );
}

function MagicalCursor() {
  useEffect(() => {
    const symbols = ["♡", "✧", "✨", "💗"];
    let lastSparkle = 0;

    const handleMouseMove = (event) => {
      const now = Date.now();

      if (now - lastSparkle < 100 || Math.random() > 0.45) {
        return;
      }

      lastSparkle = now;

      const sparkle = document.createElement("span");
      sparkle.className = "cursor-sparkle";
      sparkle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      sparkle.style.left = `${event.clientX}px`;
      sparkle.style.top = `${event.clientY}px`;

      document.body.appendChild(sparkle);

      window.setTimeout(() => sparkle.remove(), 900);
    };

    const supportsHover = window.matchMedia("(hover: hover)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (supportsHover && !reduceMotion) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}

export default function App() {
  const [letterOpen, setLetterOpen] = useState(false);

  const projects = [
    {
      number: "♡ 01",
      title: "Little Dreams",
      description: "Big dreams begin with little steps.",
      icon: "🌷",
    },
    {
      number: "♡ 02",
      title: "My Creative World",
      description: "A little space for imagination and ideas.",
      icon: "🎨",
    },
    {
      number: "♡ 03",
      title: "Future Adventures",
      description: "Beautiful things are waiting to happen.",
      icon: "🌙",
    },
  ];

  return (
    <main className="cute-world">
      <MagicalCursor />
      <FloatingPetals />

      {/* Music Player */}
      <div className="music-player">
        <div className="music-cover">🎧</div>

        <div className="music-info">
          <span className="music-label">NOW PLAYING ♡</span>
          <h3>Parano</h3>
          <p>Frozy · DDB</p>
        </div>

        <a
          className="music-play"
          href="https://www.youtube.com/watch?v=18tS9T-jqiw"
          target="_blank"
          rel="noreferrer"
          aria-label="Listen to Parano on YouTube"
          title="Listen to Parano"
        >
          ▶
        </a>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          nirupama<span>♡</span>
        </a>

        <div className="nav-links">
          <a href="#about">MY WORLD</a>
          <a href="#projects">DREAMS</a>
          <a href="#letter">A LITTLE NOTE</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="floating flower flower-one">🌸</div>
        <div className="floating flower flower-two">🦋</div>
        <div className="floating flower flower-three">✿</div>
        <div className="floating flower flower-four">💗</div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="eyebrow">♡ A LITTLE WORLD OF HER OWN ♡</p>

          <h1>
            A little world
            <br />
            called <span>Nirupama.</span>
          </h1>

          <p className="hero-description">
            Soft dreams, a beautiful heart,
            <br />
            and a thousand little things to love. 🌷
          </p>

          <a href="#about" className="cute-button">
            Come inside <span>♡</span>
          </a>
        </motion.div>

        {/* Bubu and Dudu */}
        <motion.div
          className="mascot-garden"
          animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <div className="mascot-card">
            <div className="mascot-ears">
              <span></span>
              <span></span>
            </div>

            <div className="mascot-face bear">
              <span className="eye eye-left"></span>
              <span className="eye eye-right"></span>
              <span className="blush blush-left"></span>
              <span className="blush blush-right"></span>
              <span className="nose"></span>
              <span className="mouth"></span>
            </div>

            <div className="mascot-caption">Bubu 🧸</div>
          </div>

          <div className="mascot-heart">♡</div>

          <div className="mascot-card panda-card">
            <div className="panda-ears">
              <span></span>
              <span></span>
            </div>

            <div className="mascot-face panda">
              <span className="eye eye-left"></span>
              <span className="eye eye-right"></span>
              <span className="blush blush-left"></span>
              <span className="blush blush-right"></span>
              <span className="nose"></span>
              <span className="mouth"></span>
            </div>

            <div className="mascot-caption">Dudu 🐼</div>
          </div>
        </motion.div>

        <div className="hero-bottom">
          made with a little love & lots of daydreams
          <span>♡</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <p className="section-label">♡ 01 — A LITTLE ABOUT ME</p>

        <div className="about-grid">
          <div>
            <h2>
              Just a girl
              <br />
              with a <span>universe</span>
              <br />
              inside her. ✨
            </h2>
          </div>

          <div className="about-note">
            <span className="note-flower">🌼</span>

            <p>
              Hello, I'm Nirupama!
              <br />
              <br />
              A student, a dreamer, and a girl with so many little
              things to discover. This is my own tiny corner of the
              internet, where my dreams, ideas, creativity, and
              favourite moments can live together.
              <br />
              <br />
              There's always something beautiful waiting to bloom. 🌷
            </p>

            <span className="note-signature">
              with love, Nirupama ♡
            </span>
          </div>
        </div>
      </section>

      {/* Dreams and Projects */}
      <section className="projects-section section" id="projects">
        <p className="section-label">♡ 02 — THINGS I DREAM ABOUT</p>

        <h2>
          My little collection
          <br />
          of <span>possibilities.</span>
        </h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card card-${index + 1}`}
              key={project.number}
              whileHover={{ y: -8, rotate: index === 1 ? 1 : -1 }}
              transition={{ duration: 0.25 }}
            >
              <span className="project-number">{project.number}</span>

              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-heart">♡</span>
            </motion.article>
          ))}
        </div>

        <p className="coming-soon">
          more little adventures coming soon... 🌱
        </p>
      </section>

      {/* Secret Letter */}
      <section className="letter-section" id="letter">
        <p className="section-label">♡ 03 — A LITTLE NOTE</p>

        <h2>
          For the days
          <br />
          you need a little <span>magic.</span>
        </h2>

        <button
          type="button"
          className="secret-envelope"
          onClick={() => setLetterOpen((open) => !open)}
          aria-expanded={letterOpen}
        >
          💌
          <span>
            {letterOpen
              ? "Close your little letter ♡"
              : "Tap to open your little surprise ♡"}
          </span>
        </button>

        {letterOpen && (
          <motion.div
            className="hidden-letter letter-open"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>A little letter for you, Nirupama ♡</h3>

            <p>
              If I could gift you one thing in this world, it would be
              the ability to see yourself through the eyes of the people
              who care about you. 💗
              <br />
              <br />
              Maybe then you'd understand how special you are. You
              deserve soft mornings, happy little moments, beautiful
              dreams, and a thousand reasons to smile.
              <br />
              <br />
              Whenever life feels a little too much, remember that you
              can always begin again. 🌷
              <br />
              <br />
              Keep blooming, little flower. Never stop being you. ♡
            </p>
          </motion.div>
        )}

        <div className="letter-text">
          Hey, you. ♡
          <br />
          <br />
          Remember that you don't have to have everything figured out
          today. You're allowed to grow slowly, change your mind, chase
          new dreams, and take life one little step at a time.
          <br />
          <br />
          The world is a little more colourful because you're in it.
          Never forget to save a little kindness for yourself. 🌷
        </div>

        <div className="letter-signature">
          with lots of love & a thousand tiny hearts ♡
        </div>

        <div className="letter-mascots">🧸 💗 🐼</div>
      </section>

      {/* Footer */}
      <footer className="cute-footer">
        <a href="#home" className="logo">
          nirupama<span>♡</span>
        </a>

        <p>a little world made of dreams and love 🌸</p>

        <a href="#home">back to the top ↑</a>

        <div className="footer-bottom">
          made with ♡ just for this little corner of the universe
        </div>
      </footer>
    </main>
  );
}
