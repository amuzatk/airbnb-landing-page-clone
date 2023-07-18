import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import StickyButton from '../Button/StickyButton';

interface MapboxMapProps {
    accessToken: string | undefined;
  onShowListClick: () => void;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ accessToken='', onShowListClick }) => {
  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: 'map',
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position
      zoom: 9, // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Clean up the map when the component unmounts
    return () => map.remove();
  }, [accessToken]);

  return (
  <div id="map" style={{ position: 'absolute', top:150, bottom: 0, width: '100%' }}>
      <StickyButton linkTo="/" buttonLabel="Show List" />
  </div>
  );
};

export default MapboxMap;
