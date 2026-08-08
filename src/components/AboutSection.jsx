function AboutSection() {
  return (
    <>
      <style>{`
        .abt-section { padding: 70px 48px; max-width: 900px; margin: 0 auto; }
        .abt-eyebrow {
          font-size: 12.5px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #8fb8f5; margin-bottom: 14px;
        }
        .abt-title { font-size: 38px; font-weight: 800; color: #111827; margin: 0 0 20px; }
        .abt-title .accent {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic; font-weight: 500; color: #0d6efd;
        }
        .abt-body { font-size: 16.5px; color: #4b5563; line-height: 1.7; margin-bottom: 20px; }
        .abt-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
          margin-top: 40px;
        }
        .abt-stat {
          background: #eaf2ff; border-radius: 12px; padding: 24px; text-align: center;
        }
        .abt-stat .num { font-size: 30px; font-weight: 800; color: #0d6efd; }
        .abt-stat .label { font-size: 13px; color: #4b5563; margin-top: 4px; }

        @media (max-width: 700px) {
          .abt-section { padding: 40px 22px; }
          .abt-title { font-size: 28px; }
          .abt-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="abt-section">
        <div className="abt-eyebrow">Who we are</div>
        <h1 className="abt-title">
          About <span className="accent">City Care Hospital</span>
        </h1>
        <p className="abt-body">
          City Care Hospital has been serving the Patna community since 1998,
          combining modern medical technology with compassionate, patient-first
          care. Our team of 10+ expert doctors across Cardiology, Orthopedics,
          Pediatrics, Neurology, Ophthalmology, and Dentistry work together to
          make sure every visit feels personal — not just clinical.
        </p>
        <p className="abt-body">
          Whether it's a routine check-up or an emergency at 3 AM, our
          24/7 facilities and dedicated staff are built around one goal:
          getting you the care you need, when you need it.
        </p>

        <div className="abt-stats">
          <div className="abt-stat">
            <div className="num">25+</div>
            <div className="label">Years of Service</div>
          </div>
          <div className="abt-stat">
            <div className="num">10+</div>
            <div className="label">Expert Doctors</div>
          </div>
          <div className="abt-stat">
            <div className="num">12k+</div>
            <div className="label">Patients Treated</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;