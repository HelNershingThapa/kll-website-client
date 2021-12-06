import moment from "moment";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

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
  markdownImageFill: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: "relative",
    width: "100%",
    height: "100%",
    "& div": {
      position: "unset !important",
    },
  },
  markdownImage: {
    objectFit: "cover",
    width: "100vw important",
    position: "relative !important",
    height: "unset !important",
  },
  paragraph: {
    marginBottom: "1rem",
  },
}));

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classes.paragraph}>
      {props.children}
    </Typography>
  );
}

function MarkdownImage(props) {
  const classes = useStyles();
  const { API_URL } = process.env

  return (
    <div className={classes.markdownImageFill}>
      <Image
        className={classes.markdownImage}
        src={`${API_URL}${props.src}`}
        layout="fill"
        objectFit="cover"
        alt={props.alt}
      />
    </div>
  );
}

const renderers = {
  paragraph: MarkdownParagraph,
  link: Link,
  image: MarkdownImage,
};

function EventDetail({ eventDetail }) {
  const classes = useStyles();
  const { API_URL } = process.env;

  const formattedStartDate = moment(eventDetail.startDate, "YYYY-MM-DD").format(
    "LL"
  );
  const formattedEndDate = moment(eventDetail.endDate, "YYYY-MM-DD").format(
    "LL"
  );

  const date =
    eventDetail.startDate === eventDetail.endDate
      ? eventDetail.startDate
      : `${eventDetail.startDate} - ${eventDetail.endDate}`;

  console.log("eventDetail", eventDetail);

  return (
    <>
      <Head>
        <title>{eventDetail.title} | Events | Kathmandu Living Labs</title>
      </Head>
      <div className={classes.imageFullWidth}>
        <div className={classes.headerImgFill}>
          <Image
            src={`${API_URL}${eventDetail.coverPhoto.url}`}
            layout="fill"
            objectFit="cover"
            alt="People working at KLL"
          />
        </div>
        <div className={classes.statsOverlay}>
          <Typography variant="h6" className={classes.title}>
            {eventDetail.title}
          </Typography>
          <div className={classes.rendezvouCtr}>
            <div className={classes.rendezvou}>
              <i className={clsx("ri-time-line", classes.icon)} />
              <Typography variant="subtitle1" className={classes.rendezvouTypo}>
                {eventDetail.startTime.substring(0, 5)} -{" "}
                {eventDetail.endTime.substring(0, 5)}
              </Typography>
            </div>
            <div className={classes.rendezvou}>
              <i className={clsx("ri-calendar-event-fill", classes.icon)} />
              <Typography variant="subtitle1" className={classes.rendezvouTypo}>
                {eventDetail.startDate === eventDetail.endDate
                  ? formattedStartDate
                  : `${formattedStartDate} ${eventDetail.isRecurring ? '' : '-'} ${eventDetail.isRecurring ? '' : formattedEndDate}`}
              </Typography>
            </div>
            <div className={classes.rendezvou}>
              <i className={clsx("ri-map-pin-user-line", classes.icon)} />
              <Typography variant="subtitle1" className={classes.rendezvouTypo}>
                {eventDetail.venue}
              </Typography>
            </div>
          </div>
        </div>
        <Container fixed>
          <div className={classes.eventInfoContainer}>
            {/* eslint-disable react/no-children-prop */}
            <ReactMarkdown
              children={eventDetail.description}
              renderers={renderers}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const paths = events.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/events?slug=${params.slug}`);
  const eventDetail = await res.json();

  return {
    props: {
      eventDetail: eventDetail[0],
    },
  };
}

export default EventDetail;
