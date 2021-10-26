import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Container, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  programsCtr: {
    maxWidth: "860px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(5),
    marginTop: theme.spacing(41),
    maxWidth: "860px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gap: theme.spacing(8),
    },
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 410,
    },
    [theme.breakpoints.down("xs")]: {
      height: 500,
    },
  },
  programTitle: {
    paddingTop: theme.spacing(8),
    fontWeight: 800,
    lineHeight: 1,
    color: theme.palette.grey[700],
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      lineHeight: 1.5556,
    },
  },
  programDescription: {
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  btnRoot: {
    padding: "10px 20px",
    marginTop: theme.spacing(1),
  },
  btnLabel: {
    color: theme.palette.grey[600],
    fontSize: "0.7778rem",
    lineHeight: 1.428,
  },
}));

function Programs() {
  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.programsCtr}>
        <div>
          <div className={classes.imgFill}>
            <Image
              src="/fellowships.png"
              layout="fill"
              objectFit="cover"
              alt="fellowships at KLL"
            />
          </div>
          <Typography variant="h5" className={classes.programTitle}>
            Fellowships
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.programDescription}
            paragraph
          >
            {`Kathmandu Living Labs provides fellowships to individuals with
          promising ideas, and demonstrated interest, to address difficult
          problems Nepalese society is facing.`}
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.programDescription}
            paragraph
          >
            {`KLL fellows receive monthly stipend (depending on the fellow’s
          qualification and experience); a working space with high speed
          internet connection; access to our extensive network; an arrangement
          for both international and in-country mentorship as needed;
          opportunities to attend Kathmandu Living Labs’ weekly innovation hour
          and other activities.`}
          </Typography>
          <Button
            variant="outlined"
            classes={{ root: classes.btnRoot, label: classes.btnLabel }}
          >
            Send Us an Email
          </Button>
        </div>
        <div>
          <div className={classes.imgFill}>
            <Image
              src="/mentorships.png"
              layout="fill"
              objectFit="cover"
              alt="mentorships at KLL"
            />
          </div>
          <Typography variant="h5" className={classes.programTitle}>
            Mentorships
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.programDescription}
            paragraph
          >
            {`Would you like to share your knowledge and guide KLL fellows in
          achieving their challenging aim of making people's everyday life
          better?`}
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.programDescription}
            paragraph
          >
            {`Through Kathmandu Living Labs' mentorship, you will be closely guiding
          and nurturing our fellows and their projects. Or you will be using
          your vast knowledge and experiences to inspire our fellows.`}
          </Typography>
          <Button
            variant="outlined"
            classes={{ root: classes.btnRoot, label: classes.btnLabel }}
          >
            Send Us an Email
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Programs;
