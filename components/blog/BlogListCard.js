import React from "react";
import moment from "moment";
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
import { desktop, tablet } from "../../styles/theme";

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
    position: "relative",
    width: "inherit",
    height: 320,
    [theme.breakpoints.down("md")]: {
      height: 240,
    },
    [theme.breakpoints.down(desktop)]: {
      height: 275,
    },
    [theme.breakpoints.down("sm")]: {
      height: 195,
    },
    [theme.breakpoints.down(tablet)]: {
      height: 372,
    },
    [theme.breakpoints.down("xs")]: {
      height: "62vw",
    },
  },
  timestamp: {
    display: "flex",
    gap: theme.spacing(8),
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      "& h6": {
        fontSize: "14px",
      },
    },
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
      fontSize: "0.778rem",
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
    // lineHeight: "14px",
    // padding: 0,
    color: "#F8FAFC",
    overflow: "visible",
    textTransform: "capitalize",
  },
  focusCard: {
    background: "none",
  },
}));

function BlogListCard({ blog }) {
  const router = useRouter();
  const classes = useStyles();
  const { API_URL } = process.env;

  return (
    <Card
      className={classes.root}
      onClick={() => router.push(`/blog/${blog.slug}`)}
    >
      <CardActionArea
        classes={{
          focusVisible: classes.focusCard,
          focusHighlight: classes.focusCard,
        }}
      >
        <CardMedia
          className={classes.media}
          image={`${API_URL}${blog.coverPhoto?.url}`}
        />
        <Chip
          label={blog.category}
          color="primary"
          classes={{ root: classes.chipRoot, label: classes.chipLabel }}
        />
        <CardContent className={classes.content}>
          <div className={classes.timestamp}>
            <Typography variant="subtitle1">{moment(blog.published_at).format('MMM DD YYYY')}</Typography>
            <Typography variant="subtitle1">{Math.ceil(blog.content.split(" ").length / 200)} min read</Typography>
          </div>
          <Typography className={classes.title} variant="h5">
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {blog.content.substring(0, 127)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogListCard