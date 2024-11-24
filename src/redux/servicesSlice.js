import { createSlice } from '@reduxjs/toolkit';
import revisionAutoImage from '../images/car-maintenance.jpg';
import diagnosticImage from '../images/diagno.jpg';
import montagePneuImage from '../images/pneeu.jpg';
import equilibragePneuImage from '../images/equilibrage.jpg';
import amortissementImage from '../images/amortisation.webp'
import freinageImage from '../images/frenage.jpg';

const initialState = {
  services: [
    {
      id: 1,
      name: 'Révision Auto',
      description: 'Service complet de révision automobile à domicile.',
      image: revisionAutoImage,
      details: [
        { name: 'Vidange', price: 50 },
        { name: 'Filtre à huile', price: 20 },
        { name: 'Contrôle général', price: 30 },
      ],
    },
    {
      id: 2,
      name: 'Diagnostic Automobile',
      description: 'Diagnostic complet pour détecter rapidement les pannes.',
      image: diagnosticImage,
      details: [
        { name: 'Diagnostic moteur', price: 60 },
        { name: 'Lecture des codes erreurs', price: 40 },
      ],
    },
    {
      id: 3,
      name: 'Montage de Pneus',
      description: 'Montage de pneus pour auto et moto.',
      image: montagePneuImage,
      details: [
        { name: 'Montage pneu auto', price: 15 },
        { name: 'Montage pneu moto', price: 10 },
        { name: 'Pression pneu', price: 5 },
      ],
    },
    {
      id: 4,
      name: 'Équilibrage Pneus',
      description: 'Équilibrage de pneus pour une conduite fluide.',
      image: equilibragePneuImage,
      details: [
        { name: 'Équilibrage auto', price: 20 },
        { name: 'Équilibrage moto', price: 15 },
      ],
    },
    {
      id: 5,
      name: 'Amortissement',
      description: 'Inspection et remplacement des amortisseurs.',
      image: amortissementImage,
      details: [
        { name: 'Remplacement amortisseur avant', price: 100 },
        { name: 'Remplacement amortisseur arrière', price: 80 },
      ],
    },
    {
      id: 6,
      name: 'Freinage',
      description: 'Réparation et remplacement des freins.',
      image: freinageImage,
      details: [
        { name: 'Plaquettes de frein avant', price: 60 },
        { name: 'Plaquettes de frein arrière', price: 50 },
        { name: 'Purge du liquide de frein', price: 40 },
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
