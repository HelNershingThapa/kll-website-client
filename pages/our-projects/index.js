import Head from "next/head";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import { uid } from "react-uid";
import Image from "next/image";
import ProjectCard from "components/our-projects/ProjectCard";
import ProjectsGrid from "components/our-projects/ProjectsGrid";
import SdgCommitment from "components/our-projects/SdgCommitment";
import MoreProjects from "components/our-projects/MoreProjects";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    marginTop: theme.spacing(10),
    lineHeight: "40px",
    marginBottom: theme.spacing(12),
  },
  pageSubtitle: {
    fontFamily: "Manrope",
    fontSize: "60px",
    fontWeight: 300,
    lineHeight: "72px",
    width: 891,
    marginBottom: theme.spacing(15),
  },
  subtitleHighlight: {
    fontWeight: 700,
  },
  quoteIcon: {
    position: "absolute",
    fontSize: "1.67rem",
    color: theme.palette.grey[400],
    top: -17,
    left: -26,
  },
}));

const OurProjects = (props) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Our Projects | Kathmandu Living Labs</title>
      </Head>
      <Container maxWidth="lg" style={{ marginBottom: "10rem" }}>
        <Typography variant="h4" className={classes.pageTitle}>
          Impact
        </Typography>
        <div style={{ position: "relative" }}>
          <Typography className={classes.pageSubtitle}>
            We’ve worked on some{" "}
            <Typography
              display="inline"
              color="primary"
              className={clsx(classes.pageSubtitle, classes.subtitleHighlight)}
            >
              incredible initiatives
            </Typography>
            . Discover how we’ve made an impact
          </Typography>
          <i className={clsx("ri-double-quotes-l", classes.quoteIcon)} />
        </div>
        <ProjectsGrid />
      </Container>
      <SdgCommitment />
      <Container fixed>
        <ProjectsGrid />
      </Container>
      <Container maxWidth="lg">
        <MoreProjects />
      </Container>
    </>
  );
};

export default OurProjects;
