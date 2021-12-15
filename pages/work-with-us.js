import fetch from "isomorphic-unfetch";
import Head from "next/head";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import JoinOsmMovement from "components/work-with-us/JoinOsmMovement";
import OurTeam from "components/home/OurTeam";
import Traits from "../components/work-with-us/Traits";
import Benefits from "../components/work-with-us/Benefits";
import Programs from "../components/work-with-us/Programs";
import Testimonials from "../components/work-with-us/Testimonials";
import JobListings from "../components/work-with-us/JobListings";
import Volunteering from "../components/work-with-us/Volunteering";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
    height: "33vw",
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
      padding: theme.spacing(4, 7),
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
  para: {
    fontSize: "1.111rem",
    fontWeight: 400,
    lineHeight: 1.6,
    color: theme.palette.grey[800],
    marginBottom: "1.111rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
      lineHeight: 1.5,
      marginBottom: "0.8889rem",
    },
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

function WorkWithUs({ data, vacancies, membersCount }) {
  const classes = useStyles();
  const { API_URL } = process.env;
  const router = useRouter();

  console.log("router", router);

  useEffect(() => {
    if (router.asPath === "/work-with-us#joblistings") {
      var elmnt = document.getElementById("helllo");
      elmnt.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {data.pageDescription}
          </Typography>
        </Container>
      </div>

      <div className={classes.headerImgFill}>
        <Image
          priority
          src={`${API_URL}${data.headerImage.url}`}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className={classes.statsOverlay}>
        {data.headerStats.map((stat) => (
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

      <Container fixed>
        <div className={classes.content}>
          <Traits traits={data.traits} />
          {/* eslint-disable-next-line react/no-children-prop */}
          <ReactMarkdown children={data.blurb} renderers={renderers} />
          <Benefits benefits={data.benefits} />
        </div>
      </Container>
      <Volunteering volunteering={data.volunteering} />
      <Programs fellowships={data.fellowships} mentorships={data.mentorships} />
      <JoinOsmMovement joinOsmMovement={data.joinOsmMovement} />
      <Testimonials testimonials={data.testimonials} />
      {vacancies.length > 0 && <JobListings vacancies={vacancies} />}
      <OurTeam membersCount={membersCount} />
    </>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/work-with-us`);
  const data = await res.json();

  const vacanciesRes = await fetch(`${API_URL}/vacancies`);
  const vacancies = await vacanciesRes.json();

  const membersRes = await fetch(`${API_URL}/members/count?isAlumnus=false`);
  const membersCount = await membersRes.json();

  return {
    props: {
      data,
      vacancies,
      membersCount,
    },
    revalidate: 86400,
  };
}

export default WorkWithUs;
