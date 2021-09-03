import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  coverageTitle: {
    marginTop: theme.spacing(5),
    fontFamily: "Manrope",
    fontSize: "24px",
    fontWeight: 800,
    lineHeight: "32px",
    color: "#304254",
  },
  coverageDescription: {
    marginTop: theme.spacing(4),
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#445668",
  },
  readFull: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(4),
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
      <Image src="/coverage-image.png" width={470} height={320} alt="kll" />
      <Typography className={classes.coverageTitle}>
        How ‘crisis mapping’ is helping relief efforts in Nepal Team
      </Typography>
      <Typography className={classes.coverageDescription}>
        "Thousands of people in remote parts of Nepal are still in need of
        medical help and basic supplies. But with roads damaged and buildings
        collapsed, knowing what aid is needed and where, is a challenge.{" "}
        <Typography display="inline" className={classes.readFull}>
          Read Full Article
        </Typography>
      </Typography>
      
    </div>
  );
}
