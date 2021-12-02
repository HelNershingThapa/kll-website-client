import { makeStyles } from "@material-ui/core/styles";
import { uid } from "react-uid";
import Link from "next/link";
import Image from "next/image";
import { Container, Typography, Button, FilledInput } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import { desktop } from "../../styles/theme";
import NewsletterSubscribe from "./newsletter/NewsletterSubscribe";

const groups = [
  {
    title: "Company",
    subGroups: [
      {
        title: "About Us",
        link: "/about-us",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
      {
        title: "Our Team",
        link: "/our-team",
      },
      {
        title: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    title: "Quick Links",
    subGroups: [
      {
        title: "Showcase",
        link: "/showcase",
      },
      {
        title: "Gallery",
        link: "/gallery",
      },
      {
        title: "News & Updates",
        link: "/news-and-updates",
      },
      {
        title: "Events",
        link: "/events",
      },
    ],
  },
  {
    title: "Get Involved",
    subGroups: [
      {
        title: "Work with us",
        link: "/work-with-us",
      },
      {
        title: "Join the OSM Community",
        link: "/join-osm-community",
      },
    ],
  },
  {
    title: "Follow Us",
    subGroups: [
      {
        title: "Facebook",
        link: "https://www.facebook.com/kathmandulivinglabs/",
      },
      {
        title: "Twitter",
        link: "https://twitter.com/ktmlivinglabs",
      },
      {
        title: "Instagram",
        link: "https://www.instagram.com/ktmlivinglabs/?hl=en",
      },
      {
        title: "YouTube",
        link: "https://www.youtube.com/channel/UCoUQGZ2u5k4oWr6f0ZQkwMQs",
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#0D1829",
    padding: theme.spacing(20, 0),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(12, 0),
    },
  },
  scheduleTitle: {
    fontFamily: "Manrope",
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.grey[50],
  },
  scheduleDescription: {
    width: "459px",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(11),
    color: theme.palette.grey[50],
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(6),
    },
  },
  groups: {
    display: "flex",
    justifyContent: "space-between",
    // [theme.breakpoints.down("xs")]: {
    //   width: "100%",
    //   marginTop: theme.spacing(1),
    //   marginBottom: theme.spacing(6),
    //   flexWrap: "wrap",
    //   rowGap: theme.spacing(10),
    //   "& div": {
    //     flex: "50%",
    //   },
    // },
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: theme.spacing(10)
    },
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: theme.spacing(10)
    }
  },
  groupTitle: {
    fontWeight: 600,
    lineHeight: 1,
    color: theme.palette.grey[400],
    [theme.breakpoints.down(desktop)]: {
      fontSize: "0.8889rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.111rem",
    },
  },
  subGroups: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(6),
    [theme.breakpoints.down(desktop)]: {
      marginTop: theme.spacing(6),
      gap: theme.spacing(5),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      gap: theme.spacing(3),
    },
  },
  subGroupTitle: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: 1,
    color: theme.palette.grey[200],
    [theme.breakpoints.down(desktop)]: {
      fontSize: "0.8889rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  logoCtr: {
    marginTop: "48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(10),
  },
  copyright: {
    marginTop: theme.spacing(5),
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: 1,
    color: theme.palette.grey[50],
    [theme.breakpoints.down("xs")]: {
      width: 278,
      fontSize: "14px",
      lineHeight: 1.428,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  logoLine: {
    width: "100%",
    height: "0.5px",
    background: "#61758A",
  },
  btnFlex: {
    display: "inline-flex",
    gap: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      gap: theme.spacing(4),
      alignItems: "flex-start",
    },
  },
  sendEmailBtn: {
    color: theme.palette.grey[300],
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  divider: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
    background: "#445668",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
    },
  },
  endIcon: {
    marginLeft: theme.spacing(2),
  },
  newsLetter: {
    [theme.breakpoints.down("sm")]: {
      gridColumn: "1 / -1",
    },
  },
  newsletterHeader: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "16px",
    color: theme.palette.grey[300],
    marginBottom: theme.spacing(2),
  },
  newsletterInput: {
    background: theme.palette.grey[800],
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },
  placeholder: {
    padding: "15px 16px",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "18px",
      color: theme.palette.grey[300],
    },
  },
  contactDetails: {
    marginTop: theme.spacing(8),
    "& h6": {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "16px",
      color: theme.palette.grey[300],
      marginBottom: theme.spacing(1),
    },
    "& p": {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      color: theme.palette.grey[50],
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container fixed>
        <div className={classes.scheduleCtr}>
          <Typography className={classes.scheduleTitle} variant="subtitle1">
            Want to chat?
          </Typography>
          <Typography variant="h3" className={classes.scheduleDescription}>
            Schedule a virtual meeting with us
          </Typography>
          <div className={classes.btnFlex}>
            <Button
              classes={{ endIcon: classes.endIcon }}
              variant="contained"
              color="primary"
              onClick={() => window.open("https://calendly.com/helnershingthapa")}
              endIcon={
                <i
                  style={{ fontSize: "16px" }}
                  className="ri-arrow-right-line"
                />
              }
            >
              Schedule a Meeting
            </Button>
            <Button variant="outlined" className={classes.sendEmailBtn}>
              Send Us an Email
            </Button>
          </div>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.groups}>
          {groups.map((group) => (
            <div key={uid(group)}>
              <div variant="h5" className={classes.groupTitle}>
                {group.title}
              </div>
              <div className={classes.subGroups}>
                {group.subGroups.map((subGroup) => (
                  <div key={uid(subGroup)} className={classes.subGroupTitle}>
                    <Link href={subGroup.link}>{subGroup.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={classes.newsLetter}>
            <Typography className={classes.newsletterHeader}>
              Subscribe to our Newsletter
            </Typography>
            <NewsletterSubscribe />
            <div className={classes.contactDetails}>
              <Typography component="h6">Contact Details</Typography>
              <Typography className={classes.contactDetails} component="p">
                1474 Lamtangin Marg, Chundevi{" "}
              </Typography>
              <Typography className={classes.contactDetails} component="p">
                +977 01472 0137{" "}
              </Typography>
              <Typography className={classes.contactDetails} component="p">
                contact@kathmandulivinglabs.com{" "}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.logoCtr}>
          <span className={classes.logoLine}></span>
          <img
            src="/kll-logo-white.png"
            height="58px"
            width="53px"
            alt="KLL logo white"
          />
          <span className={classes.logoLine}></span>
        </div>
        <Typography className={classes.copyright} align="center">
          Copyright 2021. Kathmandu Living Labs. All Rights Reserved
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
