import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Importation du CSS de Leaflet
import '../style/MapContainer.css'; // Import du fichier CSS personnalisé

const MapComponent = () => {
  const millauPosition = [44.1000, 3.0833]; // Coordonnées de Millau

  // Liste des villes dans un rayon de 50 km autour de Millau
 

  return (
    <div className="map-container">
      <h2 className="map-header">Mes Services de Mécanique à Domicile autour de Millau</h2>
      <p className="map-description">
         j'intervien dans un rayon de 50 km autour de Millau. Voici la liste des
        villes où je propose mes services :
      </p>
      

      {/* Carte */}
      <MapContainer
        center={millauPosition}
        zoom={12}
        style={{ width: '100%', height: '400px', borderRadius: '8px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Cercle de 50 km */}
        <Circle
          center={millauPosition}
          radius={50000}
          color="blue"
          fillOpacity={0.2}
        >
          <Popup>Rayon de 50 km autour de Millau</Popup>
        </Circle>

        {/* Villes dans un rayon de 50 km */}
        
      </MapContainer>
    </div>
  );
};

export default MapComponent;
