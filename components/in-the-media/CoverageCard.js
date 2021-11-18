import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import { desktop, tablet } from "styles/theme";

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
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3),
    },
  },
  publisherLogo: {
    maxHeight: "40px",
  },
  coverageTitle: {
    marginTop: theme.spacing(5),
    fontWeight: 800,
    color: theme.palette.grey[700],
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.111rem",
      lineHeight: 1.4,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      fontSize: "1rem",
      lineHeight: 1.5556,
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
    "&:hover": {
      cursor: "pointer",
    },
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: 320,
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
  newspaperLogo: {
    maxHeight: "40px",
    width: "100%",
  },
}));

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="subtitle1" className={classes.coverageDescription}>
      {props.children}
    </Typography>
  );
}

const renderers = {
  paragraph: MarkdownParagraph,
  link: Link,
};

function CoverageCard({ coverage }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <div className={classes.imgFill}>
          <Image
            src={`http://localhost:1337${coverage.image.url}`}
            layout="fill"
            objectFit="cover"
            alt="kll"
          />
        </div>
        <div className={classes.overlay}>
          <div>
            {coverage.layoverNewspaperLogo && (
              <img
                className={classes.newspaperLogo}
                src={`http://localhost:1337${coverage.layoverNewspaperLogo.url}`}
                alt="asdasd"
              />
            )}
          </div>
        </div>
      </div>
      <Typography variant="h5" className={classes.coverageTitle}>
        {coverage.headline}
      </Typography>
      {/* eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown children={coverage.description} renderers={renderers} />

      <Typography
        color="primary"
        variant="subtitle1"
        display="inline"
        className={classes.readFull}
        onClick={() => window.open(coverage.link)}
      >
        Read Full Article
      </Typography>
    </div>
  );
}

export default CoverageCard;
