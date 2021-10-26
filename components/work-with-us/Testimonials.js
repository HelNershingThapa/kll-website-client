import clsx from "clsx";
import { uid } from "react-uid";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import {
  Container,
  Typography,
  Avatar,
  Button,
  Hidden,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  testimonials: {
    width: "100vw",
    position: "relative",
    left: "calc(-50vw + 50%)",
    marginTop: theme.spacing(20),
    background: "#F0F5F9",
    padding: "80px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "48px 0px",
    },
  },
  testimonialsCtr: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down(1280)]:{
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
      width: "60%",
      fontSize: "1rem",
      lineHeight: 1.5556,
    },
  },
  hearFromPeopleDescription: {
    marginTop: theme.spacing(4),
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7778rem",
      width: "85%",
    marginTop: theme.spacing(2),

    },
  },
  arrowNavigation: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(7.5),
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(1280)]:{
      display: 'none',
    },
  },
  quoteCtr: {
    maxWidth: "742px",
    position: "relative",
  },
  quoteIcon: {
    display: "block",
    fontSize: "40px",
    color: theme.palette.grey[400],
    transform: "translateX(-40px)",
    [theme.breakpoints.down(1280)]: {
      fontSize: "32px",
      transform: "translateX(0px)",
    },
  },
  quote: {
    marginTop: theme.spacing(2.5),
    fontSize: "40px",
    fontWeight: 300,
    lineHeight: 1.5,
    color: theme.palette.grey[700],
    [theme.breakpoints.down(1280)]:{
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
    [theme.breakpoints.up(1280)]:{
      display: 'none',
    },
  },
}));

function Testimonials() {
  const classes = useStyles();

  return (
    <div className={classes.testimonials}>
      <Container fixed>
        <div className={classes.testimonialsCtr}>
          <div style={{ maxWidth: "361px" }}>
            <Typography variant="h4" className={classes.hearFromPeopleTitle}>
              Hear from people at Kathmandu Living Labs
            </Typography>
            <Typography
              variant="body1"
              className={classes.hearFromPeopleDescription}
            >
              Our Team Members take the opportunity to share what the KLL
              experience really is.
            </Typography>
            <Hidden xsDown>
              <div className={classes.arrowNavigation}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "inherit",
                    borderRadius: "50%",
                    display: "grid",
                    placeContent: "center",
                  }}
                >
                  <Image
                    src="/icons/ArrowLeft.svg"
                    height={16}
                    width={16}
                    alt="remix arrow right"
                  />
                </div>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#185ADB",
                    borderRadius: "50%",
                    display: "grid",
                    placeContent: "center",
                  }}
                >
                  <Image
                    src="/icons/ArrowRight.svg"
                    height={16}
                    width={16}
                    alt="remix arrow right"
                  />
                </div>
              </div>
            </Hidden>
          </div>
          <div className={classes.quoteCtr}>
            <i className={clsx("ri-double-quotes-l", classes.quoteIcon)} />
            <Typography className={classes.quote}>
              Ever since I first joined here, I’ve made countless friends and
              worked on impactful projects that I’m proud of.
            </Typography>
            <div className={classes.author}>
              <Avatar className={classes.avatar}>
                <Image src="/author.png" layout="fill" alt="DP" />
              </Avatar>
              <div className={classes.authorDetails}>
                <Typography variant="subtitle1" className={classes.authorName}>
                  {" "}
                  Aishworya Shrestha
                </Typography>
                <Typography variant="subtitle2" className={classes.authorTitle}>
                  {" "}
                  Research Assistant
                </Typography>
              </div>
            </div>
              <div className={classes.arrowNavigationEnd}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "inherit",
                    borderRadius: "50%",
                    display: "grid",
                    placeContent: "center",
                  }}
                >
                  <Image
                    src="/icons/ArrowLeft.svg"
                    height={16}
                    width={16}
                    alt="remix arrow right"
                  />
                </div>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#185ADB",
                    borderRadius: "50%",
                    display: "grid",
                    placeContent: "center",
                  }}
                >
                  <Image
                    src="/icons/ArrowRight.svg"
                    height={16}
                    width={16}
                    alt="remix arrow right"
                  />
                </div>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
