import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid, Chip } from "@material-ui/core";
import EventTabs from "components/events/EventTabs";
import UpcomingEventCard from "components/events/UpcomingEventCard";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: 420,
  },
  layover: {
    position: "absolute",
    background: "white",
    width: "614px",
    padding: theme.spacing(6),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)",
    paddingBottom: 0,
  },
  chipRoot: {
    position: "absolute",
    padding: "6px 12px",
    borderRadius: "8px",
    margin: theme.spacing(4),
  },
  chipLabel: {
    fontSize: "14px",
    fontWeight: 500,
    padding: 0,
    color: theme.palette.grey[50],
  },
  title: {
    fontFamily: "Manrope",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "32px",
    color: theme.palette.grey[900],
  },
  description: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: theme.palette.grey[600],
    marginTop: theme.spacing(2),
  },
  moreInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  root: {
    padding: "10px 20px",
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
  },
}));

function Events() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Image src="/events.png" layout="fill" objectFit="cover" />
        <Chip
          label="21st Aug 2021"
          color="primary"
          classes={{ root: classes.chipRoot, label: classes.chipLabel }}
        />
        <div className={classes.layover}>
          {" "}
          <Typography className={classes.title}>
            Earthquake Data Portal - Launch Event
          </Typography>
          <Typography className={classes.description}>
            Earthquake Data Portal will be launced on Sep 26, 2021. It contains
            rich visualizations as well as downloadable data of the massive
            earthquake damage + socio-economic data collected ...
          </Typography>
          <div className={classes.moreInfo}>
            <div className={classes.rendezvous}>
              <div className={classes.rendezvou}>
                <i className="ri-time-line" style={{ fontSize: "16px" }}></i>
                <Typography variant="body2">09:30 - 17:00</Typography>
              </div>
              <div className={classes.rendezvou}>
                <i
                  className="ri-map-pin-user-line"
                  style={{ fontSize: "16px" }}
                ></i>
                <Typography variant="body2">
                  Hotel Manasalu, Lazimpat
                </Typography>
              </div>
            </div>
            <Link href="/events/sample-event">
              <Button
                variant="outlined"
                color="primary"
                classes={{ root: classes.root, label: classes.btnLabel }}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
