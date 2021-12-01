import { useRouter } from "next/router";
import clsx from "clsx";
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import { desktop, tablet } from "styles/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1440px 1fr",
    background: theme.palette.grey[100],
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1080px 1fr",
    },
    [theme.breakpoints.down(desktop)]: {
      gridTemplateColumns: "1fr 932px 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "708px",
      justifyContent: "center",
    },
    [theme.breakpoints.down(tablet)]: {
      gridTemplateColumns: "540px",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "100%",
      padding: "0px 16px",
    },
  },
  container: {
    display: "flex",
    gap: "22px",
    padding: 0,
    margin: 0,
    // maxWidth: "100%",
    gridColumn: "2 / 4",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "1 / -1",
      flexDirection: "column",
      gap: theme.spacing(15),
      paddingTop: theme.spacing(15),
    },
  },
  actionItemsWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroTitleContainer: {
    // width: "72%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  heroTitle: {
    color: theme.palette.grey[900],
    fontFamily: "Manrope",
    fontSize: "2.6667rem",
    fontWeight: 300,
    lineHeight: 1.5,
    "& strong": {
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      lineHeight: 1.5,
    },
    [theme.breakpoints.down(desktop)]: {
      fontSize: "36px",
      lineHeight: 1.5,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      lineHeight: "32px",
    },
  },
  imgFill: {
    width: 620,
    height: 708,
    flexShrink: "0",
    [theme.breakpoints.down(desktop)]: {
      width: 470,
      height: 575,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "80vw",
      marginLeft: "calc(-50vw + 50%)"
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  // heroImg: {
  //   // position: "absolute",
  //   top: 0,
  //   right: 0,
  //   [theme.breakpoints.down("xs")]: {
  //     position: "static",
  //   },
  // },
  // heroImageFill: {
  //   position: "relative",
  //   height: 708,
  //   width: 620,
  //   [theme.breakpoints.down("sm")]: {
  //     width: "100vw",
  //     height: "80vw",
  //     marginLeft: "-16px",
  //     marginRight: "-16px",
  //   },
  // },
  actionItems: {
    marginTop: theme.spacing(15),
    display: "flex",
    gap: "4rem",
    alignItems: "center",
    [theme.breakpoints.down(desktop)]: {
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(10),
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(6),
    },
  },
  button: {
    borderRadius: theme.spacing(3),
    padding: "19px 40px",
    [theme.breakpoints.down("xs")]: {
      borderRadius: theme.spacing(2),
      padding: "11px 35px",
    },
  },
  circleIcon: {
    fontSize: "32px !important",
  },
  buttonTitle: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "20px",
    color: theme.palette.grey[50],
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      lineHeight: 1,
    },
  },
  buttonSubtitle: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: 1,
    },
  },
  buttonTitleCtr: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  endIcon: {
    marginLeft: theme.spacing(4),
  },
  getInTouch: {
    fontWeight: 500,
    lineHeight: 1,
    color: theme.palette.grey[600],
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "35px",
    },
  },
}));

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="subtitle1" className={classes.heroTitle}>
      {props.children}
    </Typography>
  );
}

const renderers = {
  paragraph: MarkdownParagraph,
};

const Hero = ({ title, image }) => {
  const router = useRouter();
  const classes = useStyles();

  console.log("title", title);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.actionItemsWrapper}>
          <div className={classes.heroTitleContainer}>
            {/* eslint-disable-next-line react/no-children-prop */}
            <ReactMarkdown children={title} renderers={renderers} />
          </div>
          <div className={classes.actionItems}>
            <Button
              color="primary"
              variant="contained"
              classes={{ root: classes.button, endIcon: classes.endIcon }}
              endIcon={
                <i
                  className={clsx(
                    "ri-arrow-right-circle-line",
                    classes.circleIcon
                  )}
                />
              }
              onClick={() => router.push("/our-projects")}
            >
              <div className={classes.buttonTitleCtr}>
                <Typography className={classes.buttonTitle}>
                  See Our Work
                </Typography>
                <Typography className={classes.buttonSubtitle}>
                  25+ and counting
                </Typography>
              </div>
            </Button>
            <Link href="/contact-us" passHref>
              <Typography
                variant="subtitle1"
                className={classes.getInTouch}
              >{`Get In Touch ->`}</Typography>
            </Link>
          </div>
        </div>
        <div className={classes.imgFill}>
          <img src="/hero-img.png" className={classes.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
