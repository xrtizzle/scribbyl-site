import { useEffect, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import ScrollBar from "../components/ScrollBar";
import GlowingLinesBlue from "../assets/images/glowinglinesblue.png";


export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xzzezjjb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    window.gtag?.("event", "form_submit", {
      event_category: "Contact",
      event_label: "Contact Form Submission",
    });

    setFormSubmitted(true);
    form.reset();
  };

  return (
    <>
      <section className="relative text-[#0D0D0D] px-4 sm:px-6 md:px-10 overflow-hidden h-[100vh] min-h-[700px] flex items-center">
  <div className="absolute inset-0 z-0 overflow-hidden">
    <img
      src={GlowingLinesBlue}
      alt="Glowing Lines Background"
      loading="eager"
      className="w-full h-full object-cover object-right"
    />
  </div>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start gap-10">
          {/* Contact Details */}
          <div className="w-full md:w-[40%]">
            <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
            <p className="mb-6 text-[#395577]">Feel free to use the form or old-fashioned phone calls work too.</p>
            <ul className="space-y-4 text-[#526074]">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#395577]" />
                <a href="tel:+18444727422" className="text-[#526074] hover:text-[#73A6E4] transition-colors">
                  <span className="font-semibold">(844) 4-SCRIBBYL</span><br />
                  <span className="text-sm text-gray-500">(844) 472-7422</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#395577]" />
                <span>Tampa, FL</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="w-full md:w-[55%]">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First"
                required
                className="w-full px-4 py-3 bg-white text-[#0D0D0D] border border-[#DEE0E4] rounded-md"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                required
                className="w-full px-4 py-3 bg-white text-[#0D0D0D] border border-[#DEE0E4] rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                className="w-full sm:col-span-2 px-4 py-3 bg-white text-[#0D0D0D] border border-[#DEE0E4] rounded-md"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                className="w-full sm:col-span-2 px-4 py-3 bg-white text-[#0D0D0D] border border-[#DEE0E4] rounded-md"
              />
              <textarea
                name="message"
                placeholder="How can we help you grow?"
                rows="4"
                required
                className="w-full sm:col-span-2 px-4 py-3 bg-white text-[#0D0D0D] border border-[#DEE0E4] rounded-md"
              ></textarea>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="bg-[#73A6E4] hover:bg-[#567EAF] transition text-white px-6 py-3 rounded-md"
                >
                  Submit
                </button>
                {formSubmitted && (
                  <p className="mt-4 text-[#73A6E4] font-semibold">Submitted. We'll be in touch soon!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Scroll Bar section component */}
      <section>
        <ScrollBar />
      </section>
    </>
  );
}

