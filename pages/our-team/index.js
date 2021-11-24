import { Fragment } from "react";
import Head from "next/head";
import { uid } from "react-uid";
import fetch from "isomorphic-unfetch";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
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
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(10),
      marginTop: theme.spacing(12),
      marginBottom: theme.spacing(12),
    },
  },
}));

function OurTeam({ members, headerStats }) {
  const classes = useStyles();

  const { API_URL } = process.env;

  console.log("header",headerStats);

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
          src={`${API_URL}${headerStats.headerImage.url}`}
          layout="fill"
          objectFit="cover"
          alt="People working at KLL"
          sizes="100vw"
          unoptimized
        />
        <div className={classes.statsOverlay}>
          {headerStats.headerStat.map((stat) => (
            <div key={uid(stat)}>
              <Typography variant="body1" className={classes.statTitle}>
                {stat.label}
              </Typography>
              <Typography variant="h5" className={classes.statValue}>
                {stat.value}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <Container fixed>
        <div className={classes.membersContainer}>
          {members.map((member) => (
            <Fragment key={uid(member)}>
            <TeamMemberCard  memberData={member} />
            </Fragment>
          ))}
          <YouCard />
        </div>
      </Container>
      <WorkingAtKll />
    </>
  );
}

export async function getStaticProps() {
  const {API_URL} = process.env
  const res = await fetch(`${API_URL}/our-team`);
  const headerStats = await res.json();

  const response = await fetch(`${API_URL}/members?_sort=name:ASC&isAlumnus=false`);
  const members = await response.json();

  return {
    props: {
      members,
      headerStats: headerStats,
    },
  };
}

export default OurTeam;