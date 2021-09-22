import { useRouter } from "next/router";
import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";
import ProjectsGrid from "components/our-projects/ProjectsGrid";
import styles from "../../styles/AboutUs.module.css";
const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    color: theme.palette.grey[700],
  },
  teamCount: {
    display: "flex",
    justifyContent: "center",
    background: "#E1E8F0",
    gap: "67px",
    alignItems: "center",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    marginTop: theme.spacing(25),
  },
  teamNumber: {
    fontFamily: "Manrope",
    fontSize: "200px",
    fontWeight: 800,
    lineHeight: "200px",
  },
  learnTeam: {
    width: "338px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    fontWeight: 400,
    lineHeight: "28px",
    color: theme.palette.grey[800]
  },
  meetBtn: {
    padding: theme.spacing(4, 14.625),
  },
  meetBtnLabel: {
    fontSize: "16px",
    lineHeight: "16px",
    color: '#fff',
    fontWeight: 500
  },
  subtitle: {
    fontWeight: 400,
    lineHeight: "40px",
    letterSpacing: "0em",
    color: theme.palette.grey[700],
  },
}));

const FeaturedIn = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.teamCount}>
        <div>
          <div
            styles={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              className={clsx(classes.teamNumber, styles.teamCount)}
            >
              16
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              awesome people at KLL
            </Typography>
          </div>
        </div>
        <div>
          <Typography className={classes.header} style={{ color: "#304254" }}>
            Our Team
          </Typography>
          <Typography variant="body1" className={classes.learnTeam}>
            Learn about our awesome team of people at Kathmandu Living Labs
          </Typography>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            classes={{ root: classes.meetBtn, label: classes.meetBtnLabel }}
            onClick={() => router.push('/our-team')}
          >
            Meet the Team
          </Button>
        </div>
      </div>
    </>
  );
};

export default FeaturedIn;
