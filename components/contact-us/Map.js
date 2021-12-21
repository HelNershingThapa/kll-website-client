import React from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Container, Typography, TextField, Button } from "@material-ui/core";

const tileLayerUrl =
  "https://api.baato.io/api/v1/styles/breeze?key=bpk.vEXF2Aj-xkyk-xBSu2Z_w1N8JFss7z-Dzxygnj9I0vBE";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.loadMap = this.loadMap.bind(this);
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGVsbmVyc2hpbmd0aGFwYSIsImEiOiJjazc1cW1uaXkwanVoM2VyeWU3emUyMm0wIn0.Ulemzd1lMM2O6nEfk91bmw";
    const map = new mapboxgl.Map({
      container: this.node,
      style: tileLayerUrl,
      // style: "mapbox://styles/mapbox/light-v9",
      center: [85.33688, 27.73404],
      zoom: 15,
    });

    // var marker = new mapboxgl.Marker()
    //   .setLngLat([85.33681, 27.734]) // adding marker for the response [lon, lat]
    //   .addTo(map);

    const el = document.createElement("div");
    const width = 50;
    const height = 50;
    el.className = "marker";
    el.innerHTML =
      "<div style='display: flex; flex-direction: column; align-items: center'><img src='location-pin.png' width='30' height='35' /><span style='white-space: nowrap; font-size: 16px; font-weight: 600; color: #185ADB; line-height: 1'>Kathmandu Living Labs</span></div>";
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = "100%";

    // Add markers to the map.
    new mapboxgl.Marker(el).setLngLat([85.33688, 27.73404]).addTo(map);
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        ref={(node) => (this.node = node)}
        style={{ position: "relative", height: "500px", width: "100%" }}
      >
        <a href="https://baato.io/" target="_blank" rel="noreferrer">
          <img
            src="baato-logo.png"
            width="30"
            height="37"
            alt=""
            style={{
              position: "absolute",
              left: 10,
              bottom: 10,
              zIndex: 100,
            }}
          />
        </a>
      </div>
    );
  }
}

export default Map;
