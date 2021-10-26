import Head from "next/head";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Container,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@material-ui/core";
import JoinOsmMovement from "components/work-with-us/JoinOsmMovement";
import OurTeam from "components/home/OurTeam";
import styles from "../styles/AboutUs.module.css";
import Traits from "../components/work-with-us/Traits";
import Benefits from "../components/work-with-us/Benefits";
import Programs from "../components/work-with-us/Programs";
import Testimonials from "../components/work-with-us/Testimonials";
import JobListings from "../components/work-with-us/JobListings";
import Volunteering from "../components/work-with-us/Volunteering";

const stats = [
  {
    title: "Vacancies",
    value: "04",
  },
  {
    title: "Working hrs",
    value: "07",
  },
  {
    title: "Alumini",
    value: "56",
  },
];

const valuesAndMission = [
  {
    title: "Our Values",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Our Mission",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const useStyles = makeStyles((theme) => ({
  pageHeader: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  pageTitle: {
    lineHeight: 1.25,
  },
  titleColoured: {
    color: theme.palette.primary.main,
  },
  pageDesc: {
    marginTop: theme.spacing(3),
    maxWidth: 800,
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      fontSize: "0.7778rem",
      lineHeight: 1.428,
    },
  },
  headerImgFill: {
    position: "relative",
    width: "100%",
    height: "32vw",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 121,
    },
  },
  statsOverlay: {
    width: "670px",
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    background: "white",
    padding: theme.spacing(8, 15),
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    transform: "translate(0%, -50%)",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      padding: theme.spacing(4,7)
    },
    [theme.breakpoints.down("xs")]: {
      left: 16,
      right: 16,
      width: "inherit",
      padding: "13px",
    },
  },
  statTitle: {
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      lineHeight: 1,
    },
  },
  statValue: {
    marginTop: theme.spacing(1),
    lineHeight: 1,
  },
  content: {
    maxWidth: "860px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(30),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(13),
    },
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  para: {
    fontSize: "1.111rem",
    fontWeight: 400,
    lineHeight: 1.6,
    color: theme.palette.grey[800],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
      lineHeight: 1.5,
    },
  },
}));

function WorkWithUs() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Work With Us | Kathmandu Living Labs</title>
      </Head>
      <div className={classes.pageHeader}>
        <Container fixed>
          <Typography
            display="inline"
            variant="h4"
            className={classes.pageTitle}
          >
            Work with&nbsp;
          </Typography>
          <Typography
            display="inline"
            variant="h4"
            className={clsx(classes.pageTitle, classes.titleColoured)}
          >
            Kathmandu Living Labs
          </Typography>
          <Typography variant="body1" className={classes.pageDesc}>
            Kathmandu Living Labs has the most unique working environment and
            culture. On top of all, we offer competitive salaries, monthly
            outings and a flexible schedule
          </Typography>
        </Container>
      </div>

      <div className={classes.headerImgFill}>
        <Image
          src="/work-with-us-header.png"
          layout="fill"
          objectFit="cover"
          alt="People working at KLL"
          priority
        />
      </div>
      <div className={classes.statsOverlay}>
        {stats.map((stat) => (
          <div key={uid(stat)}>
            <Typography variant="body1" className={classes.statTitle}>
              {stat.title}
            </Typography>
            <Typography variant="h5" className={classes.statValue}>
              {stat.value}
            </Typography>
          </div>
        ))}
      </div>

      <Container fixed>
        <div className={classes.content}>
          <Traits />
          <div className={classes.paragraphs}>
            <Typography variant="body1" className={classes.para}>
              {`Kathmandu Living Labs has a unique environment where we can
              guarantee you will be challenged, feel truly fulfilled and grow
              beyond your limits. We take pride in knowing that our work
              environment is a golden egg and we’d love for you to join it!`}
            </Typography>
            <Typography variant="body1" className={classes.para}>
              {`We are a community of action-takers and builders who believe that
              small contributions from many can last and contribute to a
              large-scale impact. We have foundations in technology and the
              society we live in. We take steps to consider our impact on both
              worlds and know to strike the perfect balance. With a deeply
              passionate belief that technology has the power to change people’s
              lives, we work to create solutions that help improve the society
              we live in. We tackle tasks that seem impossible, and even have
              fun while doing it.`}
            </Typography>
            <Typography variant="body1" className={classes.para}>
              {`There is no magic criterion that will make you a KLL family. At
              the intersection of people and technology, everyone fits. Our
              team's strength is our personal and professional diversity.`}
            </Typography>
          </div>
          <Benefits />
        </div>
      </Container>
      <Volunteering />
      <Programs />
      <JoinOsmMovement />
      <Testimonials />
      <JobListings />
      <OurTeam />
    </>
  );
}

export default WorkWithUs;
