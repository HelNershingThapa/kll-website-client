import { uid } from "react-uid";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import mapImg from "public/Rectangle7.png";

const member = {
  name: "Arogya Koirala",
  position: "Tech & Innovation Lead",
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: "calc(100vh - 80px)",
    display: "flex",
    gap: theme.spacing(15),
  },
  imageContainer: {
    position: "relative",
    height: "100%",
    width: "50%",
  },
  goBackCtr: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
  },
  gobackTitle: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "18px",
    color: theme.palette.grey[700],
  },
  bioCtr: {
    marginTop: theme.spacing(12),
  },
  name: {
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "60px",
    color: theme.palette.grey[900],
    marginTop: theme.spacing(20),
  },
  position: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "24px",
    color: theme.palette.grey[600],
    marginTop: theme.spacing(2),
  },
  bio: {
    width: 660,
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(10),
    gap: theme.spacing(6),
  },
  para: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    color: theme.palette.grey[900],
  },
  socialLinks: {
    marginTop: '52.92px',
    display: "flex",
    gap: "29.12px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image src="/member-detail.png" layout="fill" alt="KLL detail" />
      </div>
      <div className={classes.bioCtr}>
        <Link href="/our-team">
          <a className={classes.goBackCtr}>
            <Image src="/icons/ArrowLeft.svg" width={11.67} height={12} />
            <Typography variant="body1" className={classes.gobackTitle}>
              Go Back to All Team Members
            </Typography>
          </a>
        </Link>
        <Typography variant="body1" className={classes.name}>
          {member.name}
        </Typography>
        <Typography variant="body1" className={classes.position}>
          {member.position}
        </Typography>
        <div className={classes.bio}>
          <Typography variant="body1" className={classes.para}>
            Arogya is the Tech and Innovation lead at Kathmandu Living Labs. He
            has been directly involved in the conceptualization, design and
            development of several open data and civic-tech projects. Some of
            these projects, such as the Open Local Government Digital System for
            Neelakantha Municipality
            (https://neelakanthamunicipality.klldev.org), and the 2015 Nepal
            Earthquake data portal (https://opendata.klldev.org) are considered
            as exemplary civic-tech projects to come from the global south.
          </Typography>
          <Typography variant="body1" className={classes.para}>
            In addition to overseeing technical implementation and ensuring
            effective communication between project stakeholders, he is heavily
            involved in supporting the professional growth of young team members
            by helping them identify, select and tackle learning opportunities
            within KLL’s scope of work.
          </Typography>
          <Typography variant="body1" className={classes.para}>
            Prior to joining KLL, Arogya spent more than two years working as a
            data scientist out of Bangalore, India. An engineer by degree, he
            combined his interests in statistical programming (R, Python, SQL),
            data visualization (d3js, c3js, Leaflet, Mapbox GL) and web
            development (Javascript, HTML, CSS) to build robust and scalable
            analytical solutions for several Fortune 500 companies in the
            retail, banking and technology sectors.
          </Typography>
        </div>
        <div className={classes.socialLinks}>
          <Image src="/icons/twitter-logo.svg" width={27.18} height={22.1} />
          <Image src="/icons/ig-logo.svg" width={27.18} height={22.1} />
          <Image src="/icons/linkedin-logo.svg" width={27.18} height={22.1} />
        </div>
      </div>
    </div>
  );
}
