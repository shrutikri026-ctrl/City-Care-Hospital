import { Button } from "react-bootstrap";
import doctorImg from "../assets/doctor-hero.jpg";

function HeroSection({ onBookClick }) {
  return (
    <>
      <style>{`
        .hs-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 48px;
          background: #fff;
        }
        .hs-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hs-logo-icon {
          width: 36px; height: 36px;
          background: #0d6efd;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
        }
        .hs-logo-text {
          font-weight: 700; font-size: 19px; color: #111827;
        }
        .hs-logo-text span { color: #0d6efd; }
        .hs-nav-links {
          display: flex; gap: 34px; list-style: none; margin: 0; padding: 0;
        }
        .hs-nav-links li {
          font-size: 14.5px; color: #4b5563; cursor: pointer;
        }
        .hs-book-nav {
          background: #eaf2ff; color: #0d6efd; border: none;
          font-weight: 600; font-size: 14px;
          padding: 10px 20px; border-radius: 8px;
          display: flex; align-items: center; gap: 8px;
        }

        .hs-hero {
          position: relative;
          background: #eaf2ff;
          overflow: hidden;
          min-height: 640px;
          display: flex;
          align-items: center;
        }
        .hs-hero-text {
          position: relative;
          z-index: 2;
          width: 46%;
          padding: 60px 0 60px 48px;
        }
        .hs-eyebrow {
          font-size: 12.5px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #8fb8f5; margin-bottom: 18px;
        }
        .hs-headline {
          font-size: 52px; font-weight: 800; color: #111827;
          line-height: 1.1; margin: 0;
        }
        .hs-headline .accent {
          display: block;
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          font-weight: 500;
          color: #0d6efd;
        }
        .hs-body {
          font-size: 17px; color: #4b5563; line-height: 1.6;
          max-width: 420px; margin: 24px 0 34px;
        }
        .hs-cta-row { display: flex; align-items: center; gap: 20px; margin-bottom: 46px; }
        .hs-btn-primary {
          background: #fff; color: #111827; border: none;
          font-weight: 600; font-size: 15px;
          padding: 14px 26px; border-radius: 10px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.06);
        }
        .hs-btn-ghost {
          background: none; border: none;
          display: flex; align-items: center; gap: 10px;
          font-weight: 600; font-size: 15px; color: #111827;
        }
        .hs-btn-ghost .circle {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1.5px solid #0d6efd; color: #0d6efd;
          display: flex; align-items: center; justify-content: center;
        }
        .hs-trust {
          display: flex; align-items: center; gap: 12px;
        }
        .hs-trust .shield {
          width: 30px; height: 30px; border-radius: 50%;
          background: #eaf2ff; color: #0d6efd;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hs-trust strong { display: block; font-size: 14px; color: #111827; }
        .hs-trust span { font-size: 13px; color: #6b7280; }

        .hs-hero-image {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 62%;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 14%);
          mask-image: linear-gradient(to right, transparent 0%, black 14%);
        }
        .hs-hero-image img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .hs-float-card {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-30%);
          z-index: 3;
          background: #fff;
          border-radius: 14px;
          padding: 16px 20px;
          box-shadow: 0 14px 34px rgba(22,50,48,0.14);
          display: flex; align-items: center; gap: 12px;
          max-width: 260px;
        }
        .hs-float-card .icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: #eaf2ff; color: #0d6efd;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hs-float-card strong { display: block; font-size: 14px; color: #111827; }
        .hs-float-card span { font-size: 12.5px; color: #6b7280; }

        @media (max-width: 960px) {
          .hs-nav { padding: 16px 22px; }
          .hs-nav-links { display: none; }
          .hs-hero { flex-direction: column; min-height: auto; padding: 0; }
          .hs-hero-text { width: 100%; padding: 40px 22px 0; z-index: 2; }
          .hs-headline { font-size: 36px; }
          .hs-hero-image {
            position: relative;
            width: 100%; height: 320px;
            margin-top: 30px;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 12%);
            mask-image: linear-gradient(to bottom, transparent 0%, black 12%);
          }
          .hs-float-card { position: static; transform: none; margin: -30px 22px 30px; }
        }
      `}</style>

      <section className="hs-hero">
        <div className="hs-hero-text">
          <div className="hs-eyebrow">Compassionate care, close to home</div>
          <h1 className="hs-headline">
            Your health.
            <span className="accent">Our priority.</span>
          </h1>
          <p className="hs-body">
            Modern medicine, thoughtful people, and a care team that sees the whole you.
          </p>
          <div className="hs-cta-row">
            <button className="hs-btn-primary" onClick={onBookClick}>
              Book an appointment
              <span>→</span>
            </button>
            <button className="hs-btn-ghost">
              <span className="circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
              </span>
              Find a doctor
            </button>
          </div>
          <div className="hs-trust">
            <div className="shield">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <div>
              <strong>Accredited care</strong>
              <span>Trusted by families since 1998</span>
            </div>
          </div>
        </div>

        <div className="hs-hero-image">
          <img
            src={doctorImg}
            alt="Doctor with patient at City Care Hospital"
          />
        </div>

        <div className="hs-float-card">
          <div className="icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-6.5-4.35-9.5-8.5C0.5 9 1.5 5 5 4c2.2-.6 4.2.5 5 2 .8-1.5 2.8-2.6 5-2 3.5 1 4.5 5 2.5 8.5C18.5 16.65 12 21 12 21z" /></svg>
          </div>
          <div>
            <strong>Care built around you</strong>
            <span>Every visit. Every moment.</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;