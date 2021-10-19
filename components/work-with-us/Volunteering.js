import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Container, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backgroundCtr: {
    background: theme.palette.grey[900],
    height: 432,
    marginTop: theme.spacing(46),
    [theme.breakpoints.down("xs")]:{
      height: '100%',
    }
  },
  volunteeringCtr: {
    maxWidth: "860px",
    margin: "auto",
    transform: "translateY(-82px)",
    [theme.breakpoints.down("xs")]:{
      transform: "translateY(-50%)",
      width: 238,
    }
  },
  imgFill: {
    position: "relative",
    height: 600,
    width: 400,
    [theme.breakpoints.down("xs")]:{
      width: '100%'
    }
  },
  imageOverlay: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
  volunteer: {
    margin: "auto",
  },
  volunteeringTitle: {
    fontFamily: "Manrope",
    fontSize: "40px",
    fontWeight: 800,
    lineHeight: "48px",
    color: "#E1E8F0",
  },
  volunteeringDescription: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#CAD5E0",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    gridColumnGap: theme.spacing(10),
  },
  volunteeringBtn: {
    padding: theme.spacing(2.5, 5),
    border: "1px solid #CAD5E0",
    background: "inherit",
  },
  volunteeringBtnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#CAD5E0",
  },
}));

function Volunteering() {
  const classes = useStyles();

  return (
    <div className={classes.backgroundCtr}>
      <Container fixed>
        <div className={classes.volunteeringCtr}>
          <div className={classes.imageOverlay}>
            <div className={classes.imgFill}>
              <Image
                src="/volunteering.png"
                layout="fill"
                objectFit="cover"
                alt="volunteering"
              />
            </div>
            <div className={classes.volunteer}>
              <Typography
                className={classes.volunteeringTitle}
                variant="h4"
                style={{ color: "white" }}
              >
                Volunteering
              </Typography>
              <Typography
                className={classes.volunteeringDescription}
                variant="body1"
              >
                Become a part of our initiatives and discover the power of
                helping others!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                classes={{
                  root: classes.volunteeringBtn,
                  label: classes.volunteeringBtnLabel,
                }}
              >
                Send us an Email
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Volunteering;
