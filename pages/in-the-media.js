import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import { useRef } from "react";
import Head from "next/head";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Container,
  Typography,
  Grid,
  IconButton,
  CircularProgress,
  Link,
} from "@material-ui/core";
import Slider from "react-slick";
import CoverageCard from "components/in-the-media/CoverageCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoreCoverages from "../components/in-the-media/MoreCoverages";
import FeaturedIn from "../components/in-the-media/FeaturedIn";
import { desktop, tablet } from "../styles/theme";

const useStyles = makeStyles((theme) => ({
  pageCtr: {
    marginTop: theme.spacing(12),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
    },
  },
  pageTitle: {
    maxWidth: "358px",
    lineHeight: 1.25,
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      maxWidth: "224px",
      marginBottom: theme.spacing(6),
    },
  },
  headerCoveragesCtr: {
    display: "grid",
    gridTemplateColumns: "1.13fr 1fr",
    gap: theme.spacing(8),
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: theme.spacing(4),
    },
  },
  headerImgCtr: {
    position: "relative",
  },
  coverImgFill: {
    position: "relative",
    width: "100%",
    height: "560px",
    [theme.breakpoints.down(tablet)]: {
      height: "74vw",
    },
  },
  headerImgOverlay: {
    position: "absolute",
    background: "rgba(13, 24, 41, 0.6)",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    padding: theme.spacing(8),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4),
    },
  },
  headerCoverageTitle: {
    width: "90%",
    [theme.breakpoints.down(desktop)]: {
      fontSize: "1.7778rem",
      lineHeight: 1.25,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: 1.5556,
    },
  },
  headerCoverageDescription: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(8),
    fontSize: "1.111rem",
    fontWeight: 300,
    lineHeight: 1.6,
    color: theme.palette.grey[800],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5),
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5),
      fontSize: "0.8889rem",
      lineHeight: 1.5,
    },
  },
  iconButton: {
    background: "#3E64FF !important", //overriding default transparent background color
    height: 60,
    width: 60,
  },
  iconButtonTransparent: {
    background: "transparent !important",
  },
  controls: {
    display: "flex",
    gap: "52px",
    alignItems: "center",
  },
  blob: {
    width: "137px",
    height: "137px",
    background: "blue",
    borderRadius: "50%",
    position: "absolute",
    bottom: "-68.5px",
    left: "-68.5px",
    zIndex: -1,
    [theme.breakpoints.down(1625)]: {
      display: "none",
    },
  },
  btnIcon: {
    fontSize: "24px",
    color: "white",
  },
  newspaperLogo: {
    maxHeight: "48px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "24px",
    },
  },
}));

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.headerCoverageDescription}>
      {props.children}
    </Typography>
  );
}

const renderers = {
  paragraph: MarkdownParagraph,
  link: Link,
};

function InTheMedia({ mediaCoverages, inTheMedia }) {
  const classes = useStyles();
  const slider = useRef(null);
  const { API_URL } = process.env;

  const headerCoverages = mediaCoverages.filter(
    (coverage) => coverage.isTopCoverage
  );

  const notHeaderCoverages = mediaCoverages.filter(
    (coverage) => !coverage.isTopCoverage
  );

  return (
    <>
      <Head>
        <title>In the Media | Kathmandu Living Labs</title>
      </Head>
      <Container fixed className={classes.pageCtr}>
        <Typography variant="h4" className={classes.pageTitle}>
          Kathmandu Living Labs in the media
        </Typography>

        <div style={{ position: "relative" }}>
          <Slider ref={slider} {...settings}>
            {headerCoverages.map((coverage, index) => (
              <div key={uid(coverage, index)}>
                <div className={classes.headerCoveragesCtr}>
                  <div className={classes.headerImgCtr}>
                    <div className={classes.coverImgFill}>
                      <Image
                        priority
                        src={`${API_URL}${coverage.image.url}`}
                        layout="fill"
                        objectFit="cover"
                        sizes="750px"
                        alt="KLL in media"
                      />
                    </div>
                    <div className={classes.headerImgOverlay}>
                      <div>
                        <img
                          className={classes.newspaperLogo}
                          src={`${API_URL}${coverage.layoverNewspaperLogo.url}`}
                          alt="asdasd"
                        />
                      </div>
                      <div className={classes.controls}>
                        <IconButton
                          aria-label="delete"
                          color="primary"
                          disabled={index === 0}
                          className={clsx(
                            classes.iconButton,
                            index === 0 && classes.iconButtonTransparent
                          )}
                          onClick={() => slider?.current?.slickPrev()}
                        >
                          <i
                            className={clsx(
                              "ri-arrow-left-line",
                              classes.btnIcon
                            )}
                          />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          color="primary"
                          disabled={index === headerCoverages.length - 1}
                          className={clsx(
                            classes.iconButton,
                            index === headerCoverages.length - 1 &&
                              classes.iconButtonTransparent
                          )}
                          onClick={() => slider?.current?.slickNext()}
                        >
                          <i
                            className={clsx(
                              "ri-arrow-right-line",
                              classes.btnIcon
                            )}
                          />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Typography
                      variant="h3"
                      className={classes.headerCoverageTitle}
                    >
                      {coverage.headline}
                    </Typography>
                    {/* eslint-disable react/no-children-prop */}
                    <ReactMarkdown
                      children={coverage.description}
                      renderers={renderers}
                    />
                    <Button
                      variant="outlined"
                      onClick={() => window.open(coverage.link)}
                    >
                      Read the Coverage
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className={classes.blob} />
        </div>

        <FeaturedIn featuredInImages={inTheMedia.featuredInImages} />
      </Container>
      <MoreCoverages coverages={notHeaderCoverages} />
    </>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/media-coverages`);
  const mediaCoverages = await res.json();

  const response = await fetch(`${API_URL}/in-the-media`);
  const inTheMedia = await response.json();

  if (!mediaCoverages || !inTheMedia) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mediaCoverages,
      inTheMedia,
    },
    revalidate: 84600,
  };
}

export default InTheMedia;
