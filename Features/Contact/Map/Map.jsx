import { useEffect, useRef, useState } from 'react';

import mapboxgl from '!mapbox-gl';
import { Box } from '@chakra-ui/react';

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2FqYWJ1a2FtYSIsImEiOiJjbGV5Y2pjZDcwMDdqNDB0NzVuY2F2ZzVrIn0.SgZDZcnXA8dWK9Wo6yOOvQ';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(35.75);
  const [lat, setLat] = useState(-6.19);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <Box
      ref={mapContainer}
      position="relative"
      width="100%"
      height="450px"
    ></Box>
  );
};

export default Map;
