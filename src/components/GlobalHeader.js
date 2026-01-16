// src/components/GlobalHeader.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/ScribbylLogo1.svg";
import { trackClickEvent } from "../utils/analytics";

export default function GlobalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-[#0D0D0D] px-6 py-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => trackClickEvent("Header: Home")}> 
          <img src={logo} alt="Scribbyl Logo" className="h-10 w-auto scale-110 transform origin-left" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium items-center">
          <Link to="/about" onClick={() => trackClickEvent("Header: About")} className="hover:text-[#73A6E4] transition">About Us</Link>
          <Link to="/services" onClick={() => trackClickEvent("Header: Services")} className="hover:text-[#73A6E4] transition">Services</Link>
          <Link to="/contact" onClick={() => trackClickEvent("Header: Contact")} className="hover:text-[#73A6E4] transition">Contact</Link>
          <div className="flex gap-3">
            <Link to="/login" onClick={() => trackClickEvent("Header: Login")} className="px-4 py-2 bg-[#0D0D0D] text-white rounded-lg hover:bg-[#395577] transition">Login</Link>
            <Link to="/contact" onClick={() => trackClickEvent("Header: Work With Us")} className="px-4 py-2 bg-[#73A6E4] text-white rounded-lg hover:bg-[#567EAF] transition">Work With Us</Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0D0D0D]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white border-t mt-4 py-4 px-4 space-y-4 text-center">
          <Link to="/about" onClick={() => { setMenuOpen(false); trackClickEvent("Header: About"); }} className="block text-base hover:text-[#73A6E4] transition">About Us</Link>
          <Link to="/services" onClick={() => { setMenuOpen(false); trackClickEvent("Header: Services"); }} className="block text-base hover:text-[#73A6E4] transition">Services</Link>
          <Link to="/contact" onClick={() => { setMenuOpen(false); trackClickEvent("Header: Contact"); }} className="block text-base hover:text-[#73A6E4] transition">Contact</Link>
          <Link to="/login" onClick={() => { setMenuOpen(false); trackClickEvent("Header: Login"); }} className="block w-full py-2 bg-[#0D0D0D] text-white rounded-lg hover:bg-[#395577] transition">Login</Link>
          <Link to="/contact" onClick={() => { setMenuOpen(false); trackClickEvent("Header: Work With Us"); }} className="block w-full py-2 bg-[#73A6E4] text-white rounded-lg hover:bg-[#567EAF] transition">Work With Us</Link>
        </div>
      )}
    </header>
  );
}