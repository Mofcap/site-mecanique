import React from 'react';
import '../style/About.css'; // Import du fichier CSS
import RepairImage from '../images/about.webp'; // Remplacez par le chemin de votre image

const About = () => {
  return (
    <section className="about">
        <div className='about-txt'>
      <h1 className="about-title">Votre mécanicien à domicile à Millau</h1>
      <p className="about-paragraph">
        Votre voiture a des problèmes et vous cherchez un mécanicien à domicile à Millau et les alentours de Millau ? 
        Vous n’avez pas le temps de vous rendre au garage et vous avez besoin d’un service de réparation automobile à domicile ?
      </p>
      <p className="about-paragraph">
        Optez pour <strong>DTMécanique à Domicile</strong> : un professionnel de l’automobile, véritable super-héros de la mécanique, 
        prêt à intervenir chez vous rapidement pour tous vos besoins en matière de réparation et d’entretien à domicile.
      </p>
      <p className="about-paragraph">
        J'offre une gamme complète de services de réparation et d’entretien automobile à domicile à Millau, 
        et sur un rayon de 50 km autour de Millau (12). Que vous ayez besoin d’une simple vidange d’huile, 
        d’un changement de pneus, d’une réparation de freins ou d’un diagnostic complet de votre véhicule, je suis à votre service.
      </p>
      </div>
      {/* Section avec photo */}
      <div className="about-image-container">
        <img src={RepairImage} alt="Réparation automobile" className="about-image" />
      </div>
    </section>
  );
};

export default About;
