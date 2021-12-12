import axios from "axios";
import Head from "next/head";
import { uid } from "react-uid";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import HowWeBegan from "components/about-us/HowWeBegan";
import OurTeam from "components/home/OurTeam";
import Footprint from "components/about-us/Footprint";
import Sdg from "components/about-us/Sdg";
import Values from "components/about-us/Values";
import Mission from "components/about-us/Mission";
import { NextSeo } from "next-seo";

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
    [theme.breakpoints.down("md")]: {
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
    gap: "1.111rem", // gap set as the line height for text
    [theme.breakpoints.down("xs")]: {
      gap: "0.8889rem",
    },
  },
  para: {
    fontSize: "1.111rem",
    lineHeight: 1.6,
    color: theme.palette.grey[800],
    marginBottom: "1.111rem", // giving same size as the font size
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
      lineHeight: 1.5,
    },
  },
  img1: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: "relative",
    width: "100%",
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: "46vw",
    },
  },
  imgsCtr: {
    display: "flex",
    gap: theme.spacing(5),
  },
  img2: {
    position: "relative",
    width: 476,
    height: 583,
    [theme.breakpoints.down("sm")]: {
      height: "54vw",
    },
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

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classes.para}>
      {props.children}
    </Typography>
  );
}

const renderers = {
  paragraph: MarkdownParagraph,
};

function AboutUs({ data, membersCount, sdgs }) {
  const classes = useStyles();
  const { API_URL } = process.env;

  const SEO = {
    title: "About Kathmandu Living Labs",
    description: "How Kathmandu Living Labs started, footprint, SDG goals, values and mission"
  }

  return (
    <>
      <Head>
        <title>About Us | Kathmandu Living Labs</title>
      </Head>
      <NextSeo {...SEO} />
      <Container fixed className={classes.container}>
        <Typography variant="h4" className={classes.pageTitle}>
          About Us
        </Typography>
      </Container>
      <div className={classes.headerImgFill}>
        <Image
          priority
          src={`${API_URL}${data.headerImage.url}`}
          layout="fill"
          objectFit="cover"          
          alt=""
        />
        <div className={classes.statsOverlay}>
          {data.stats.map((stat) => (
            <div key={uid(stat)}>
              <Typography variant="body1" className={classes.statTitle}>
                {stat.label}
              </Typography>
              <Typography variant="h5" className={classes.statValue}>
                {stat.number}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <Container fixed>
        <div className={classes.content}>
          {/* eslint-disable-next-line react/no-children-prop */}
          <ReactMarkdown children={data.description} renderers={renderers} />
          <div className={classes.imgContainer}>
            <div className={classes.img1}>
              <Image
                src={`${API_URL}${data.image1.url}`}
                alt="asdasd"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={classes.imgsCtr}>
              <div className={classes.img2}>
                <Image
                  src={`${API_URL}${data.image2.url}`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={classes.img2}>
                <Image
                  src={`${API_URL}${data.image3.url}`}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Footprint />
          <Sdg sdgs={sdgs} />
        </div>
      </Container>
      <HowWeBegan data={data.howWeBegan} />
      <Values values={data.values} />
      <Mission missions={data.mission} />
      <OurTeam membersCount={membersCount} />
    </>
  );
}

export async function getStaticProps(context) {
  const { API_URL } = process.env
  const { data } = await axios.get(`${API_URL}/about-us`);

  const membersRes = await fetch(`${API_URL}/members/count?isAlumnus=false`);
  const membersCount = await membersRes.json();

  const impactRes = await fetch(`${API_URL}/impact`);
  const impact = await impactRes.json();

  return {
    props: {
      data,
      membersCount,
      sdgs: impact.sdgs,
    },
    revalidate: 84600,
  };
}

export default AboutUs;
