import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import blogImg from "public/Rectangle32.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    background: "inherit",
    "&:hover": {
      background: "none",
    },
  },
  media: {
    width: "inherit",
    height: 320,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: 234,
    },
  },
  timestamp: {
    display: "flex",
    gap: theme.spacing(8),
    color: theme.palette.grey[600],
  },
  content: {
    marginTop: theme.spacing(5),
    padding: 0,
  },
  title: {
    color: "#304254",
    fontWeight: 800,
    marginTop: theme.spacing(1),
  },
  description: {
    marginTop: theme.spacing(4),
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  chipRoot: {
    position: "absolute",
    top: 12,
    left: 12,
    padding: "6px 12px",
    borderRadius: "8px",
  },
  chipLabel: {
    fontSize: "14px",
    fontWeight: 500,
    // lineHeight: "14px", letter 'g' gets hidden, solve this!!
    padding: 0,
    color: "#F8FAFC",
  },
  focusCard: {
    background: "none",
  },
}));

export default function MediaCard() {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => router.push("/blog/asdasd")}>
      <CardActionArea
        classes={{
          focusVisible: classes.focusCard,
          focusHighlight: classes.focusCard,
        }}
      >
        <CardMedia
          className={classes.media}
          image="/Rectangle32.png"
          title="Contemplative Reptile"
        />
        <Chip
          label="Mapping"
          color="primary"
          classes={{ root: classes.chipRoot, label: classes.chipLabel }}
        />
        <CardContent className={classes.content}>
          <div className={classes.timestamp}>
            <Typography variant="subtitle1">May 06 2021</Typography>
            <Typography variant="subtitle1">15 min read</Typography>
          </div>
          <Typography className={classes.title} variant="h5">
            GeoNight 2021: Contributing to the pandemic stricken tourism of
            Nepal
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            Thamel is the heart of Nepali tourism. The narrow, winding,
            crisscrossing gallis feel like a maze with colorful shops,
            displays...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
