import React from "react";
import "../style/Footer.css"; // Import du fichier CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Horaires de travail</h2>
        <p>Vendredi : 8h00 - 18h00</p>
        <p>Samedi : 8h00 - 18h00</p>
        
      </div>
      <p className="footer-copy">
          © {new Date().getFullYear()} Tous droits réservés
        </p>
    </footer>
  );
};

export default Footer;
