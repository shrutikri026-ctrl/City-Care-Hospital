import { Link } from "react-router-dom";

function NavbarSection({ onBookClick }) {
  return (
    <>
      <style>{`
        .hs-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 48px;
          background: #fff;
          box-shadow: 0 1px 0 rgba(0,0,0,0.06);
        }
        .hs-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .hs-logo-icon {
          width: 36px; height: 36px;
          background: #0d6efd;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hs-logo-text {
          font-weight: 700; font-size: 19px; color: #111827;
        }
        .hs-logo-text span { color: #0d6efd; }
        .hs-nav-links {
          display: flex; gap: 34px; list-style: none; margin: 0; padding: 0;
        }
        .hs-nav-links a {
          font-size: 14.5px; color: #4b5563; cursor: pointer;
          text-decoration: none;
        }
        .hs-nav-links a:hover { color: #0d6efd; }
        .hs-book-nav {
          background: #eaf2ff; color: #0d6efd; border: none;
          font-weight: 600; font-size: 14px;
          padding: 10px 20px; border-radius: 8px;
          display: flex; align-items: center; gap: 8px;
          cursor: pointer;
        }

        @media (max-width: 960px) {
          .hs-nav { padding: 16px 22px; }
          .hs-nav-links { display: none; }
        }
      `}</style>

      <nav className="hs-nav">
        <Link to="/" className="hs-logo">
          <div className="hs-logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 21s-6.5-4.35-9.5-8.5C0.5 9 1.5 5 5 4c2.2-.6 4.2.5 5 2 .8-1.5 2.8-2.6 5-2 3.5 1 4.5 5 2.5 8.5C18.5 16.65 12 21 12 21z" />
            </svg>
          </div>
          <div className="hs-logo-text">City Care <span>Hospital</span></div>
        </Link>
        <ul className="hs-nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="hs-book-nav" onClick={onBookClick}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
          Book appointment
        </button>
      </nav>
    </>
  );
}

export default NavbarSection;