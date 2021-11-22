import { useRouter } from "next/router";
import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";
import ProjectsGrid from "components/our-projects/ProjectsGrid";
import styles from "../../styles/AboutUs.module.css";

const useStyles = makeStyles((theme) => ({
  bgCtr: {
    background: theme.palette.grey[100],
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  teamCount: {
    display: "flex",
    justifyContent: "center",
    gap: "67px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      gap: theme.spacing(8),
      alignItems: "flex-start",
    },
  },
  numberCtr: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-start",
    },
  },
  teamNumber: {
    fontFamily: "Manrope",
    fontSize: "200px",
    fontWeight: 800,
    lineHeight: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 150,
    },
  },
  learnTeam: {
    width: "338px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    fontWeight: 400,
    lineHeight: 1.5556,
    color: theme.palette.grey[800],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(4),
      lineHeight: 1.428,
    },
  },
  header: {
    lineHeight: 1.25,
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1.6,
    },
  },
  meetBtn: {
    padding: theme.spacing(4, 14.625),
  },
  meetBtnLabel: {
    fontSize: "16px",
    lineHeight: "16px",
    color: "#fff",
    fontWeight: 500,
  },
  subtitle: {
    fontSize: "1.333rem",
    fontWeight: 400,
    lineHeight: 1.6667,
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.111rem",
      lineHeight: 1.6,
    },
  },
}));

const FeaturedIn = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.bgCtr}>
        <Container fixed>
          <div className={classes.teamCount}>
            <div className={classes.numberCtr}>
              <Typography
                variant="h1"
                className={clsx(classes.teamNumber, styles.teamCount)}
              >
                16
              </Typography>
              <Typography className={classes.subtitle}>
                awesome people at KLL
              </Typography>
            </div>
            <div>
              <Typography variant="h4" className={classes.header}>
                Our Team
              </Typography>
              <Typography variant="body1" className={classes.learnTeam}>
              Get to know our awesome team at Kathmandu Living Labs
              </Typography>
              <Button
                disableElevation
                variant="contained"
                color="primary"
                classes={{ root: classes.meetBtn, label: classes.meetBtnLabel }}
                onClick={() => router.push("/our-team")}
              >
                Meet the Team
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FeaturedIn;
