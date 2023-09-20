import { useRef } from "react";
import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css" 
import { MapContainer, TileLayer, Marker, Popup, ZoomControl} from "react-leaflet"
import { useMap } from 'react-leaflet/hooks'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import iconUrl from '../assets/icon-location.svg'

export const newicon = new Leaflet.Icon({
  iconUrl,
  iconAnchor: [5, 55],
  popupAnchor: [10, -54],
  iconSize: [40, 50]
});

const Map = ({data}) => {

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  const mapRef = useRef();
  const zoom = 4;
  const containerStyle = {
      height: '30vh',
  }

  const marker = {
        position: {
            lat: data?.latlng[0],
            lng: data?.latlng[1],
        },
        draggable: false,
        icon: newicon,
    }

  return (
    <div className='mapContainer'>
      {data?.latlng.length > 0 && 
        <MapContainer
        style={containerStyle}
        center={marker.position}
        zoom={zoom}
        scrollWheelZoom={true}
        ref={mapRef}
        zoomControl={false}
        fullscreenControl={true}
      >
        <ChangeView center={marker.position} zoom={zoom}/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topleft"/>
        <Marker position={marker.position} icon={newicon}>
          <Popup>
            <p>Capital: {data?.capital[0]}</p>
          </Popup>
        </Marker>
      </MapContainer>
      }
    </div>
  )
}

export default Map