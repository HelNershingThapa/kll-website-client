import Head from "next/head";
import { useState } from "react";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import NavBar from "components/NavBar";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Container,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import EventTabs from "components/events/EventTabs";
import UpcomingEventCard from "components/events/UpcomingEventCard";

const useStyles = makeStyles((theme) => ({
  headerImgFill: {
    // position: "relative",
    // width: "100%",
    // height: 638,
  },
  statsOverlay: {
    position: "absolute",
    background: "white",
    padding: theme.spacing(6),
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: 848,
    transform: "translate(0%, -50%)",
  },
  title: {
    fontFamily: "Manrope",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "32px",
    color: theme.palette.grey[900],
  },
  rendezvous: {
    marginTop: theme.spacing(4),
  },
  rendezvou: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2.5),
    color: theme.palette.grey[700],
    "& p": {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      color: theme.palette.grey[600],
    },
  },
  eventInfoContainer: {
    width: 800,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(23.5),
    marginBottom: theme.spacing(20),
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
  },
  eventImage: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

function Events() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>
          Earthquake Data Portal - Launch Event | Events | Kathmandu Living Labs
        </title>
      </Head>
      <div className={classes.imageFullWidth}>
        <div className={classes.headerImgFill}>
          <Image
            src="/event-details.png"
            width={1920}
            height={620}
            layout="responsive"
            alt="People working at KLL"
          />
        </div>
        <div className={classes.statsOverlay}>
          <Typography variant="subtitle2" className={classes.title}>
            Earthquake Data Portal - Launch Event
          </Typography>
          <div className={classes.rendezvous}>
            <div className={classes.rendezvou}>
              <Image src="/icons/time-line.svg" width={13.33} height={13.33} />
              <Typography variant="body2">09:30 - 17:00</Typography>
            </div>
            <div className={classes.rendezvou}>
              <Image
                src="/icons/map-pin-user-line.svg"
                width={12}
                height={14.5}
              />
              <Typography variant="body2">Hotel Manasalu, Lazimpat</Typography>
            </div>
          </div>
        </div>
        <div className={classes.eventInfoContainer}>
          <div className={classes.paragraphs}>
            <Typography variant="body1">
              Earthquke Data Portal will be launced on Aug 26, 2019. It contains
              rich visualizations as well as downloadable data of the massive
              earthquake damage + socio-economic data collected by the goverment
              after the Gorkha Earthquake. The launch event will have high level
              officials from the National Planning Commission, National
              Reconstruction Authority, and the Central Bureau of Statistics as
              its esteemed guests and speakers. It will also have data
              pracitioners, development agencies and civic society organizations
              among its guests.
            </Typography>{" "}
            <Typography variant="body1">
              The Portal is available at:&nbsp;
              <Typography variant="body1" color="primary" display="inline">
                https://eq2015.npc.gov.np
              </Typography>
            </Typography>{" "}
          </div>
          <div className={classes.eventImage}>
            <Image src="/event-detail-img.png" width={800} height={360} />
          </div>
          <Typography variant="body1">
            Registration Link:&nbsp;
            <Typography variant="body1" color="primary" display="inline">
              https://forms.google.com/GHp56
            </Typography>
          </Typography>{" "}
        </div>
      </div>
    </>
  );
}

export default Events;
