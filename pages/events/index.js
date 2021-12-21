import { Fragment, useEffect, useState } from "react";
import moment from "moment";
import Head from "next/head";
import { uid } from "react-uid";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroller";
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
      marginBottom: theme.spacing(4),
      fontSize: "0.7778rem",
      lineHeight: 1.428,
    },
  },
  wholeContainer: {
    display: "grid",
    gridTemplateColumns: "2.18fr 1fr",
    gap: theme.spacing(10),
    marginTop: theme.spacing(8),
    alignItems: "flex-start",
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

function Events({ recurringEvents }) {
  const classes = useStyles();
  const { API_URL } = process.env;
  const [value, setValue] = useState("Upcoming Events");
  const [events, setEvents] = useState([]);
  const [eventCount, setEventCount] = useState(0);

  const date = "2010-12-02";

  const upcomingEvents = events.filter((event) =>
    moment(event.startDate).isAfter()
  );

  const pastEvents = events.filter((event) =>
    moment(event.startDate).isBefore()
  );

  const hasMore = events.length < eventCount;

  useEffect(() => {
    loadFunc();
  }, []);

  async function loadFunc() {
    const [resCount, eventRes] = await Promise.all([
      fetch(
        `${API_URL}/events/count?_where[_or][0][isRecurring_null]=true&_where[_or][1][isRecurring]=false`
      ).then((r) => r.json()),
      fetch(
        `${API_URL}/events?_start=${events.length}&_limit=6&_where[_or][0][isRecurring_null]=true&_where[_or][1][isRecurring]=false&_sort=startDate:DESC`
      ).then((r) => r.json()),
    ]);
    setEventCount(resCount);
    setEvents(events.concat(eventRes));
  }

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
          {`KLL values civic engagement and public participation. We organize events and workshops to foster public integration and mutual learning. Learn more about our events below.`}
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
            <InfiniteScroll
              pageStart={0}
              loadMore={loadFunc}
              hasMore={hasMore}
              loader={
                <div className={classes.centerLoader}>
                  <CircularProgress
                    color="secondary"
                    style={{ color: "#61758A" }}
                    size={24}
                  />
                </div>
              }
            >
              <div className={classes.eventsContainer}>
                {pastEvents.length > 0 &&
                  pastEvents.map((event, index) => (
                    <Fragment key={uid(event, index)}>
                      <UpcomingEventCard event={event} />
                      {index === 2 && <StayUpdated />}
                    </Fragment>
                  ))}
              </div>
            </InfiniteScroll>
          )}
          <RecurringEvents recurringEvents={recurringEvents} />
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env;
  const recurringEventsRes = await fetch(`${API_URL}/events?isRecurring=true`);
  const recurringEvents = await recurringEventsRes.json();

  return {
    props: {
      recurringEvents,
    },
    revalidate: 86400,
  };
}

export default Events;
