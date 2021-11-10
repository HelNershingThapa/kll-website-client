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
import RecurringEvents from "components/events/RecurringEvents";
import StayUpdated from "components/events/StayUpdated";

const useStyles = makeStyles((theme) => ({
  pageCtr: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(50),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(18),
    },
  },
  pageTitle: {
    lineHeight: 1.25,
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1.6,
    },
  },
  pageDescription: {
    color: theme.palette.grey[600],
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(12),
    maxWidth: 800,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(6),
      fontSize: "0.7778rem",
      lineHeight: 1.428,
    },
  },
  wholeContainer: {
    display: "grid",
    gridTemplateColumns: "2.18fr 1fr",
    gap: theme.spacing(10),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100%",
    },
  },
  eventsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(8),
    },
  },
  calendarCrossFill: {
    position: "relative",
    width: 80,
    height: 80,
  },
  nullEventsTitle: {
    marginTop: theme.spacing(10),
    fontFamily: "Manrope",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "32px",
    color: theme.palette.grey[900],
  },
  nullEventsDescription: {
    marginTop: theme.spacing(2),
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    color: theme.palette.grey[600],
  },
  noUpcomingEventsContainer: {
    maxWidth: "522px",
    marginTop: theme.spacing(10),
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pastEventsBtn: {
    padding: theme.spacing(3, 6),
    background: theme.palette.grey[100],
    marginTop: theme.spacing(8),
    borderRadius: 4,
  },
  pastEventsBtnLabel: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "16px",
    color: theme.palette.grey[700],
  },
}));

function Events() {
  const classes = useStyles();
  const [value, setValue] = useState("Upcoming Events");
  return (
    <>
      <Head>
        <title>Events | Kathmandu Living Labs</title>
      </Head>
      <Container fixed className={classes.pageCtr}>
        <Typography variant="h4" className={classes.pageTitle}>
          Events at
        </Typography>
        <Typography variant="h4" className={classes.pageTitle}>
          Kathmandu Living Labs
        </Typography>
        <Typography variant="body1" className={classes.pageDescription}>
          We at Kathmandu Living Labs organize various events and workshops for
          everyone to attend every month or so. Feel free to learn more about
          our events and participate.
        </Typography>
        <EventTabs value={value} setValue={setValue} />

        <div className={classes.wholeContainer}>
          {value !== "Past Events" && (
            <div className={classes.eventsContainer}>
              {["", "", ""].map((event) => (
                <UpcomingEventCard key={uid(event)} />
              ))}
            </div>
          )}

          {value === "Past Events" && (
            <div className={classes.noUpcomingEventsContainer}>
              <div className={classes.calendarCrossFill}>
                <Image
                  src="/icons/calendar-cross.svg"
                  alt="calendar cross"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Typography
                className={classes.nullEventsTitle}
                variant="subtitle2"
              >
                No Events Found
              </Typography>
              <Typography
                className={classes.nullEventsDescription}
                variant="body1"
                align="center"
              >
                Sorry! We do not have any events happening at the moment. Please
                try visiting this page at a later time. In the meantime, feel
                free to explore our past events.
              </Typography>
              <Button
                classes={{
                  root: classes.pastEventsBtn,
                  label: classes.pastEventsBtnLabel,
                }}
              >
                Check Out Past Events
              </Button>
            </div>
          )}
          <div>
            <RecurringEvents />
          </div>
          <div>
            <StayUpdated />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Events;
