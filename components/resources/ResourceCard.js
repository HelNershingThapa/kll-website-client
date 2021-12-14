import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
import { Typography, Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "32px 24px",
    background: theme.palette.grey[50],
    borderRadius: "12px",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(6, 5),
    },
  },
  logoFill: {
    position: "relative",
    width: 60,
    height: 60,
  },
  title: {
    lineHeight: 1.6,
    color: theme.palette.grey[700],
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
      fontSize: "1rem",
      lineHeight: 1.5556,
    },
  },
  description: {
    color: theme.palette.grey[700],
    marginBottom: "0.8889rem",
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[600],
  },
  btnRoot: {
    padding: "10px 20px",
    marginTop: "4px",
  },
  endIcon: {
    marginLeft: theme.spacing(1),
  },
}));

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="subtitle1" className={classes.description}>
      {props.children}
    </Typography>
  );
}

const renderers = {
  paragraph: MarkdownParagraph,
  link: Link,
};

function Resource({ resource }) {
  const classes = useStyles();
  const { API_URL } = process.env

  const { title, description, link, image } = resource;

  return (
    <div className={classes.root}>
      <div className={classes.logoFill}>
        <Image
          src={`${API_URL}${image.url}`}
          layout="fill"
          objectFit="cover"
          sizes="60px"
          alt=""
        />
      </div>
      <Typography className={classes.title} variant="h6">
        {title}
      </Typography>
      {/* eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown children={description} renderers={renderers} />
      <Button
        variant="outlined"
        classes={{
          root: classes.btnRoot,
          label: classes.btnLabel,
          endIcon: classes.endIcon,
        }}
        endIcon={
          <i
            style={{ fontSize: "14px", color: "#445668" }}
            className="ri-external-link-line"
          />
        }
        onClick={() => window.open(link)}
      >
        Visit Page
      </Button>
    </div>
  );
}

export default Resource;
