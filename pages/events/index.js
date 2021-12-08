import moment from "moment";
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
import NoUpcomingEvents from "../../components/events/NoUpcomingEvents";

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
}));

function Events({ events, recurringEvents }) {
  const classes = useStyles();
  const [value, setValue] = useState("Upcoming Events");

  const date = "2010-12-02";

  const upcomingEvents = events.filter((event) =>
    moment(event.startDate).isAfter()
  );

  const pastEvents = events.filter((event) =>
    moment(event.startDate).isBefore()
  );

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
          We, at Kathmandu Living Labs, organize various events and workshops for everyone to attend. Learn more about our events below.
        </Typography>
        <EventTabs value={value} setValue={setValue} />

        <div className={classes.wholeContainer}>
          {value !== "Past Events" && (
            <div className={classes.eventsContainer}>
              {upcomingEvents.length > 0 &&
                upcomingEvents.map((event) => (
                  <UpcomingEventCard key={uid(event)} event={event} />
                ))}
              {upcomingEvents.length === 0 && (
                <NoUpcomingEvents setValue={setValue} />
              )}
            </div>
          )}

          {value === "Past Events" && (
            <div className={classes.eventsContainer}>
              {pastEvents.length > 0 &&
                pastEvents.map((event) => (
                  <UpcomingEventCard key={uid(event)} event={event} />
                ))}
            </div>
          )}
          <div>
            <RecurringEvents recurringEvents={recurringEvents} />
          </div>
          <div>
            <StayUpdated />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/events?isRecurring=false`);
  const events = await res.json();

  const recurringEventsRes = await fetch(`${API_URL}/events?isRecurring=true`);
  const recurringEvents = await recurringEventsRes.json();

  return {
    props: {
      events,
      recurringEvents
    },
  };
}

export default Events;
