import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import NavBar from "components/NavBar";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import abousUsImg from "public/about-us-header.png";
import TeamMemberCard from "components/our-team/TeamMemberCard";
import YouCard from "components/our-team/YouCard";

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
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: "32px",
    color: "#0D1829",
    lineHeight: "40px",
  },
  imageFullWidth: {
    width: "100vw",
    marginLeft: "calc(-50vw + 49.5%)",
  },
  statsOverlay: {
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(25),
    background: "white",
    position: "absolute",
    padding: theme.spacing(8, 15),
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "670px",
    transform: "translate(0%, -50%)",
  },
  statTitle: {
    fontWeight: 400,
    lineHeight: "28px",
  },
  statValue: {
    marginTop: theme.spacing(1),
    fontFamily: "Manrope",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "24px",
  },
  content: {
    width: "972px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(25),
  },
  imgFill: {
    // position: "relative",
    // width: "100%",
    // height: "521px",
  },
  membersContainer: {
    marginTop: theme.spacing(25),
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    rowGap: "60px",
    columnGap: "30px",
  },
  workingContainer: {
    height: 600,
    background: "#F0F5F9",
    padding: theme.spacing(15)
  },
  workingTitle: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color: theme.palette.grey[800],
  },
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" style={{ marginBottom: "10rem" }}>
        <Typography variant="h4" className={classes.pageTitle}>
          About Us
        </Typography>
        <div className={classes.imageFullWidth}>
          <div className={classes.imgFill}>
            <Image
              src="/our-team-header.png"
              layout="responsive"
              width={1920}
              height={600}
              alt="People working at KLL"
            />
          </div>
          <div className={classes.statsOverlay}>
            {stats.map((stat) => (
              <div key={uid(stat)}>
                <Typography variant="body1" className={classes.statTitle}>
                  {stat.title}
                </Typography>
                <Typography variant="h6" className={classes.statValue}>
                  {stat.value}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.membersContainer}>
          {["", "", "", ""].map((member) => (
            <TeamMemberCard key={uid(member)} />
          ))}
          <YouCard />
        </div>
      </Container>
      <div className={classes.workingContainer}>
        <Typography className={classes.workingTitle} align="center">
          Working at Kathmandu Living Labs
        </Typography>
        <Typography style={{marginTop: '6rem'}} align="center">
          [ INSERT IMAGES HERE ]
        </Typography>
      </div>
    </>
  );
}

export default AboutUs;
