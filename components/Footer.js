import { makeStyles } from "@material-ui/core/styles";
import { uid } from "react-uid";
import Link from "next/link";
import Image from "next/image";
import { Container, Typography } from "@material-ui/core";

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
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
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
