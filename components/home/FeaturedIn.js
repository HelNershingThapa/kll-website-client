import { useRouter } from "next/router";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  featuredInCtr: {
    marginTop: "6.89rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "4rem",
    },
  },
  featureInTitle: {
    fontFamily: "Manrope",
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.grey[900],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7778rem",
    },
  },
  feautredInLogos: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "30px",
    gap: "3rem",
    marginBottom: theme.spacing(30),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(15),
      gap: "1.5rem",
    },
  },
  logo: {
    maxHeight: "60px",
    mixBlendMode: "luminosity",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "32px",
    },
  },
  imageFill: {
    position: "relative",
    width: "auto",
    height: "60px",
    "& div": {
      position: "unset !important",
    },
  },
  image: {
    objectFit: "cover",
    width: "unset !important",
    position: "relative !important",
    height: "60px !important",
    mixBlendMode: "luminosity",
    [theme.breakpoints.down("sm")]: {
      height: "42px !important",
    },
    [theme.breakpoints.down("xs")]: {
      height: "32px !important",
    },
  },
}));

const FeaturedIn = ({ featuredIn }) => {
  const router = useRouter();
  const classes = useStyles();
  const { API_URL } = process.env;
  const { IMAGE_URL } = process.env;

  return (
    <div className={classes.featuredInCtr}>
      <Container fixed>
        <Typography
          align="center"
          variant="body1"
          className={classes.featureInTitle}
        >
          We have been featured in
        </Typography>
        <div className={classes.feautredInLogos}>
          {featuredIn.map((logo) => (
            <div key={uid(logo)} className={classes.imageFill}>
              <Image
                className={classes.image}
                src={`${IMAGE_URL}${logo.newspaperLogo.url}`}
                layout="fill"
                objectFit="content"
                alt="Guardian logo"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedIn;
