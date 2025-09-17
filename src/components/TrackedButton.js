// src/components/TrackedButton.js
// customize eventLabel in jsx to describe what button was clicked (like "Header CTA", "Newsletter Submit", etc.) for better reporting in GA.
import React from "react";
import { Link } from "react-router-dom";

export default function TrackedButton({
  children,
  href,
  onClick,
  eventLabel = "Button Click",
  className = "",
  ...props
}) {
  const handleClick = (e) => {
    if (window.gtag) {
      window.gtag("event", "button_click", {
        event_category: "interaction",
        event_label: eventLabel,
      });
    }
    if (onClick) onClick(e);
  };

  // External links (email, phone, etc.)
  const isExternal = href?.startsWith("http") || href?.startsWith("mailto:") || href?.startsWith("tel:");

  if (href) {
    return isExternal ? (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ) : (
      <Link to={href} onClick={handleClick} className={className} {...props}>
        {children}
      </Link>
    );
  }

  // Default to button if no href is provided
  return (
    <button onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
}
