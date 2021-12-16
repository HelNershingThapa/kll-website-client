import React from "react";
import Head from "next/head";
import Link from "next/link";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import styles from "styles/404.module.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Container, Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const osmURL =
  "https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=52ce8b5b94d44030a0c6208707611a06";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.loadMap = this.loadMap.bind(this);
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    var map = L.map(this.mapNode).setView([27.7340281, 85.3368273], 15);
    L.tileLayer(osmURL, {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiaGVsbmVyc2hpbmd0aGFwYSIsImEiOiJjazc1cW1uaXkwanVoM2VyeWU3emUyMm0wIn0.Ulemzd1lMM2O6nEfk91bmw",
    }).addTo(map);

    var greenIcon = L.icon({
      iconUrl: "/kll-logo.svg",

      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    const marker = L.marker([27.7340281, 85.3368273], {
      icon: greenIcon,
    }).addTo(map);
    marker.bindLabel("My Label", {
      noHide: true,
      className: "my-label",
      offset: [0, 0],
    });
    marker.addTo(map);
  }

  render() {
    return (
      <div
        ref={(node) => (this.mapNode = node)}
        style={{ height: "500px", width: "100%" }}
      ></div>
    );
  }
}

export default Map;
