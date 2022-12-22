import { useState, useRef } from "react";
import clsx from "clsx";
import { uid } from "react-uid";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import {
  Container,
  Typography,
  Avatar,
  Hidden,
  IconButton,
} from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { desktop } from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
  testimonials: {
    position: "relative",
    marginTop: theme.spacing(20),
    background: "#F0F5F9",
    padding: "80px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "48px 0px",
      marginTop: theme.spacing(15),
    },
  },
  testimonialsCtr: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down(desktop)]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(6),
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(6),
    },
  },
  hearFromPeopleTitle: {
    lineHeight: 1.25,
    color: theme.palette.grey[800],
    [theme.breakpoints.down("xs")]: {
      maxWidth: "60%",
      fontSize: "1rem",
      lineHeight: 1.5556,
    },
  },
  hearFromPeopleDescription: {
    marginTop: theme.spacing(4),
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7778rem",
      maxWidth: "85%",
      marginTop: theme.spacing(2),
    },
  },
  arrowNavigation: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(7.5),
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(desktop)]: {
      display: "none",
    },
  },
  button: {
    background: theme.palette.primary.main,
    padding: "18px",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  iconButtonTransparent: {
    background: "transparent !important",
  },
  btnLabel: {
    height: "24px", // label had some 2px streched, so mentioned this height
  },
  btnIcon: {
    fontSize: "24px",
    color: "#fff",
    height: "100%",
  },
  quoteCtr: {
    maxWidth: "782px",
    position: "relative",
  },
  quoteIcon: {
    display: "block",
    fontSize: "40px",
    color: theme.palette.grey[400],
    marginBottom: "10px",
    [theme.breakpoints.down(desktop)]: {
      fontSize: "32px",
      transform: "translateX(0px)",
    },
  },
  quoteTypo: {
    marginLeft: "40px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  quote: {
    marginTop: theme.spacing(2.5),
    fontSize: "40px",
    fontWeight: 300,
    lineHeight: 1.5,
    color: theme.palette.grey[700],
    [theme.breakpoints.down(desktop)]: {
      fontSize: "1.7778rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
      fontSize: "1.33rem",
      lineHeight: 1.33,
    },
  },
  author: {
    display: "flex",
    gap: theme.spacing(3),
    marginTop: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
    },
  },
  authorDetails: {
    display: "flex",
    flexDirection: "column",
  },
  authorName: {
    fontWeight: 500,
    color: "#304254",
    lineHeight: "1rem",
    marginBottom: theme.spacing(1),
  },
  authorTitle: {
    fontWeight: 400,
    color: theme.palette.grey[600],
  },
  avatar: {
    width: "48px",
    height: "48px",
  },
  arrowNavigationEnd: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(7.5),
    marginTop: theme.spacing(10),
    [theme.breakpoints.up(desktop)]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
    },
  },
  sliderCtr: {
    "& .slick-slider": {
      maxWidth: 792,
    },
  },
  blackColorIcon: {
    color: theme.palette.grey[800],
  },
}));

function Testimonials({ testimonials }) {
  const classes = useStyles();
  const slider = useRef(null);
  const { title, description, testimonies } = testimonials;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextClick = (e) => {
    setCurrentSlide(e);
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: nextClick,
  };

  return (
    <div className={classes.testimonials}>
      <Container fixed>
        <div className={classes.testimonialsCtr}>
          <div style={{ maxWidth: "361px" }}>
            <Typography variant="h4" className={classes.hearFromPeopleTitle}>
              {title}
            </Typography>
            <Typography
              variant="body1"
              className={classes.hearFromPeopleDescription}
            >
              {description}
            </Typography>
            <Hidden xsDown>
              <div className={classes.arrowNavigation}>
                <IconButton
                  disabled={currentSlide === 0}
                  className={clsx(
                    classes.button,
                    currentSlide === 0 && classes.iconButtonTransparent
                  )}
                  classes={{ label: classes.btnLabel }}
                  onClick={() => slider?.current?.slickPrev()}
                >
                  <i
                    className={clsx(
                      "ri-arrow-left-line",
                      classes.btnIcon,
                      currentSlide === 0 && classes.blackColorIcon
                    )}
                  />
                </IconButton>
                <IconButton
                  disabled={currentSlide === testimonies.length - 1}
                  className={clsx(
                    classes.button,
                    currentSlide === testimonies.length - 1 &&
                      classes.iconButtonTransparent
                  )}
                  classes={{ label: classes.btnLabel }}
                  onClick={() => slider?.current?.slickNext()}
                >
                  <i
                    className={clsx(
                      "ri-arrow-right-line",
                      classes.btnIcon,
                      currentSlide === testimonies.length - 1 &&
                        classes.blackColorIcon
                    )}
                  />
                </IconButton>
              </div>
            </Hidden>
          </div>

          <div style={{ maxWidth: "100%" }} className={classes.sliderCtr}>
            <Slider ref={slider} {...settings}>
              {testimonies.map((testimony) => (
                <div key={uid(testimony)} className={classes.quoteCtr}>
                  <i
                    className={clsx("ri-double-quotes-l", classes.quoteIcon)}
                  />
                  <div className={classes.quoteTypo}>
                    <Typography className={classes.quote}>
                      {testimony.quote}
                    </Typography>
                    {testimony.member && (
                      <div className={classes.author}>
                        <Avatar className={classes.avatar}>
                          <Image
                            src={
                              testimony.member.avatarImage
                                ? testimony.member.avatarImage.url
                                : testimony.member.image.url
                            }
                            layout="fill"
                            objectFit="cover"
                            sizes="48px"
                            alt="DP"
                          />
                        </Avatar>
                        <div className={classes.authorDetails}>
                          <Typography
                            variant="subtitle1"
                            className={classes.authorName}
                          >
                            {testimony.member.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            className={classes.authorTitle}
                          >
                            {testimony.member.position}
                          </Typography>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div
            className={classes.arrowNavigationEnd}
            style={{ marginLeft: "auto" }}
          >
            <IconButton
              disabled={currentSlide === 0}
              className={clsx(
                classes.button,
                currentSlide === 0 && classes.iconButtonTransparent
              )}
              classes={{ label: classes.btnLabel }}
              onClick={() => slider?.current?.slickPrev()}
            >
              <i
                className={clsx(
                  "ri-arrow-left-line",
                  classes.btnIcon,
                  currentSlide === 0 && classes.blackColorIcon
                )}
              />
            </IconButton>
            <IconButton
              disabled={currentSlide === testimonies.length - 1}
              className={clsx(
                classes.button,
                currentSlide === testimonies.length - 1 &&
                  classes.iconButtonTransparent
              )}
              classes={{ label: classes.btnLabel }}
              onClick={() => slider?.current?.slickNext()}
            >
              <i
                className={clsx(
                  "ri-arrow-right-line",
                  classes.btnIcon,
                  currentSlide === testimonies.length - 1 &&
                    classes.blackColorIcon
                )}
              />
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
