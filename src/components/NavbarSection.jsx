// components/NavbarSection.jsx
import { Link } from "react-router-dom";

function NavbarSection() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            🏥
          </div>
          <h1 className="text-2xl font-bold text-gray-900">City Care Hospital</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/doctors" className="hover:text-blue-600 transition">Doctors</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        <a href="#appointment" 
           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Book Appointment
        </a>
      </div>
    </nav>
  );
}

export default NavbarSection;