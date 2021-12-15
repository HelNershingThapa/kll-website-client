import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Container, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: 440,
  },
  descriptors: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontWeight: 800,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.333rem",
      lineHeight: 1.333,
      marginBottom: theme.spacing(2),
    },
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginBottom: theme.spacing(6),
  },
  paragraph: {
    fontWeight: 400,
    color: theme.palette.grey[700],
    marginBottom: "0.8889rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.7778rem",
    },
  },
  actionButtons: {
    display: "flex",
    gap: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  btnRoot: {
    padding: "10px 20px",
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[50],
  },
  btnResourcesLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[600],
  },
}));

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="subtitle1" className={classes.paragraph}>
      {props.children}
    </Typography>
  );
}

const renderers = {
  paragraph: MarkdownParagraph,
};

function JoinOsmMovement({ joinOsmMovement }) {
  const router = useRouter();
  const classes = useStyles();
  const { API_URL } = process.env;

  const { label, description, image } = joinOsmMovement;

  return (
    <Container fixed className={classes.container}>
      <div className={classes.imgFill}>
        <Image
          src={`${API_URL}${image.url}`}
          layout="fill"
          objectFit="cover"
          sizes="710px"
          alt="Join the OSM Movement"
        />
      </div>
      <div className={classes.descriptors}>
        <Typography variant="h3" className={classes.title}>
          {label}
        </Typography>
        {/* eslint-disable react/no-children-prop */}
        <ReactMarkdown children={description} renderers={renderers} />
        <div className={classes.actionButtons}>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.btnRoot, label: classes.btnLabel }}
            onClick={() => window.open("https://www.openstreetmap.org/")}
          >
            Join OSM
          </Button>
          <Button
            variant="outlined"
            classes={{
              root: classes.btnRoot,
              label: classes.btnResourcesLabel,
            }}
            onClick={() => router.push("/resources")}
          >
            View Resources
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default JoinOsmMovement;
