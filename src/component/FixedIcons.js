import React, { useState } from 'react';
import '../style/FixedIcons.css';

const FixedIcons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Email envoyé !');
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Icons */}
      <div className="fixed-icons">
        <a href="tel:+33628052124" className="icon call-icon" title="Appeler">
          📞
        </a>
        <button
          className="icon email-icon"
          onClick={handleEmailClick}
          title="Envoyer un email"
        >
          📧
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Envoyer un Email</h2>
            <form onSubmit={handleSubmit} className="email-form">
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
//dtmecanique1234@gmail.com
export default FixedIcons;
