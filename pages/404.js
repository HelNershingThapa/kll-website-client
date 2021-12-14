import Head from "next/head";
import Link from "next/link";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import styles from "styles/404.module.css";
import { Container, Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // imgFill: {
  //   position: "relative",
  //   height: "calc(100vh - 80px)",
  //   width: "100%",
  //   mixBlendMode: "luminosity",
  // },
  // relatedImage: {
  //   background: 'url("../public/Rectangle3.png")',
  //   height: 'calc(100vh - 80px)',
  //   width: "100%",
  //   position: 'relative',
  // },
  scavengerImgFill: {
    position: "relative",
    height: "170px",
    width: "191px",
    [theme.breakpoints.down("xs")]: {
      height: "120px",
      width: "132px",
    },
  },
  container: {
    display: "grid",
    placeContent: "center",
    minHeight: "calc(100vh - 80px)",
    overflow: "auto",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      minHeight: "calc(100vh - 64px)",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1,
    marginTop: theme.spacing(11),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.333rem",
      lineHeight: 1.333,
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
  },
  description: {
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: 1.6667,
    maxWidth: "698px",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
      lineHeight: 1.5,
    },
  },
  btnLabel: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitleLabel: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: 1,
    color: "#fff",
  },
}));

function Custom404() {
  const classes = useStyles();

  return (
    <div className={styles.rootCtr}>
      <Container fixed className={classes.container}>
        <div className={classes.root}>
          <div className={classes.scavengerImgFill}>
            <Image
              src="/not-found.png"
              layout="fill"
              objectFit="contain"
              alt="not found image"
            />
          </div>
          <Typography variant="h1" className={classes.title} align="center">
            Page Not Found
          </Typography>
          <Typography
            variant="h5"
            className={classes.description}
            align="center"
          >
            {`The page you are looking for could not be found on our server.
              Please check your link again for corrections.`}
          </Typography>
          <Link href="/" passHref>
            <Button variant="contained" color="primary">
              <div className={classes.btnLabel}>
                <Typography className={classes.btnTitleLabel}>
                  Take Me Home
                </Typography>{" "}
                <i
                  className="ri-arrow-right-line"
                  style={{ fontSize: "16px", lineHeight: 1 }}
                />
              </div>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Custom404;
