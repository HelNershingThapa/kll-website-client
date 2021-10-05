import Head from "next/head";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import TeamMemberCard from "components/our-team/TeamMemberCard";
import YouCard from "components/our-team/YouCard";
import WorkingAtKll from "components/our-team/WorkingAtKll";

const stats = [
  {
    title: "People",
    value: "16",
  },
  {
    title: "Alumini",
    value: "56",
  },
  {
    title: "Youngest",
    value: "19yrs",
  },
  {
    title: "Oldest",
    value: "36yrs",
  },
];

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(5),
    lineHeight: 1.25,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
  headerImgFill: {
    position: "relative",
    width: "100%",
    height: 620,
    [theme.breakpoints.down("xs")]: {
      height: 121,
    },
  },
  statsOverlay: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    // gap: theme.spacing(25),
    background: "white",
    padding: theme.spacing(8, 15),
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "670px",
    transform: "translate(0%, -50%)",
    [theme.breakpoints.down("xs")]: {
      left: 16,
      right: 16,
      width: "inherit",
      padding: "13px",
    },
  },
  statTitle: {
    fontWeight: 400,
    lineHeight: 1.5556,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7778rem",
      lineHeight: 1,
    },
  },
  statValue: {
    marginTop: theme.spacing(1),
    fontFamily: "Manrope",
    fontWeight: "700",
    lineHeight: 1,
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1.5556,
    },
  },
  content: {
    width: "972px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(25),
  },
  membersContainer: {
    marginTop: theme.spacing(25),
    marginBottom: theme.spacing(25),
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "60px",
    columnGap: "30px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(10),
      marginTop: theme.spacing(12),
      marginBottom: theme.spacing(12),
    },
  },
}));

function OurTeam() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Our Team | Kathmandu Living Labs</title>
      </Head>
      <Container fixed className={classes.container}>
        <Typography variant="h4" className={classes.pageTitle}>
          The Kathmandu Living Labs Team
        </Typography>
      </Container>
      <div className={classes.headerImgFill}>
        <Image
          priority
          src="/our-team-header.png"
          layout="fill"
          objectFit="cover"
          alt="People working at KLL"
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
        <div className={classes.membersContainer}>
          {["", "", "", ""].map((member) => (
            <TeamMemberCard key={uid(member)} />
          ))}
          <YouCard />
        </div>
      </Container>
      <WorkingAtKll />
    </>
  );
}

export default OurTeam;
