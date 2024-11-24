import React from 'react';
import '../style/Header.css';
import Logo from '../images/Capture d’écran 2024-11-23 145929.png';
import GearIcon from '../images/gear.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-animation left">
        <img src={GearIcon} alt="Animation gauche" className="gear-icon" />
      </div>
      <img src={Logo} alt="Logo" className="header-logo" />
      <div className="header-animation right">
        <img src={GearIcon} alt="Animation droite" className="gear-icon" />
      </div>
    </header>
  );
};

export default Header;
