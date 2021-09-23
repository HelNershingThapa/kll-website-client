import { useRouter } from "next/router";
import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    height: 708,
    background: theme.palette.grey[100],
    paddingTop: "7.78rem",
    paddingBottom: "7.78rem",
  },
  heroTitleContainer: {
    width: "72%",
  },
  heroTitle: {
    color: theme.palette.grey[900],
    fontFamily: "Manrope",
    fontSize: "48px",
    fontWeight: 300,
    lineHeight: "72px",
  },
  heroTitleHighlight: {
    fontFamily: "Manrope",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "72px",
  },
  heroImg: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  heroImageFill: {
    position: "relative",
    height: 708,
    width: 620,
  },
  actionItems: {
    marginTop: theme.spacing(15),
    display: "flex",
    gap: "4rem",
    alignItems: "center",
  },
  button: {
    borderRadius: theme.spacing(3),
    padding: "19px 40px",
  },
  circleIcon: {
    fontSize: "26.67px",
  },
  buttonTitle: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "20px",
    color: theme.palette.grey[50],
  },
  buttonDesc: {
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
      <Container maxWidth="lg">
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
                style={{ fontSize: "32px" }}
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
              <Typography className={classes.buttonDesc}>
                25+ and counting
              </Typography>
            </div>
          </Button>
          <Typography
            className={classes.getInTouch}
          >{`Get In Touch ->`}</Typography>
        </div>
      </Container>
      <div className={classes.heroImg}>
        <div className={classes.heroImageFill}>
          <Image
            src="/hero-img.png"
            layout="fill"
            objectFit="cover"
            alt="KLL"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
