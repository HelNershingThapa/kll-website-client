import Head from "next/head";
import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import styles from "../styles/AboutUs.module.css";
import HowWeBegan from "components/about-us/HowWeBegan";
import OurTeam from "components/home/OurTeam";
import Footprint from "components/about-us/Footprint";
import Sdg from "components/about-us/Sdg";
import Values from "components/about-us/Values";
import Mission from "components/about-us/Mission";

const stats = [
  {
    title: "Est",
    value: "2013",
  },
  {
    title: "Projects",
    value: "600+",
  },
  {
    title: "People",
    value: "16",
  },
  {
    title: "Partners",
    value: "06",
  },
];

const values = [
  {
    title: "Heavily Biased towards Action",
    icon: "work1.svg",
  },
  {
    title: "Excude Creative Confidence",
    icon: "work2.svg",
  },
  {
    title: "Co-Operativive & Collaborative",
    icon: "work3.svg",
  },
  {
    title: "Work Local, Talk Global",
    icon: "work4.svg",
  },
];

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(5),
    lineHeight: 1.25,
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1.6,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(3),
    },
  },
  headerImgFill: {
    position: "relative",
    width: "100%",
    height: "521px",
    [theme.breakpoints.down("xs")]: {
      height: "31vw",
    },
  },
  statsOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "670px",
    transform: "translate(0%, 50%)",
    display: "flex",
    justifyContent: "space-between",
    background: "white",
    padding: theme.spacing(8, 15),
    [theme.breakpoints.down("xs")]: {
      left: 16,
      right: 16,
      padding: "12px",
    },
  },
  statTitle: {
    fontWeight: 400,
    lineHeight: "28px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7778rem",
      lineHeight: 1,
    },
  },
  statValue: {
    marginTop: theme.spacing(1),
    lineHeight: 1,
  },
  content: {
    maxWidth: "972px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(25),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(13),
    },
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: "blue",
  },
  para: {
    fontSize: "1.111rem",
    lineHeight: 1.6,
    color: theme.palette.grey[800],
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
      lineHeight: 1.5,
    },
  },
  img1: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: "relative",
    width: '100%',
    height: 500,
  },
  imgsCtr: {
    display: "flex",
    gap: theme.spacing(5),
  },
  img2: {
    position: "relative",
    width: 476,
    height: 583,
  },
  header: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    color: theme.palette.grey[800],
  },
  mission: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(15),
  },
  value: {
    background: "grey",
    display: "flex",
    gap: "16px",
    padding: theme.spacing(5),
    alignItems: "center",
    background: "#F0F5F9",
  },
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>About Us | Kathmandu Living Labs</title>
      </Head>
      <Container fixed className={classes.container}>
        <Typography variant="h4" className={classes.pageTitle}>
          About Us
        </Typography>
      </Container>
      <div className={classes.headerImgFill}>
        <Image
          src="/about-us-header.png"
          layout="fill"
          objectFit="cover"
          alt="People working at KLL"
          priority
        />
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
      </div>
      <Container fixed>
        <div className={classes.content}>
          <div className={classes.paragraphs}>
            <Typography variant="body1" className={classes.para}>
              Kathmandu Living Labs is a pioneer civic-tech enterprise that
              provides data and technology solutions to businesses, governments,
              development partners, and civil society.
            </Typography>
            <Typography className={classes.para}>
              KLL was established to challenge the status quo of the knowledge
              production paradigm, in which a vast majority of the people in the
              world are excluded. It aims to bridge that gap and bring the
              voices and needs of the people on ground and resolve some of the
              pressing issues using technological innovation and deep immersion
              in communities.
            </Typography>
            <Typography className={classes.para}>
              Founded in 2013 to further the OpenStreetMap (OSM) movement, KLL
              believes in harnessing the power of open-source technology for
              improving the lives of citizens. Over the past 8 years, KLL has
              built and sustained OSM communities of thousands of people from
              Nepal and countries across Asia. The organization’s work spans
              diverse sectors including climate change and resilience, civic
              engagement, map-based surveys, and digital governance. KLL has
              built and sustained a community of thousands of volunteers,
              partners, and supporters that spans across the globe.
            </Typography>
          </div>
          <div className={classes.imgContainer}>
            <div className={classes.img1}>
              <Image
                src="/Rectangle31.png"
                alt="asdasd"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={classes.imgsCtr}>
              <div className={classes.img2}>
                <Image
                  src="/Rectangle32dup.png"
                  alt="asdasd"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={classes.img2}>
                <Image
                  src="/Rectangle33.png"
                  layout="fill"
                  objectFit="cover"
                  alt="asdasd"
                />
              </div>
            </div>
          </div>
          <Footprint />
          <Sdg />
        </div>
      </Container>
      <HowWeBegan />
      <Values />
      <Mission />
      <OurTeam />
    </>
  );
}

export default AboutUs;
