import { useRouter } from "next/router";
import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    // display: "flex",
    background: theme.palette.grey[100],
    // paddingTop: "7.78rem",
    // paddingBottom: "7.78rem",
    [theme.breakpoints.down("sm")]: {
      // paddingTop: theme.spacing(15),
      // paddingBottom: theme.spacing(15),
      display: "flex",
      flexDirection: "column",
    },
  },
  container: {
    // marginRight: 0,
    // paddingRight: 0,
    display: "flex",
    gap: "22px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(15),
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(15),
    },
  },
  actionItemsWrapper: {
    height: 708,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroTitleContainer: {
    // width: "72%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  heroTitle: {
    color: theme.palette.grey[900],
    fontFamily: "Manrope",
    fontSize: "48px",
    fontWeight: 300,
    lineHeight: "72px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      lineHeight: "32px",
    },
  },
  heroTitleHighlight: {
    fontFamily: "Manrope",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "72px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      lineHeight: "32px",
    },
  },
  heroImg: {
    position: "absolute",
    top: 0,
    right: 0,
    [theme.breakpoints.down("xs")]: {
      position: "static",
    },
  },
  heroImageFill: {
    position: "relative",
    height: 708,
    width: 620,
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "80vw",
      marginLeft: "-16px",
      marginRight: "-16px"
    },
  },
  actionItems: {
    marginTop: theme.spacing(15),
    display: "flex",
    gap: "4rem",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(10),
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(6),
    },
  },
  button: {
    borderRadius: theme.spacing(3),
    padding: "19px 40px",
    [theme.breakpoints.down("xs")]: {
      borderRadius: theme.spacing(2),
      padding: "11px 35px",
    },
  },
  circleIcon: {
    fontSize: "32px !important",
  },
  buttonTitle: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "20px",
    color: theme.palette.grey[50],
  },
  buttonSubtitle: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "14px",
  },
  buttonTitleCtr: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  endIcon: {
    marginLeft: "18px",
  },
  getInTouch: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "16px",
    color: theme.palette.grey[600],
  },
}));

const Hero = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Container fixed className={classes.container}>
        <div className={classes.actionItemsWrapper}>
          <div className={classes.heroTitleContainer}>
            <Typography variant="h2" className={classes.heroTitle}>
              A{" "}
              <Typography
                className={classes.heroTitleHighlight}
                color="primary"
                display="inline"
              >
                pioneer civic-tech enterprise
              </Typography>{" "}
              providing humane data and technology solutions to businessnes,
              governments, development partners and the civil society
            </Typography>
          </div>
          <div className={classes.actionItems}>
            <Button
              color="primary"
              variant="contained"
              classes={{ root: classes.button, endIcon: classes.endIcon }}
              endIcon={
                <i
                  className={clsx(
                    "ri-arrow-right-circle-line",
                    classes.circleIcon
                  )}
                />
              }
              onClick={() => router.push("/our-projects")}
            >
              <div className={classes.buttonTitleCtr}>
                <Typography className={classes.buttonTitle}>
                  See Our Work
                </Typography>
                <Typography className={classes.buttonSubtitle}>
                  25+ and counting
                </Typography>
              </div>
            </Button>
            <Typography
              className={classes.getInTouch}
            >{`Get In Touch ->`}</Typography>
          </div>
        </div>
        <div className={classes.heroImg}>
          <div className={classes.heroImageFill}>
            <Image
              priority
              src="/hero-img.png"
              layout="fill"
              objectFit="cover"
              alt="KLL"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
