import Head from "next/head";
import { useState } from "react";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
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
    position: "relative",
    width: "100%",
    height: "33vw",
    [theme.breakpoints.down("xs")]: {
      height: "53vw",
    },
  },
  statsOverlay: {
    position: "absolute",
    background: "white",
    padding: theme.spacing(6),
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 848,
    transform: "translate(0%, -50%)",
    [theme.breakpoints.down("sm")]: {
      left: 32,
      right: 32,
      padding: theme.spacing(6),
    },
    [theme.breakpoints.down("xs")]: {
      left: 16,
      right: 16,
      padding: "12px",
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.6,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: 1.5556,
    },
  },
  rendezvouCtr: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
    },
  },
  rendezvou: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  icon: {
    fontSize: "16px",
    lineHeight: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  rendezvouTypo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7778rem",
      lineHeight: 1,
    },
  },
  eventInfoContainer: {
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(23.5),
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(15),
    },
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
            layout="fill"
            objectFit="cover"
            alt="People working at KLL"
          />
        </div>
        <div className={classes.statsOverlay}>
          <Typography variant="h6" className={classes.title}>
            Earthquake Data Portal - Launch Event
          </Typography>
          <div className={classes.rendezvouCtr}>
            <div className={classes.rendezvou}>
              <i className={clsx("ri-time-line", classes.icon)} />
              <Typography variant="subtitle1" className={classes.rendezvouTypo}>
                09:30 - 17:00
              </Typography>
            </div>
            <div className={classes.rendezvou}>
              <i className={clsx("ri-map-pin-user-line", classes.icon)} />
              <Typography variant="subtitle1" className={classes.rendezvouTypo}>
                Hotel Manasalu, Lazimpat
              </Typography>
            </div>
          </div>
        </div>
        <Container fixed>
          <div className={classes.eventInfoContainer}>
            <div className={classes.paragraphs}>
              <Typography variant="body1">
                Earthquke Data Portal will be launced on Aug 26, 2019. It
                contains rich visualizations as well as downloadable data of the
                massive earthquake damage + socio-economic data collected by the
                goverment after the Gorkha Earthquake. The launch event will
                have high level officials from the National Planning Commission,
                National Reconstruction Authority, and the Central Bureau of
                Statistics as its esteemed guests and speakers. It will also
                have data pracitioners, development agencies and civic society
                organizations among its guests.
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
        </Container>
      </div>
    </>
  );
}

export default Events;
