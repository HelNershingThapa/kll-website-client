import { uid } from "react-uid";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import NavBar from "components/NavBar";
// import Footer from "components/Footer";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(20),
  },
  title: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: "32px",
    color: "#0D1829",
  },
  subTitle: {
    marginTop: theme.spacing(3),
    color: "#445668",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <div className={classes.mainContainer}>
          <Typography className={classes.title} variant="h4">
            Showcase
          </Typography> <Typography className={classes.subTitle} variant="body1">
          Take a look at our best videos, products, visualizations and photos all in one place.
            </Typography>
        </div>
      </Container>
    </div>
  );
}
