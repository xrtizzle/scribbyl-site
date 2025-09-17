// src/utils/analytics.js

export const initGA = () => {
  if (!window.gtag) {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-W4FRFQLQRW`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", "G-W4FRFQLQRW");
  }
};

export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", "G-W4FRFQLQRW", {
      page_path: url,
    });
  }
};

export const trackClickEvent = (label) => {
  if (window.gtag) {
    window.gtag("event", "click", {
      event_category: "Interaction",
      event_label: label,
    });
  }
};
