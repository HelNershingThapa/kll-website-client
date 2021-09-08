import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import NavBar from "components/NavBar";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import abousUsImg from "public/about-us-header.png";

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
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h4" className={classes.pageTitle}>
          About Us
        </Typography>
        <div className={classes.imageFullWidth}>
          <div className={classes.imgFill}>
            <Image
              src="/about-us-header.png"
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
                <Typography variant="h6" className={classes.statValue}>
                  {stat.value}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default AboutUs;
