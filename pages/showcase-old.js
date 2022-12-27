import { useState, useEffect } from "react";
import clsx from "clsx";
import { uid } from "react-uid";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, Button } from "@material-ui/core";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(21),
    color: theme.palette.grey[100],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(10),
    },
  },
  title: {
    fontWeight: "600",
    color: "#0D1829",
  },
  subTitle: {
    color: "#445668",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(4),
    },
  },
  showcaseCtr: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "420px 120px 160px 260px 208px 492px",
    gap: theme.spacing(6),
    "& > div": {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      // gridTemplateRows: "none",
      // gridTemplateColumns: "1fr",
      // gridAutoRows: "auto",
      display: "flex",
      flexDirection: "column",
    },
    "& > div:nth-of-type(1)": {
      gridColumn: "span 3",
      gridRow: "span 2",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& > div:nth-of-type(2)": {
      gridColumn: "span 6",
      gridRow: "span 3",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& > div:nth-of-type(3)": {
      gridColumn: "span 3",
      gridRow: "span 1",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& > div:nth-of-type(4)": {
      gridColumn: "span 3",
      gridRow: "span 2",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& > div:nth-of-type(5)": {
      gridColumn: "span 3",
      gridRow: "span 2",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& > div:nth-of-type(6)": {
      gridColumn: "span 3",
      gridRow: "span 2",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& div:nth-of-type(7)": {
      gridColumn: "span 6",
      gridRow: "span 2",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& > div:nth-of-type(8)": {
      gridColumn: "span 3",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& > div:nth-of-type(9)": {
      gridColumn: "span 6",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& > div:nth-of-type(10)": {
      gridColumn: "span 3",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
        gridRow: "auto",
      },
    },
    "& > div:nth-of-type(11)": {
      gridColumn: "span 3",
    },
    "& div:nth-of-type(2), & div:nth-of-type(7), & div:nth-of-type(9)": {
      "& h5": {
        fontFamily: "Manrope",
        fontSize: "1.7778rem",
        fontWeight: 700,
        lineHeight: 1.25,
        marginBottom: theme.spacing(2),
      },
      "& p": {
        fontSize: "0.8889rem",
        lineHeight: 1.5,
        marginBottom: theme.spacing(8),
      },
    },
    "& div:not(:nth-of-type(2)), & div:not(:nth-of-type(7)), & div:not(:nth-of-type(9)),":
      {
        "& h5": {
          fontFamily: "Manrope",
          fontSize: "1.111rem",
          fontWeight: 700,
          lineHeight: 1.2,
          marginBottom: theme.spacing(3),
        },
        "& p": {
          fontSize: "0.8889rem",
          lineHeight: 1.5,
          marginBottom: theme.spacing(6),
        },
      },
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "& div": {
        position: "unset !important",
      },
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      width: "100% important",
      position: "relative !important",
      height: "unset !important",
    },
  },
  blueBg: {
    background: theme.palette.primary.main,
    height: "100%",
    padding: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  btnRoot: {
    background: theme.palette.blue[700],
    whiteSpace: "nowrap",
  },
  btnIcon: {
    fontSize: "0.8889rem",
    lineHeight: 1,
  },
  btnLabel: {
    color: "#fff",
  },
}));

function Showcase() {
  const classes = useStyles();

  const [category, setCategory] = useState("none");
  const [showcases, setShowcases] = useState([]);
  const [blogCount, setShowcaseCount] = useState(0);
  const { API_URL } = process.env;

  // const hasMore = showcases.length < blogCount;

  useEffect(() => {
    loadFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadFunc() {
    const countRes = await fetch(
      `${API_URL}/showcases/count?${
        category === "none" ? "" : `category=${category}`
      }`
    );
    const resCount = await countRes.json();
    setShowcaseCount(resCount);

    const res = await fetch(
      `${API_URL}/showcases?${
        category === "none" ? "" : `category=${category}`
      }`
    );
    const blogRes = await res.json();
    setShowcases(showcases.concat(blogRes));
  }

  const renderShowcase = (showcase) => {
    switch (showcase.category) {
      case "product":
        if (showcase.youtubeLink) {
          return (
            <ReactPlayer
              url={showcase.youtubeLink}
              width="100%"
              height="100%"
            />
          );
        }
        return (
          <>
            {!showcase.youtubeLink && (
              <div className={classes.imgFill}>
                {showcase.thumbnail?.url && (
                  <Image
                    className={classes.image}
                    src={showcase.thumbnail?.url}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                )}
              </div>
            )}
          </>
        );
      case "web_app":
        return (
          <div className={classes.blueBg}>
            <Typography component="h5">{showcase.title}</Typography>
            <Typography component="p">{showcase.description}</Typography>
            <Button
              classes={{ root: classes.btnRoot, label: classes.btnLabel }}
              className={classes.readButton}
              variant="contained"
              endIcon={
                <i className={clsx("ri-arrow-right-line", classes.btnIcon)} />
              }
            >
              Read Case Study
            </Button>
          </div>
        );
      case "mobile_app":
        return (
          <div className={classes.blueBg}>
            <Typography component="h5">{showcase.title}</Typography>
            <Typography component="p">{showcase.description}</Typography>
            <div>
              <Button
                classes={{ root: classes.btnRoot, label: classes.btnLabel }}
                className={classes.readButton}
                variant="contained"
                endIcon={
                  <i className={clsx("ri-arrow-right-line", classes.btnIcon)} />
                }
              >
                Read Case Study
              </Button>
            </div>
          </div>
        );
      default:
        return;
    }
  };

  return (
    <>
      <Head>
        <title>Showcase | Kathmandu Living Labs</title>
      </Head>
      <Container fixed>
        <div className={classes.mainContainer}>
          <Typography className={classes.title} variant="h4">
            Showcase
          </Typography>{" "}
          <Typography className={classes.subTitle} variant="body1">
            Take a look at our best videos, products, visualizations and photos
            all in one place.
          </Typography>
          <div className={classes.showcaseCtr}>
            {showcases.map((showcase) => (
              <div key={uid(showcase)} className={classes.showcase}>
                {renderShowcase(showcase)}
                {/* {!showcase.youtubeLink && <div className={classes.imgFill}>
                <Image src={`${API_URL}${showcase.thumbnail.url}`} layout="fill" objectFit="cover" alt="" />
              </div>}
              {showcase.youtubeLink && <ReactPlayer url={showcase.youtubeLink} width="100%" height="100%" />} */}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Showcase;
