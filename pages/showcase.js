import { uid } from "react-uid";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(21),
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
    marginBottom: theme.spacing(10),
  },
  showcaseCtr: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "420px 120px 160px 260px 208px 492px",
    gap: theme.spacing(6),
    "& div:nth-of-type(1)": {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
    "& div:nth-of-type(2)": {
      gridColumn: "span 6",
      gridRow: "span 3",
    },
    "& div:nth-of-type(3)": {
      gridColumn: "span 3",
      gridRow: "span 1",
    },
    "& div:nth-of-type(4)": {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
    "& div:nth-of-type(5)": {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
    "& div:nth-of-type(6)": {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
    "& div:nth-of-type(7)": {
      gridColumn: "span 6",
      gridRow: "span 2",
    },
    "& div:nth-of-type(8)": {
      gridColumn: "span 3",
    },
    "& div:nth-of-type(9)": {
      gridColumn: "span 6",
    },
    "& div:nth-of-type(10)": {
      gridColumn: "span 3",
    },
    "& div:nth-of-type(11)": {
      gridColumn: "span 3",
    },
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Showcase | Kathmandu Living Labs</title>
      </Head>
      <Container maxWidth="lg">
        <div className={classes.mainContainer}>
          <Typography className={classes.title} variant="h4">
            Showcase
          </Typography>{" "}
          <Typography className={classes.subTitle} variant="body1">
            Take a look at our best videos, products, visualizations and photos
            all in one place.
          </Typography>
          <div className={classes.showcaseCtr}>
            {["", "", "", "", "", "", "", "", "", "", "",].map(dummy => <div key={uid(dummy)} style={{ padding: "20px", backgroundColor: "red" }}>
              Hello world
            </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
