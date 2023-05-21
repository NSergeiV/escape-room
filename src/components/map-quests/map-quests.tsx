import 'leaflet/dist/leaflet.css';
import './map.css';

import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

import { QuestsForBookingProps } from '../../types/types-props';
import { useAppSelector } from '../../hooks/hook';
import { getIdMarkerBooking } from '../../store/data-process/selectors';

import MarkerComponent from '../map-quest-marker/map-quest-marker';

type MapQuestProps = {
  listQuestsBookingMap: QuestsForBookingProps;
}

function MapQuests({ listQuestsBookingMap }: MapQuestProps) {

  const idBookingMap = useAppSelector(getIdMarkerBooking);

  const coordinatesOrganization: LatLngExpression = [59.9342802, 30.3350986];

  return (
    <MapContainer center={coordinatesOrganization} zoom={10} scrollWheelZoom>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {listQuestsBookingMap.map((marker) => <MarkerComponent key={marker.id} positionMarker={marker.location.coords} addressMardker={marker.location.address} markerId={marker.id} markerIdChoice={idBookingMap} />)}
    </MapContainer>
  );
}

export default MapQuests;
