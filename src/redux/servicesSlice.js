import { createSlice } from '@reduxjs/toolkit';
import revisionAutoImage from '../images/car-maintenance.jpg';
import diagnosticImage from '../images/diagno.jpg';
import amortissementImage from '../images/amortisation.webp'
import freinageImage from '../images/frenage.jpg';

const initialState = {
  services: [
    {
      id: 1,
      name: 'Révision Auto',
      description: "Service complet de révision automobile à domicile.(main d'oeuvre)",
      image: revisionAutoImage,
      details: [
        { name: 'Vidange simple', price: 50 },
        { name: 'Vidange tous Filtres', price: 75 },
        
        { name: 'Contrôle général', price: 25 },
      ],
    },
    {
      id: 2,
      name: 'Diagnostic Automobile',
      description: "Diagnostic complet pour détecter rapidement les pannes.(main d'oeuvre)",
      image: diagnosticImage,
      details: [
        { name: 'Diagnostic moteur', price: 50 },
        
      ],
    },
    
    
    {
      id: 5,
      name: 'Suspensions et train roulant',
      description: "Inspection et remplacement des amortisseurs.(main d'oeuvre)",
      image: amortissementImage,
      details: [
        { name: ' amortisseur avant', price: 150 },
        { name: ' amortisseur arrière', price: 75 },
        { name: 'Triangle inférieur', price: 75 },
        

      ],
    },
    {
      id: 6,
      name: 'Freinage',
      description: "Réparation et remplacement des freins.(main d'oeuvre)",
      image: freinageImage,
      details: [
        { name: 'Plaquettes de frein avant', price: 50 },
        { name: 'Plaquettes de frein arrière', price: 50 },
        { name: 'Purge du liquide de frein', price: 25 },
        { name: 'Disques et Plaquettes', price: 75 },
      ],
    },
  ],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
});

export const selectServices = (state) => state.services.services;
export default servicesSlice.reducer;
