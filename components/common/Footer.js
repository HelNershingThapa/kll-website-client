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
        link: "/facebook",
      },
      {
        title: "Twitter",
        link: "/twitter",
      },
      {
        title: "Instagram",
        link: "/instagram",
      },
      {
        title: "YouTube",
        link: "/youtube",
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#0D1829",
    padding: theme.spacing(20, 0),
  },
  scheduleTitle: {
    fontFamily: "Manrope",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "16px",
    color: "#F8FAFC",
  },
  scheduleDescription: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(11),
    width: "459px",
    fontFamily: "Manrope",
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "48px",
    color: "#F8FAFC",
  },
  groups: {
    display: "flex",
    justifyContent: "space-between",
  },
  groupTitle: {
    fontFamily: "Manrope",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "24px",
    color: "#91A4B7",
  },
  subGroups: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(6),
  },
  subGroupTitle: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "18px",
    color: "#E1E8F0",
  },
  logoCtr: {
    marginTop: "55px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(10),
  },
  copyright: {
    marginTop: theme.spacing(5),
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "18px",
    color: "#F8FAFC",
  },
  logoLine: {
    width: "100%",
    height: "0.5px",
    background: "#61758A",
  },
  sendEmailBtn: {
    marginLeft: theme.spacing(5),
    color: "#CAD5E0",
  },
  divider: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
    background: "#445668",
    height: "1px",
  },
  endIcon: {
    marginLeft: theme.spacing(2),
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
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <div className={classes.scheduleCtr}>
          <Typography className={classes.scheduleTitle}>
            Want to chat?
          </Typography>
          <Typography className={classes.scheduleDescription}>
            Schedule a virtual meeting with us
          </Typography>
          <Button
            classes={{ endIcon: classes.endIcon }}
            variant="contained"
            color="primary"
            endIcon={
              <i style={{ fontSize: "16px" }} className="ri-arrow-right-line" />
            }
          >
            Schedule a Meeting
          </Button>
          <Button variant="outlined" className={classes.sendEmailBtn}>
            Send Us an Email
          </Button>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.groups}>
          {groups.map((group) => (
            <div key={uid(group)}>
              <div className={classes.groupTitle}>{group.title}</div>
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
            <FilledInput
              classes={{
                root: classes.newsletterInput,
                input: classes.placeholder,
              }}
              id="filled-basic"
              placeholder="Enter your email"
              variant="filled"
              endAdornment={
                <i
                  className="ri-send-plane-line"
                  style={{ color: "#CAD5E0" }}
                ></i>
              }
            />
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
            alt="Picture of the author"
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
