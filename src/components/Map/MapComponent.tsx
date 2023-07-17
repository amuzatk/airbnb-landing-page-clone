import React from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import StickyButton from '../Button/StickyButton';

interface MapComponentProps {
  onShowListClick: () => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ onShowListClick }) => {
  const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN; 
  type ViewportProps = any;
  const [viewport, setViewport] = React.useState<ViewportProps>({
    width: '100%',
    height: '500px',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 12,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={mapboxAccessToken}
        onViewportChange={setViewport}
      />
      <StickyButton linkTo="/" buttonLabel="Show List" />
    </div>
  );
};

export default MapComponent;