import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Container, Typography, Button } from "@material-ui/core";
import { tablet } from "styles/theme";
import { KLL_EMAIL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  backgroundCtr: {
    background: theme.palette.grey[900],
    height: 432,
    marginTop: theme.spacing(46),
    [theme.breakpoints.down(tablet)]: {
      height: "100%",
      marginTop: "237px",
    },
  },
  volunteeringCtr: {
    maxWidth: "860px",
    margin: "auto",
    // transform: "translateY(-82px)",
    [theme.breakpoints.down(tablet)]: {
      // transform: "translateY(-50%)",
      maxWidth: 238,
    },
  },
  imgFill: {
    position: "relative",
    height: 600,
    width: 400,
    // marginTop: "-82px",
    transform: "translateY(0px)",
    [theme.breakpoints.down(tablet)]: {
      width: "100%",
      height: "357px",
      marginTop: 0,
      transform: "translateY(-50%)",
    },
  },
  imageOverlay: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(10),
    placeContent: "center",
    height: 432,
    [theme.breakpoints.down(tablet)]: {
      gridGap: theme.spacing(5),
      gridTemplateColumns: "1fr",
    },
  },
  volunteer: {
    margin: "auto",
    [theme.breakpoints.down(tablet)]: {
      marginTop: "-179px",
      paddingBottom: theme.spacing(12),
    },
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

function Volunteering({ volunteering }) {
  const classes = useStyles();
  const { label, description, image } = volunteering;

  return (
    <div className={classes.backgroundCtr}>
      <Container fixed>
        <div className={classes.volunteeringCtr}>
          <div className={classes.imageOverlay}>
            <div className={classes.imgFill}>
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                sizes="600px"
                alt="volunteering"
              />
            </div>
            <div className={classes.volunteer}>
              <Typography
                className={classes.volunteeringTitle}
                variant="h4"
                style={{ color: "white" }}
              >
                {label}
              </Typography>
              <Typography
                className={classes.volunteeringDescription}
                variant="body1"
              >
                {description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                classes={{
                  root: classes.volunteeringBtn,
                  label: classes.volunteeringBtnLabel,
                }}
                onClick={() => window.open(`mailto:${KLL_EMAIL}`)}
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
