import { makeStyles } from "@material-ui/core/styles";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Container, Typography, Button } from "@material-ui/core";
import { KLL_EMAIL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  programsCtr: {
    maxWidth: "860px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(5),
    marginTop: theme.spacing(41),
    maxWidth: "860px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gap: theme.spacing(8),
      marginTop: theme.spacing(8),
    },
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 410,
    },
    [theme.breakpoints.down("xs")]: {
      height: 500,
    },
  },
  programTitle: {
    paddingTop: theme.spacing(8),
    fontWeight: 800,
    lineHeight: 1,
    color: theme.palette.grey[700],
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      lineHeight: 1.5556,
    },
  },
  programDescription: {
    color: theme.palette.grey[600],
    marginBottom: "0.8889rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  btnRoot: {
    padding: "10px 20px",
    marginTop: theme.spacing(1),
  },
  btnLabel: {
    color: theme.palette.grey[600],
    fontSize: "0.7778rem",
    lineHeight: 1.428,
  },
}));

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="subtitle1" className={classes.programDescription}>
      {props.children}
    </Typography>
  );
}

const renderers = {
  paragraph: MarkdownParagraph,
};

function Programs({ fellowships, mentorships }) {
  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.programsCtr}>
        <div>
          <div className={classes.imgFill}>
            <Image
              src={fellowships.image.url}
              layout="fill"
              objectFit="cover"
              sizes="450px"
              alt="fellowships at KLL"
            />
          </div>
          <Typography variant="h5" className={classes.programTitle}>
            {fellowships.label}
          </Typography>
          {/* eslint-disable react/no-children-prop */}
          <ReactMarkdown
            children={fellowships.description}
            renderers={renderers}
          />
          <Button
            variant="outlined"
            classes={{ root: classes.btnRoot, label: classes.btnLabel }}
            onClick={() => window.open(`mailto:${KLL_EMAIL}`)}
          >
            Send Us an Email
          </Button>
        </div>
        <div>
          <div className={classes.imgFill}>
            <Image
              src={mentorships.image.url}
              layout="fill"
              objectFit="cover"
              sizes="450px"
              alt="mentorships at KLL"
            />
          </div>
          <Typography variant="h5" className={classes.programTitle}>
            {mentorships.label}
          </Typography>
          {/* eslint-disable react/no-children-prop */}
          <ReactMarkdown
            children={mentorships.description}
            renderers={renderers}
          />
          <Button
            variant="outlined"
            classes={{ root: classes.btnRoot, label: classes.btnLabel }}
            onClick={() => window.open(`mailto:${KLL_EMAIL}`)}
          >
            Send Us an Email
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Programs;
