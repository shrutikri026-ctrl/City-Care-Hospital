// components/HeroSection.jsx
function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-300 text-lg mb-4">🏥 WELCOME TO CITY CARE HOSPITAL</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your Health,<br />Our Priority
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            We provide trusted medical care with experienced doctors and modern facilities.
          </p>
          <div className="flex gap-4">
            <a href="#appointment" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Book Appointment
            </a>
            <a href="#services" className="border border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              Our Services
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <img src="/doctors-team.png" alt="Doctor" className="rounded-2xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;