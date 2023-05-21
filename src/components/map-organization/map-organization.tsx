import 'leaflet/dist/leaflet.css';
import './map.css';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import leaflet from 'leaflet';

import { IconMarker } from '../../const/const';


type MapProps = {
  coordinates: number[];
  zoomMap: number;
};

function Map({ coordinates, zoomMap }: MapProps): JSX.Element {

  const [lat, lng] = coordinates;

  const defaultIcon = leaflet.icon({
    iconUrl: IconMarker.Default,
  });

  return (
    <MapContainer center={[lat, lng]} zoom={zoomMap} scrollWheelZoom>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]} icon={defaultIcon} >
        <Popup>
          Расположение организации
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
