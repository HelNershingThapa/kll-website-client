import Map, { Marker } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

export function PinnedLocation() {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: 85.33688,
          latitude: 27.73404,
          zoom: 15,
        }}
        style={{ width: "100%", height: 500 }}
        mapStyle={`https://api.baato.io/api/v1/styles/breeze?key=${process.env.NEXT_PUBLIC_BAATO_TOKEN}`}
      >
        <Marker latitude={27.73404} longitude={85.33688}>
          <img
            src="/location-pin.png"
            height={30}
            alt="marker pin"
            style={{ display: "relative" }}
          />
          <p
            style={{
              position: "absolute",
              whiteSpace: "nowrap",
              left: "-50px",
              top: 12,
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Kathmandu Living Labs
          </p>
        </Marker>
      </Map>
    </div>
  );
}
