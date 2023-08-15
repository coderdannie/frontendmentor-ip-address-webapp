import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const Map = ({ lat, lng, isError, isLoading }) => {
  if (isLoading) {
    return <div className="loader"></div>;
  }
  if (isError) {
    return (
      <div className="flex text-center justify-center error-msg items-center  uppercase">
        <h6>Input correct IPv4 or IPv6 address.</h6>
      </div>
    );
  }
  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker
        position={[lat, lng]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      ></Marker>
    </MapContainer>
  );
};
export default Map;
