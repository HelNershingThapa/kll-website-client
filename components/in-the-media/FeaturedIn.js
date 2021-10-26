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
  logoFill: {
    maxHeight: "60px",
  },
}));

export default function CenteredGrid() {
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
        {["", "", "", ""].map((logo) => (
          <img
            key={uid(logo)}
            src="/guardian-black.png"
            className={classes.img}
            alt="Guardian logo"
          />
        ))}
      </div>
    </div>
  );
}
