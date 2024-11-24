import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextSlide, prevSlide } from '../redux/bannerSlice';
import '../style/Banner.css'; // Import du fichier CSS

import Moteur from '../images/moteur.jpg';
import Diagnostic from '../images/diagnostic.jpg';
import Pneu from '../images/pneu.jpg';

const Banner = () => {
    const { slides, currentSlide } = useSelector((state) => state.banner);
    const dispatch = useDispatch();
  
    const images = [Moteur, Diagnostic, Pneu];
  
    return (
      <div className="banner">
        <div className="banner-image-container">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="banner-image"
          />
          <p className="banner-description">{slides[currentSlide].description}</p>
        </div>
        <div className="banner-buttons">
          <button
            onClick={() => dispatch(prevSlide())}
            className="banner-button"
          >
            ←
          </button>
          <button
            onClick={() => dispatch(nextSlide())}
            className="banner-button"
          >
            →
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  