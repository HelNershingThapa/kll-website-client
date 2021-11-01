import clsx from "clsx";
import { uid } from "react-uid";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Typography, IconButton } from "@material-ui/core";

const member = {
  name: "Arogya Koirala",
  position: "Tech & Innovation Lead",
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 80px)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      height: "auto",
    },
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "inherit",
    [theme.breakpoints.down("xs")]: {
      height: "104vw",
    },
  },
  navArrowsCtr: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "42%",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
    paddingBottom: theme.spacing(10),
  },
  arrows: {
    height: "100%",
    display: "flex",
    gap: "30px",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  navArrorIcon: {
    fontSize: "24px",
  },
  iconBtnRoot: {
    padding: "18px",
    background: theme.palette.primary.main,
  },
  goBackCtr: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
  },
  gobackTitle: {
    fontWeight: 500,
    lineHeight: 1,
    color: theme.palette.grey[700],
  },
  btnArrowIcon: {
    fontSize: "24px",
    color: "#fff",
  },
  bioCtr: {
    padding: theme.spacing(12, 15),
    [theme.breakpoints.down("xs")]: {
      padding: "24px 16px",
    },
  },
  name: {
    fontSize: "2.6667rem",
    fontWeight: 600,
    lineHeight: 1.25,
    color: theme.palette.grey[900],
    marginTop: theme.spacing(20),
  },
  position: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: 1,
    color: theme.palette.grey[600],
    marginTop: theme.spacing(2),
  },
  bio: {
    maxWidth: 660,
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(10),
    height: "calc(100vh - 520px)",
    overflow: "auto",
    gap: theme.spacing(6),
    marginBottom: theme.spacing(12),
  },
  para: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    color: theme.palette.grey[900],
  },
  socialLinks: {
    // marginTop: "52.92px",
    display: "flex",
    gap: theme.spacing(6),
    // position: 'absolute',
    bottom: "82px",
  },
  socialIcon: {
    fontSize: "32px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Arogya Koirala | Our Team | Kathmandu Living Labs</title>
      </Head>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <Image
            src="/member-detail.png"
            layout="fill"
            objectFit="cover"
            alt="KLL member"
          />
          <div className={classes.navArrowsCtr}>
            <div className={classes.arrows}>
              <IconButton
                aria-label="delete"
                classes={{ root: classes.iconBtnRoot }}
                style={{ background: "transparent" }}
              >
                <i
                  className={clsx("ri-arrow-left-line", classes.btnArrowIcon)}
                />
              </IconButton>
              <IconButton
                aria-label="delete"
                classes={{ root: classes.iconBtnRoot }}
              >
                <i
                  className={clsx("ri-arrow-right-line", classes.btnArrowIcon)}
                />
              </IconButton>
            </div>
          </div>
        </div>
        <div className={classes.bioCtr}>
          <Link href="/our-team">
            <a className={classes.goBackCtr}>
              <Image
                src="/icons/ArrowLeft.svg"
                width={11.67}
                height={12}
                objectFit="cover"
                alt="asdasd"
              />
              <Typography variant="body1" className={classes.gobackTitle}>
                Go Back to All Team Members
              </Typography>
            </a>
          </Link>
          <Typography className={classes.name}>{member.name}</Typography>
          <Typography variant="body1" className={classes.position}>
            {member.position}
          </Typography>
          <div className={classes.bio}>
            <Typography variant="body1" className={classes.para}>
              Arogya is the Tech and Innovation lead at Kathmandu Living Labs.
              He has been directly involved in the conceptualization, design and
              development of several open data and civic-tech projects. Some of
              these projects, such as the Open Local Government Digital System
              for Neelakantha Municipality
              (https://neelakanthamunicipality.klldev.org), and the 2015 Nepal
              Earthquake data portal (https://opendata.klldev.org) are
              considered as exemplary civic-tech projects to come from the
              global south.
            </Typography>
            <Typography variant="body1" className={classes.para}>
              In addition to overseeing technical implementation and ensuring
              effective communication between project stakeholders, he is
              heavily involved in supporting the professional growth of young
              team members by helping them identify, select and tackle learning
              opportunities within KLL’s scope of work.
            </Typography>
            <Typography variant="body1" className={classes.para}>
              Prior to joining KLL, Arogya spent more than two years working as
              a data scientist out of Bangalore, India. An engineer by degree,
              he combined his interests in statistical programming (R, Python,
              SQL), data visualization (d3js, c3js, Leaflet, Mapbox GL) and web
              development (Javascript, HTML, CSS) to build robust and scalable
              analytical solutions for several Fortune 500 companies in the
              retail, banking and technology sectors.
            </Typography>
          </div>
          <div className={classes.socialLinks}>
            <i
              className={clsx("ri-twitter-fill", classes.socialIcon)}
              style={{ color: "#1DA1F2" }}
            />
            <i
              className={clsx("ri-instagram-line", classes.socialIcon)}
              style={{ color: "#E1306C" }}
            />
            <i
              className={clsx("ri-linkedin-fill", classes.socialIcon)}
              style={{ color: "#0077B5" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
