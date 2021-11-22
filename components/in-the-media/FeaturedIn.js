import { uid } from "react-uid";
import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { desktop, tablet } from "styles/theme";

const useStyles = makeStyles((theme) => ({
  featuredInCtr: {
    marginTop: theme.spacing(20),
  },
  featureInTitle: {
    fontFamily: "Manrope",
    fontSize: "1.111rem",
    fontWeight: 600,
    lineHeight: 1.2,
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7778rem",
      fontWeight: 600,
      lineHeight: 1,
      color: theme.palette.grey[900],
    },
  },
  feautredInLogos: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(20),
    gap: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(4),
      marginBottom: theme.spacing(12),
    },
  },
  img: {
    maxHeight: "60px",
    mixBlendMode: "luminosity",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "42px",
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: "32px",
    },
  },
}));

function FeaturedIn({ featuredInImages }) {
  const classes = useStyles();

  return (
    <div className={classes.featuredInCtr}>
      <Typography
        align="center"
        variant="body1"
        className={classes.featureInTitle}
      >
        We have been featured in
      </Typography>
      <div className={classes.feautredInLogos}>
        {featuredInImages.map((logo) => (
          <img
            key={uid(logo)}
            src={`http://localhost:1337${logo.newspaperLogo.url}`}
            className={classes.img}
            alt={logo.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedIn;
