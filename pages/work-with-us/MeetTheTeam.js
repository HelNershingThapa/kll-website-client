import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
  },
  teamCount: {
    display: "flex",
    justifyContent: "center",
    background: "#E1E8F0",
    gap: "67px",
    alignItems: "center",
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
  },
  meetBtn: {
    textTransform: "none",
    padding: theme.spacing(4, 14.625),
  },
  meetBtnLabel: {
    fontSize: "16px",
    lineHeight: "16px",
  },
}));

function MeetTheTeam() {
  const classes = useStyles();
  return (
    <div>
      <Box bgcolor="#E1E8F0" pb={20} pt={20} mt={20}>
        <div className={classes.teamCount}>
          <div
            styles={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h1" className={classes.teamNumber}>
              16
            </Typography>
            <Typography variant="body1" style={{ color: "#304254" }}>
              awesome people at KLL
            </Typography>
          </div>
          <div>
            <Typography className={classes.header} style={{ color: "#304254" }}>
              Our Team
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#1C2A3A" }}
              className={classes.learnTeam}
            >
              Learn about our awesome team of people at Kathmandu Living Labs
            </Typography>
            <Button
              disableElevation
              variant="contained"
              color="primary"
              classes={{ root: classes.meetBtn, label: classes.meetBtnLabel }}
            >
              Meet the Team
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default MeetTheTeam;
