import Head from "next/head";
import fetch from "isomorphic-unfetch";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import { uid } from "react-uid";
import Image from "next/image";
import ProjectCard from "components/our-projects/ProjectCard";
import ProjectsGrid from "components/our-projects/ProjectsGrid";
import SdgCommitment from "components/our-projects/SdgCommitment";
import MoreProjects from "components/our-projects/MoreProjects";
import { desktop, tablet } from "styles/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "10rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(8),
    },
  },
  pageTitle: {
    marginTop: theme.spacing(10),
    lineHeight: "40px",
    marginBottom: theme.spacing(6) - theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
    },
  },
  quoteIcon: {
    display: "block",
    fontSize: 40,
    color: theme.palette.grey[400],
    transform: "translate(-40px, 16px)",
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
      transform: "translate(0, 0)",
    },
  },
  pageSubtitle: {
    fontFamily: "Manrope",
    fontSize: "60px",
    fontWeight: 300,
    lineHeight: "72px",
    maxWidth: 891,
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down(desktop)]: {
      fontSize: "40px",
      fontWeight: 300,
      lineHeight: 1.25,
      maxWidth: "62%",
      marginBottom: theme.spacing(12),
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7778rem",
      fontWeight: 300,
      lineHeight: 1.25,
      marginLeft: "18px",
      marginBottom: theme.spacing(8),
    },
  },
  subtitleHighlight: {
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  sdgMargin: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(8),
    },
  },
}));

const OurProjects = ({ projects, impact }) => {
  const classes = useStyles();

  projects.sort(
    (a, b) => parseFloat(a.displayOrder) - parseFloat(b.displayOrder)
  );

  return (
    <>
      <Head>
        <title>Our Projects | Kathmandu Living Labs</title>
      </Head>
      <Container fixed className={classes.root}>
        <Typography variant="h4" className={classes.pageTitle}>
          Impact
        </Typography>
        <i className={clsx("ri-double-quotes-l", classes.quoteIcon)} />
        <Typography className={classes.pageSubtitle}>
          We’ve worked on some{" "}
          <Typography
            display="inline"
            color="primary"
            component="span"
            className={clsx(classes.pageSubtitle, classes.subtitleHighlight)}
          >
            incredible initiatives
          </Typography>
          . Discover how we’ve made an impact
        </Typography>
        <ProjectsGrid projects={projects.slice(0, 5)} />
      </Container>
      <div className={classes.sdgMargin}>
        <SdgCommitment impact={impact} />
      </div>
      <Container fixed>
        <ProjectsGrid projects={projects.slice(5, 10)} />
      </Container>
      <Container fixed>
        <MoreProjects projects={projects.slice(5)} />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/projects`);
  const projects = await res.json();

  const impactRes = await fetch(`${API_URL}/impact`);
  const impact = await impactRes.json();

  return {
    props: {
      projects,
      impact,
    },
    revalidate: 60,
  };
}

export default OurProjects;
