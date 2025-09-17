import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop"; 
import { initGA, trackPageView } from "./utils/analytics";

import "@fontsource/sora/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/permanent-marker";
import ScrollToHashElement from "./components/ScrollToHashElement";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-[#DEE0E4] text-[#0D0D0D]">
      <GlobalHeader />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <GlobalFooter />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <ScrollToHashElement />
      <AppContent />
    </Router>
  );
}

export default App;
