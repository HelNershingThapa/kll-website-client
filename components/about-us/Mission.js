import { uid } from "react-uid";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bgRoot: {
    background: theme.palette.grey[900],
  },
  root: {
    paddingTop: theme.spacing(25),
    maxWidth: 972,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(6),
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(12),
    },
  },
  title: {
    display: "table-caption",
    lineHeight: 1.25,
    color: theme.palette.grey[300],
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7778rem",
      lineHeight: 1.25,
      display: "block",
      textAlign: "center",
    },
  },
  sNo: {
    fontFamily: "Manrope",
    fontSize: "72px",
    fontWeight: 800,
    lineHeight: "72px",
    color: theme.palette.grey[200],
  },
  missions: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(12),
    maxWidth: 768,
  },
  description: {
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "40px",
    color: theme.palette.grey[200],
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8889rem",
      lineHeight: 1.6667,
    },
  },
  missionDescription: {
    fontSize: "1.333rem",
    fontWeight: 400,
    lineHeight: 1.6667,
    color: theme.palette.grey[200],
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8889rem",
      lineHeight: 1.6667,
    },
  },
}));

function Mission({ missions }) {
  const classes = useStyles();

  return (
    <div className={classes.bgRoot}>
      <Container fixed>
        <div className={classes.root}>
          <div>
            <Typography variant="h4" className={classes.title}>
              Our Mission
            </Typography>
          </div>
          <div className={classes.missions}>
            <ul style={{ margin: 0 }}>
              {missions.map((mission, index) => (
                <div key={uid(mission, index)} className={classes.description}>
                  <li>
                    <Typography className={classes.missionDescription}>
                      {mission.text}
                    </Typography>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Mission;
