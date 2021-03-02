import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    let currentTheme = localStorage.getItem('theme');
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    currentTheme = currentTheme || (isDarkMode ? 'dark' : 'light');
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const updateTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <button
      type='button'
      className='icon-button'
      onClick={updateTheme}
      title='Toggle Theme'
    >
      <i className='mat-icon'>
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </i>
    </button>
  );
};

export default ThemeToggle;
