import { useRef, useState } from "react";
import { uid } from "react-uid";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/AboutUs.module.css";

const useStyles = makeStyles((theme) => ({
  workingContainer: {
    background: "#F0F5F9",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(25),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(12),
    },
  },
  workingTitle: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(5),
    },
  },
  imagesContainer: {
    display: "flex",
    gap: theme.spacing(3),
  },
  imageFill: {
    position: "relative",
    width: 400,
    height: 400,
    marginTop: Math.floor(Math.random() * (0 - 60 + 1) + 60),
    marginLeft: "6px",
    marginRight: "6px",
  },
  sliderContainer: {
    position: "relative",
    "& .slick-prev": {
      left: "10px",
      zIndex: 1,
    },
    "& .slick-next": {
      right: "10px",
      zIndex: 1,
    },
  },
  arrowLeftOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 5,
    color: "black",
    background: "linear-gradient(90deg, #0D1829 0%, rgba(13, 24, 41, 0) 100%)",
    width: 130,
    "& :hover": {
      cursor: "pointer",
    }
  },
  arrowRightOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 5,
    color: "black",
    background: "linear-gradient(90deg, #0D1829 0%, rgba(13, 24, 41, 0) 100%)",
    transform: 'rotate(-180deg)',
    width: 130,
    "& :hover": {
      cursor: "pointer",
    }
  },
  overlayRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100% - 60px)",
  },
  arrowIcon: {
    color: "white",
    fontSize: "24px",
    lineHeight: "24px",
  },
  sliderCtr: {
    "& $arrowLeftOverlay": {
      visibility: 'hidden',
      opacity: 0,
      transition: "visibility 0s, opacity 0.3s linear",
    },
    "& $arrowRightOverlay": {
      visibility: 'hidden',
      opacity: 0,
      transition: "visibility 0s, opacity 0.3s linear",
    },
    "&:hover": {
      "& $arrowLeftOverlay": {
        visibility: 'visible',
        opacity: 1,
      },
      "& $arrowRightOverlay": {
        visibility: 'visible',
        opacity: 1,
      }
    }
  }
}));

const WorkingAtKll = (props) => {
  const classes = useStyles();
  const slider = useRef(null);

  const settings = {
    className: classes.sliderContainer,
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 500,
  };

  return (
    <div className={classes.workingContainer}>
      <Typography className={classes.workingTitle} align="center">
        Working at Kathmandu Living Labs
      </Typography>
      <div style={{ position: "relative" }} className={classes.sliderCtr}>
        <Slider ref={slider} {...settings}>
          {["", "", "", "", "", ""].map((image, index) => (
            <div key={uid(image, index)}>
              <div
                className={classes.imageFill}
                style={{
                  marginTop: Math.floor(Math.random() * (0 - 60 + 1) + 60),
                  marginLeft: "6px",
                  marginRight: "6px",
                }}
              >
                <Image
                  src={`${index % 2 === 0 ? "/slide-1.png" : "/slide-2.png"}`}
                  layout="fill"
                  objectFit="cover"
                  alt="team members at KLL"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className={classes.arrowLeftOverlay} onClick={() => slider?.current?.slickPrev()}><div className={classes.overlayRoot}><i className={clsx("ri-arrow-left-line", classes.arrowIcon)} /></div></div>
        <div className={classes.arrowRightOverlay} onClick={() => slider?.current?.slickNext()}><div className={classes.overlayRoot}><i className={clsx("ri-arrow-left-line", classes.arrowIcon)} /></div></div>
      </div>
    </div>
  );
};

export default WorkingAtKll;
