// src/pages/Login.js
import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";
import "@fontsource/permanent-marker";

export default function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meoadoeq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white px-6 py-32 relative" 
      style={{
        background: "linear-gradient(135deg, #395577, #73A6E4)", // Scribbyl-inspired gradient
      }}
    >

      {/* Headline */}
      <h1
        className="text-5xl md:text-6xl font-bold mb-4"
        style={{ fontFamily: '"Permanent Marker", cursive' }}
      >
        Coming Soon
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 px-4">
        We’re building a personalized portal to give you real-time insights, CX upgrades, and growth strategies — all tailored to your business.
      </p>

      {/* Email Form */}
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="px-5 py-3 w-[260px] sm:w-[300px] rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
        >
          Notify Me
        </button>
      </form>

      {/* Confirmation message */}
      {submitted && (
        <p className="mt-4 text-white text-sm font-semibold">Submitted!</p>
      )}

      {/* Footer note (optional) */}
      <p className="text-sm text-white/50 mt-6">You’ll be first to know when we launch</p>
    </section>
  );
}


