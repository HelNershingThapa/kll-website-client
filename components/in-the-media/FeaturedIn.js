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

function FeaturedIn({ featuredInImages }) {
  const classes = useStyles();
  const { IMAGE_URL } = process.env;


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
          <div key={uid(logo)} className={classes.imageFill}>
            <Image
              src={`${IMAGE_URL}${logo.newspaperLogo.url}`}
              className={classes.image}
              layout="fill"
              objectFit="content"
              sizes="500px"
              alt={logo.caption}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedIn;
