import leaflet from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

import { IconMarker } from '../../const/const';
import { useAppDispatch } from '../../hooks/hook';
import { setIdMarkerBooking } from '../../store/data-process/data-process';
import { MarkerComponentProps } from '../../types/types-props';

function MarkerComponent({ positionMarker, addressMardker, markerId, markerIdChoice }: MarkerComponentProps) {

  const dispatch = useAppDispatch();

  const defaultIcon = leaflet.icon({
    iconUrl: IconMarker.Default,
  });

  const currentIcon = leaflet.icon({
    iconUrl: IconMarker.Current,
  });

  const handleClickMarker = (markerNumber: string) => {
    dispatch(setIdMarkerBooking(markerId));
  };

  return (
    <Marker
      position={[positionMarker[0], positionMarker[1]]}
      icon={markerIdChoice === markerId ? currentIcon : defaultIcon}
      eventHandlers={{
        click: () => handleClickMarker(markerId),
      }}
    >
      <Popup>
        {addressMardker}
      </Popup>
    </Marker>
  );
}

export default MarkerComponent;
