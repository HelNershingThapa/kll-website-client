import { useRouter } from "next/router";
import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";
import ProjectsGrid from "components/our-projects/ProjectsGrid";

const useStyles = makeStyles((theme) => ({
  featuredInCtr: {
    marginTop: "6.89rem",
  },
  featureInTitle: {
    fontFamily: "Manrope",
    fontWeight: 700,
    lineHeight: "18px",
    letterSpacing: "0em",
    color: theme.palette.grey[900],
  },
  feautredInLogos: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "30px",
    marginBottom: theme.spacing(30),
  },
}));

const FeaturedIn = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <div className={classes.featuredInCtr}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant="body1"
          className={classes.featureInTitle}
        >
          We have been featured in
        </Typography>
        <div className={classes.feautredInLogos}>
          {["", "", "", ""].map((logo) => (
            <Image
              key={uid(logo)}
              src="/guardian-black.png"
              width={182}
              height={60}
              alt="Guardian logo"
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedIn;
