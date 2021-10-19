import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    position: "relative",
  },
  overlay: {
    background: "rgba(13, 24, 41, 0.4)",
    position: "absolute",
    background: "rgba(13, 24, 41, 0.6)",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    padding: theme.spacing(6),
    display: "flex",
    alignItems: "flex-end",
  },
  coverageTitle: {
    marginTop: theme.spacing(5),
    fontWeight: 800,
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
    },
  },
  coverageDescription: {
    marginTop: theme.spacing(4),
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  readFull: {
    fontWeight: 600,
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: 320,
    [theme.breakpoints.down("xs")]: {
      height: "67vw",
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <div className={classes.imgFill}>
          <Image
            src="/coverage-image.png"
            layout="fill"
            objectFit="cover"
            alt="kll"
          />
        </div>
        <div className={classes.overlay}>
          <Image src="/bbc.png" width={58} height={40} alt="asdasd" />
        </div>
      </div>
      <Typography variant="h5" className={classes.coverageTitle}>
        How ‘crisis mapping’ is helping relief efforts in Nepal Team
      </Typography>
      <Typography variant="subtitle1" className={classes.coverageDescription}>
        &quot;Thousands of people in remote parts of Nepal are still in need of
        medical help and basic supplies. But with roads damaged and buildings
        collapsed, knowing what aid is needed and where, is a challenge.{" "}
        <Typography color="primary" variant="subtitle1" display="inline" className={classes.readFull}>
          Read Full Article
        </Typography>
      </Typography>
    </div>
  );
}
