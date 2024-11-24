import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectServices } from '../redux/servicesSlice';
import '../style/Services.css';

const Services = () => {
  const services = useSelector(selectServices);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <h2 className="services-header">Nos Services</h2>
      <div className="services-cards">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleCardClick(service)}
          >
            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />
            <div className="service-info">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal pour afficher les détails */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedService.name}</h3>
            <p>{selectedService.description}</p>
            <ul className="service-details">
              {selectedService.details.map((detail, index) => (
                <li key={index}>
                  <span>{detail.name}</span>
                  <span>{detail.price} €</span>
                </li>
              ))}
            </ul>
            <button className="modal-close" onClick={closeModal}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
