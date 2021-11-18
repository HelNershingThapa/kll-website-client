import moment from "moment";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid, Chip } from "@material-ui/core";
import EventTabs from "components/events/EventTabs";
import UpcomingEventCard from "components/events/UpcomingEventCard";
import { desktop } from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
  imgFill: {
    position: "relative",
    width: "100%",
    height: 420,
    [theme.breakpoints.down("sm")]: {
      height: "58vw",
    },
  },
  layover: {
    position: "relative",
    background: "white",
    width: "614px",
    margin: "auto",
    padding: theme.spacing(6),
    marginTop: "-100px",
    // transform: "translateY(-50%)",
    marginTop: "-100px",
    paddingBottom: 0,
    [theme.breakpoints.down(desktop)]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(0%)",
      width: "100%",
      padding: 0,
      paddingTop: theme.spacing(3),
    },
  },
  chipRoot: {
    position: "absolute",
    top: theme.spacing(4),
    left: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      top: theme.spacing(3),
      left: theme.spacing(3),
    },
  },
  chipLabel: {
    fontSize: "14px",
    fontWeight: 500,
    padding: 0,
    color: theme.palette.grey[50],
  },
  title: {
    lineHeight: 1.6,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: 1.556,
    },
  },
  description: {
    color: theme.palette.grey[600],
    marginTop: theme.spacing(2),
  },
  moreInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(2),
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
  btnRoot: {
    padding: "10px 20px",
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
  },
}));

function Events({ event }) {
  const classes = useStyles();

  const formattedStartDate = moment(event.startDate, "YYYY-MM-DD").format("LL");
  const formattedEndDate = moment(event.endDate, "YYYY-MM-DD").format("LL");

  const date =
    event.startDate === event.endDate
      ? event.startDate
      : `${event.startDate} - ${event.endDate}`;

  return (
    <div className={classes.root}>
      <div className={classes.imgFill}>
        <Image
          src={`http://localhost:1337${event.coverPhoto.url}`}
          layout="fill"
          objectFit="cover"
          alt="event at KLL"
        />
        <Chip
          label={
            event.startDate === event.endDate
              ? formattedStartDate
              : `${formattedStartDate} - ${formattedEndDate}`
          }
          color="primary"
          classes={{ root: classes.chipRoot }}
        />
      </div>
      <div className={classes.layover}>
        <Typography variant="h6" className={classes.title}>
          {event.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {event.description.substring(0, 180)} ...
        </Typography>
        <div className={classes.moreInfo}>
          <div className={classes.rendezvous}>
            <div className={classes.rendezvou}>
              <i className={clsx("ri-time-line", classes.icon)} />
              <Typography variant="subtitle1" className={classes.rendezvouTypo}>
                {event.startTime.substring(0, 5)} -{" "}
                {event.endTime.substring(0, 5)}
              </Typography>
            </div>
            <div className={classes.rendezvou}>
              <i className={clsx("ri-map-pin-user-line", classes.icon)} />
              <Typography variant="subtitle1" className={classes.rendezvouTypo}>
                {event.venue}
              </Typography>
            </div>
          </div>
          <Link href={`/events/${event.slug}`}>
            <Button
              variant="outlined"
              color="primary"
              classes={{ root: classes.btnRoot, label: classes.btnLabel }}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Events;
