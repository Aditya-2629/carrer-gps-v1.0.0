import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      id="themeToggleBtn"
    >
      <span className="theme-toggle-icon-wrap" aria-hidden="true">
        {isDark ? (
          /* Radiant Sun Icon for Dark Mode */
          <svg
            className="theme-icon sun-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        ) : (
          /* Sleek Crescent Moon Icon for Light Mode */
          <svg
            className="theme-icon moon-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
              fill="currentColor"
              fillOpacity="0.2"
            ></path>
          </svg>
        )}
      </span>

      {showLabel && (
        <span className="theme-toggle-label">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
}
