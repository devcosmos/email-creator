import { useEffect, useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

function Header() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('theme-mode') || ThemeMode.Light);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', themeMode);
    localStorage.setItem('theme-mode', themeMode);
  }, [themeMode]);

  return (
    <Navbar color="primary" container="fluid">
      <div className="d-flex align-items-center justify-content-between px-sm-5 w-100">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="images/dev-logo.svg"
            height="36"
          />
        </NavbarBrand>
        <div className="form-check form-switch mode-switch">
          <input
            type="checkbox"
            className="form-check-input" id="theme-mode"
            defaultChecked={themeMode === ThemeMode.Dark}
            onClick={() => {
              setThemeMode((prevThemeMode) => prevThemeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
            }}
          />
          <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Светлая</label>
          <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Тёмная</label>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
