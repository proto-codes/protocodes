import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSun, faMoon, faAdjust } from '@fortawesome/free-solid-svg-icons';

const ThemeToggler = () => {
  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
  const getStoredColor = () => localStorage.getItem('customColor');
  const setStoredColor = (color) => localStorage.setItem('customColor', color);

  const getPreferredTheme = useCallback(() => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  const applyTheme = (theme) => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);

    const handleSystemThemeChange = () => {
      const storedTheme = getStoredTheme();
      if (!storedTheme) {
        const preferredTheme = getPreferredTheme();
        setTheme(preferredTheme);
        applyTheme(preferredTheme);
      }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme, getPreferredTheme]);

  const handleThemeChange = useCallback((newTheme) => {
    setStoredTheme(newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
    showActiveTheme(newTheme);
  }, []);

  const showActiveTheme = (theme) => {
    const themeSwitcher = document.querySelector('#bd-theme');
    if (!themeSwitcher) {
      return;
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text');
    const activeThemeIcon = document.querySelector('.theme-icon-active');
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);

    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    });

    if (btnToActive) {
      btnToActive.classList.add('active');
      btnToActive.setAttribute('aria-pressed', 'true');
    }

    if (activeThemeIcon) {
      switch (theme) {
        case 'light':
          activeThemeIcon.setAttribute('icon', faSun.iconName);
          break;
        case 'dark':
          activeThemeIcon.setAttribute('icon', faMoon.iconName);
          break;
        case 'auto':
          activeThemeIcon.setAttribute('icon', faAdjust.iconName);
          break;
        default:
          activeThemeIcon.setAttribute('icon', faSun.iconName);
      }
    }

    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive ? btnToActive.dataset.bsThemeValue : theme})`;
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);
  };

  useEffect(() => {
    showActiveTheme(theme);

    const handleToggleClick = (event) => {
      const newTheme = event.currentTarget.getAttribute('data-bs-theme-value');
      handleThemeChange(newTheme);
    };

    const toggles = document.querySelectorAll('[data-bs-theme-value]');
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', handleToggleClick);
    });

    return () => {
      toggles.forEach((toggle) => {
        toggle.removeEventListener('click', handleToggleClick);
      });
    };
  }, [theme, handleThemeChange]);

  // Custom color functionality
  const handleColorChange = (colorClass) => {
    setStoredColor(colorClass);
    document.documentElement.setAttribute('data-custom-color', colorClass);
  };

  const customColor = getStoredColor() || 'custom-color-1';

  useEffect(() => {
    document.documentElement.setAttribute('data-custom-color', customColor);
  }, [customColor]);

  return (
    <div>
      <div className="dropdown mb-3">
        <button className="btn border text-body dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon={faCog} spin className='fs-4' />
        </button>
        <div className="dropdown-menu p-2">
          <span className="fs-5 fw-bold text-custom-color">Custom Colors</span>
          <div className="d-flex gap-1">
            <button type='button' className='border-0 custom-color-1 rounded p-3' onClick={() => handleColorChange('custom-color-1')}></button>
            <button type='button' className='border-0 custom-color-2 rounded p-3' onClick={() => handleColorChange('custom-color-2')}></button>
            <button type='button' className='border-0 custom-color-3 rounded p-3' onClick={() => handleColorChange('custom-color-3')}></button>
            <button type='button' className='border-0 custom-color-4 rounded p-3' onClick={() => handleColorChange('custom-color-4')}></button>
            <button type='button' className='border-0 custom-color-5 rounded p-3' onClick={() => handleColorChange('custom-color-5')}></button>
          </div>
        </div>
      </div>

      <div className="dropdown" id="bd-theme" role="button" tabIndex="0">
        <button className="btn border text-body dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon={theme === 'dark' ? faMoon : theme === 'auto' ? faAdjust : faSun} className="theme-icon-active fs-4" />
        </button>
        <div className="dropdown-menu p-2">
          <span className="fs-5" id="bd-theme-text">Toggle theme</span>
          <div className="d-flex gap-2 mt-1">
            <button type="button" className='btn border' data-bs-theme-value="light">
              <FontAwesomeIcon icon={faSun} />
            </button>
            <button type="button" className='btn border' data-bs-theme-value="dark">
              <FontAwesomeIcon icon={faMoon} />
            </button>
            <button type="button" className='btn border' data-bs-theme-value="auto">
              <FontAwesomeIcon icon={faAdjust} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
