import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.png';
import './home.css';

const roles = ['UI/UX Designer', 'Full-Stack Developer', 'Brand Creator', 'Digital Storyteller'];

export function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero__grid" />
      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__eyebrow">Available for work ✦</span>
          <h1 className="hero__name">
            Rhose An<br />
            <span className="hero__name--outline">Raganit</span>
          </h1>
          <div className="hero__role-wrapper">
            <span className="hero__role-prefix">I'm a </span>
            <span className={`hero__role ${fade ? 'hero__role--visible' : 'hero__role--hidden'}`}>
              {roles[roleIndex]}
            </span>
          </div>
          <p className="hero__bio">
            Design-first developer who builds beautiful, functional web experiences —
            from wireframe to deployment. I manage brands, craft interfaces, and write
            code that works as good as it looks.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="hero__btn hero__btn--primary">View Projects</Link>
            <a href="#contact" className="hero__btn hero__btn--ghost">Contact Me</a>
          </div>
          <div className="hero__contacts" id="contact">
            <a href="mailto:rhoseanperezraganit@gmail.com" className="hero__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              rhoseanperezraganit@gmail.com
            </a>
            <a href="tel:09161121859" className="hero__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              09161121859
            </a>
            <a href="https://www.facebook.com/ro4st2k" target="_blank" rel="noopener noreferrer" className="hero__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              facebook.com/ro4st2k
            </a>
          </div>
        </div>
        <div className="hero__image-wrapper">
          <div className="hero__image-ring" />
          <img src={profileImg} alt="Rhose An Raganit" className="hero__image" />
          <div className="hero__image-badge">
            <span className="hero__badge-dot" />
            Open to opportunities
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
