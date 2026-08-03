import { useState } from "react";
import { FaCommentDots, FaTimes, FaArrowLeft } from "react-icons/fa";

// Edit this to add/change questions & answers — no code logic needed below
const MENU = [
  {
    q: "🏥 Our Services",
    a: "We offer Cardiology, Orthopedics, Pediatrics, Neurology, Ophthalmology and Dentistry. Which one would you like to know more about?",
  },
  {
    q: "🕒 Timings & Location",
    a: "We're open Mon–Sat, 9 AM – 8 PM, and Sunday 10 AM onwards. Address: 123 Medical Lane, Patna.",
  },
  {
    q: "📅 Book an Appointment",
    a: "You can book instantly using the 'Book Appointment' button on our homepage, or call us at +91 98765 43210.",
  },
  {
    q: "🚑 Emergency Contact",
    a: "For emergencies, call +91 98765 43210 — we have 24/7 emergency care available.",
  },
  {
    q: "👨‍⚕️ Our Doctors",
    a: "We have 10+ expert doctors across all specialities. Visit the 'Doctors' section on our site for full profiles.",
  },
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([
    { from: "bot", text: "Hi! 👋 I'm the City Care assistant. How can I help you today?" },
  ]);

  const handleSelect = (item) => {
    setChat((prev) => [
      ...prev,
      { from: "user", text: item.q },
      { from: "bot", text: item.a },
    ]);
  };

  const handleRestart = () => {
    setChat([
      { from: "bot", text: "Hi! 👋 I'm the City Care assistant. How can I help you today?" },
    ]);
  };

  return (
    <>
      <style>{`
        .cc-chat-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #0d6efd;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          border: none;
          box-shadow: 0 6px 20px rgba(13,110,253,0.4);
          cursor: pointer;
          z-index: 999;
        }
        .cc-chat-panel {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 320px;
          max-height: 460px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 999;
        }
        .cc-chat-header {
          background: #0d6efd;
          color: #fff;
          padding: 14px 16px;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cc-chat-header button {
          background: none;
          border: none;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }
        .cc-chat-body {
          flex: 1;
          overflow-y: auto;
          padding: 14px;
          background: #f5f9ff;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cc-msg {
          max-width: 85%;
          padding: 10px 13px;
          border-radius: 12px;
          font-size: 13.5px;
          line-height: 1.45;
        }
        .cc-msg.bot {
          background: #fff;
          border: 1px solid #dbe8ff;
          color: #1f2937;
          align-self: flex-start;
        }
        .cc-msg.user {
          background: #0d6efd;
          color: #fff;
          align-self: flex-end;
        }
        .cc-chat-options {
          padding: 10px 14px 14px;
          background: #fff;
          border-top: 1px solid #eef1f6;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cc-option-btn {
          background: #eaf2ff;
          border: 1px solid #cfe2ff;
          color: #0d6efd;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 8px;
          text-align: left;
          cursor: pointer;
        }
        .cc-option-btn:hover { background: #dbe9ff; }
        .cc-restart-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #6b7280;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0 0;
        }

        @media (max-width: 420px) {
          .cc-chat-panel { right: 12px; left: 12px; width: auto; bottom: 90px; }
          .cc-chat-btn { right: 16px; }
        }
      `}</style>

      {open && (
        <div className="cc-chat-panel">
          <div className="cc-chat-header">
            <span>City Care Assistant</span>
            <button onClick={() => setOpen(false)}><FaTimes /></button>
          </div>

          <div className="cc-chat-body">
            {chat.map((m, i) => (
              <div key={i} className={`cc-msg ${m.from}`}>{m.text}</div>
            ))}
          </div>

          <div className="cc-chat-options">
            {chat.length > 1 && (
              <button className="cc-restart-btn" onClick={handleRestart}>
                <FaArrowLeft size={10} /> Back to menu
              </button>
            )}
            {MENU.map((item) => (
              <button
                key={item.q}
                className="cc-option-btn"
                onClick={() => handleSelect(item)}
              >
                {item.q}
              </button>
            ))}
          </div>
        </div>
      )}

      <button className="cc-chat-btn" onClick={() => setOpen((o) => !o)}>
        {open ? <FaTimes /> : <FaCommentDots />}
      </button>
    </>
  );
}
