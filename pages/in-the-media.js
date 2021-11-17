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
  },
  pageTitle: {
    maxWidth: "358px",
    lineHeight: 1.25,
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      maxWidth: "224px",
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
  imgFill: {
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
}));

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function InTheMedia() {
  const classes = useStyles();
  const slider = useRef(null);

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
            <div>
              <div className={classes.headerCoveragesCtr}>
                <div className={classes.headerImgCtr}>
                  <div className={classes.imgFill}>
                    <Image
                      priority
                      src="/in-the-media-header.png"
                      layout="fill"
                      alt="KLL in media"
                    />
                  </div>
                  <div className={classes.headerImgOverlay}>
                    <Image
                      src="/guardian-logo-white.png"
                      width={116}
                      height={48}
                      alt="asdasd"
                    />
                    <div className={classes.controls}>
                      <i
                        className={clsx("ri-arrow-left-line", classes.btnIcon)}
                      />
                      <IconButton
                        aria-label="delete"
                        color="primary"
                        className={classes.iconButton}
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
                    The Guardian covers KLL’s post-earthquake works Team
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.headerCoverageDescription}
                  >
                    The British Newspaper giant, The Guardian, covers Kathmandu
                    Living Lab&apos;s key role in the days following the massive
                    earthquake in the April of last year. The article highlights
                    KLL&apos;s instrumental role in mobilizing thousands of
                    online volunteers in creating rapid digital and paper maps
                    of earthquake affected areas immediately after the
                    earthquake
                  </Typography>
                  <Button variant="outlined">Read the Coverage</Button>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.headerCoveragesCtr}>
                <div className={classes.headerImgCtr}>
                  <div className={classes.imgFill}>
                    <Image
                      src="/Rectangle31.png"
                      layout="fill"
                      alt="KLL in media"
                    />
                  </div>
                  <div className={classes.headerImgOverlay}>
                    <div>
                      <img src="/bbc.png" />
                    </div>
                    <div className={classes.controls}>
                      <IconButton
                        color="primary"
                        className={classes.iconButton}
                        onClick={() => slider?.current?.slickPrev()}
                      >
                        <i
                          className={clsx(
                            "ri-arrow-left-line",
                            classes.btnIcon
                          )}
                        />
                      </IconButton>
                      <i
                        className={clsx("ri-arrow-right-line", classes.btnIcon)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Typography
                    variant="h3"
                    className={classes.headerCoverageTitle}
                  >
                    {`How 'crisis mapping' is helping relief efforts in Nepal`}
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.headerCoverageDescription}
                  >
                    {`"Thousands of people in remote parts of Nepal are still in
                    need of medical help and basic supplies. But with roads
                    damaged and buildings collapsed, knowing what aid is needed
                    and where, is a challenge. One group of Nepalis, backed by a
                    global community, is trying to change that by 'crisis
                    mapping' Nepal", write BBC News.`}
                  </Typography>
                  <Button variant="outlined">Read the Coverage</Button>
                </div>
              </div>
            </div>
          </Slider>
          <div className={classes.blob} />
        </div>

        <FeaturedIn />
      </Container>
      <MoreCoverages />
    </>
  );
}

export default InTheMedia;
