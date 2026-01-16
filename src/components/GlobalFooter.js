// src/components/GlobalFooter.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logoMark from "../assets/images/Scribbyl S monochrom.svg";
import { trackClickEvent } from "../utils/analytics";

export default function GlobalFooter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    trackClickEvent("Footer: Form Submit");
    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        }
      })
      .catch((error) => console.error("Form submission error:", error));
  };

  return (
    <footer className="bg-[#0D0D0D] text-white px-8 pt-32 pb-0 font-body">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-20">
        {/* Newsletter Section */}
        <div className="md:w-1/2 md:pr-10 md:border-r md:border-[#1E1E1E] md:mr-12 mb-12 md:mb-0">
          <p className="uppercase text-sm text-gray-400 mb-4 tracking-widest font-medium">Let's Do Business</p>
          <form
            action="https://formspree.io/f/mqapayyv"
            method="POST"
            className="relative"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New Footer Signup from Scribbyl" />
            <input type="hidden" name="_source" value="FooterSignup" />
            <input
              type="email"
              name="email"
              placeholder="enter your work email"
              required
              className="bg-transparent border-b border-[#73A6E4] text-[#73A6E4] placeholder:text-[#73A6E4] focus:outline-none w-full py-2 pr-10 text-lg font-semibold"
            />
            <button type="submit" className="absolute right-0 top-1 text-[#73A6E4]">
              <Mail className="w-5 h-5" />
            </button>
            {submitted && <p className="text-[#73A6E4] text-sm mt-2">Submitted</p>}
          </form>
        </div>

        {/* Navigation Columns */}
        <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8">
          <div>
            <p className="font-heading font-semibold text-lg mb-3">Follow Along</p>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/scribbyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#73A6E4] transition-colors"
                  onClick={() => trackClickEvent("Footer: LinkedIn")}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold text-lg mb-3">Navigation</p>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#73A6E4] transition-colors" onClick={() => trackClickEvent("Footer: About")}>About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#73A6E4] transition-colors" onClick={() => trackClickEvent("Footer: Services")}>Services</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold text-lg mb-3">Let's Chat</p>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#73A6E4] transition-colors" onClick={() => trackClickEvent("Footer: Contact")}>Contact</Link>
              </li>
              <li>
                <a href="tel:+18444727422" className="text-gray-300 hover:text-[#73A6E4] transition-colors">(844) 4-SCRIBBYL</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-[#111111] border-t border-[#1E1E1E] mt-20 py-6 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">© 2026 <span className="text-[#73A6E4]">Scribbyl</span>. All rights reserved.</p>
          <img src={logoMark} alt="Scribbyl Logo Mark" className="w-10 h-10 opacity-100 mt-4 md:mt-0" />
        </div>
      </div>
    </footer>
  );
}
