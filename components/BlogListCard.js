import React from "react";
import {useRouter} from 'next/router';
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
    width: 470,
    border: "none",
    boxShadow: "none",
    marginBottom: theme.spacing(12),
    borderRadius: 0,
  },
  media: {
    width: "inherit",
    height: 320,
    position: 'relative',
  },
  timestamp: {
    display: "flex",
    gap: "1.78rem",
    color: "#304254",
  },
  content: {
    marginTop: theme.spacing(5),
    padding: 0,
  },
  title: {
    fontFamily: "Manrope",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    color: "#304254",
    marginTop: theme.spacing(1),
  },
  description: {
    marginTop: theme.spacing(4),
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#445668",
  },
  chipRoot: {
    position: 'absolute',
    top: 12,
    left: 12,
    padding: "6px 12px",
    background: "#3E64FF",
    borderRadius: "8px",
  },
  chipLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "14px",
    padding: 0,
    color: "#F8FAFC",
  },
}));

export default function MediaCard() {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => router.push('/blog/asdasd')}>
      <CardActionArea>
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
            <Typography variant="subtitle2">May 06 2021</Typography>
            <Typography variant="subtitle2">15 min read</Typography>
          </div>
          <Typography className={classes.title} variant="h5">
            GeoNight 2021: Contributing to the pandemic stricken tourism of
            Nepal
          </Typography>
          <Typography className={classes.description}>
            Thamel is the heart of Nepali tourism. The narrow, winding,
            crisscrossing gallis feel like a maze with colorful shops,
            displays...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
