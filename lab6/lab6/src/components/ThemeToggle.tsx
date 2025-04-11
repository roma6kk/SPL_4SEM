import React from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
      </button>
    </div>
  );
};

export default ThemeToggle;