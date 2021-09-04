import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import NavBar from "components/NavBar";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import Box from "@material-ui/core/Box";

import abousUsImg from "public/about-us-header.png";

const stats = [
  {
    title: "Est",
    value: "2013",
  },
  {
    title: "Projects",
    value: "600+",
  },
  {
    title: "People",
    value: "16",
  },
  {
    title: "Partners",
    value: "06",
  },
];

const valuesAndMission = [
  {
    title: "Our Values",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Our Mission",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(3),
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: "32px",
    color: "#0D1829",
    lineHeight: "40px",
  },
  imageFullWidth: {
    width: "100vw",
    marginLeft: "calc(-50vw + 49.5%)",
  },
  statsOverlay: {
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(25),
    background: "white",
    position: "absolute",
    padding: theme.spacing(8, 15),
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "670px",
    transform: "translate(0%, -50%)",
  },
  statTitle: {
    fontWeight: 400,
    lineHeight: "28px",
  },
  statValue: {
    marginTop: theme.spacing(1),
    fontFamily: "Manrope",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "24px",
  },
  content: {
    width: "972px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(25),
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: "blue",
  },
  para: {
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "32px",
    color: "#1C2A3A",
    marginTop: theme.spacing(5),
  },
  img1: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: "relative",
    width: 972,
    height: 500,
  },
  imgsCtr: {
    display: "flex",
    gap: theme.spacing(5),
  },
  img2: {
    position: "relative",
    width: 476,
    height: 583,
  },
  history: {
    marginTop: theme.spacing(12),
  },
  header: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
  },
  valuesAndMission: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(15),
  },
  values: {
    display: "flex",
    justifyContent: "space-between",
  },
  desc: {
    width: "768px",
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "40px",
  },
  tableCaption: {
    display: "table-caption",
  },
  teamCount: {
    display: "flex",
    justifyContent: "center",
    background: "#E1E8F0",
    gap: "1rem",
    alignItems: "center",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    marginTop: theme.spacing(25),
  },
  teamNumber: {
    fontFamily: "Manrope",
    fontSize: "200px",
    fontWeight: 800,
    lineHeight: "200px",
  },
  learnTeam: {
    width: "338px",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  meetBtn: {
    textTransform: "none",
    padding: theme.spacing(4, 14.625),
  },
  meetBtnLabel: {
    fontSize: "16px",
    lineHeight: "16px",
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: "521px",
  },
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h4" className={classes.pageTitle}>
          About Us
        </Typography>
        <div className={classes.imageFullWidth}>
          <div className={classes.imgFill}>
            <Image
              src="/about-us-header.png"
              layout="fill"
              objectFit="cover"
              alt="People working at KLL"
            />
          </div>
          <div className={classes.statsOverlay}>
            {stats.map((stat) => (
              <div key={uid(stat)}>
                <Typography variant="body1" className={classes.statTitle}>
                  {stat.title}
                </Typography>
                <Typography variant="h6" className={classes.statValue}>
                  {stat.value}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.paragraphs}>
            <Typography className={classes.para}>
              Kathmandu Living Labs is a pioneer civic-tech enterprise that
              provides data and technology solutions to businesses, governments,
              development partners, and civil society.
            </Typography>
            <Typography className={classes.para}>
              KLL was established to challenge the status quo of the knowledge
              production paradigm, in which a vast majority of the people in the
              world are excluded. It aims to bridge that gap and bring the
              voices and needs of the people on ground and resolve some of the
              pressing issues using technological innovation and deep immersion
              in communities.
            </Typography>
            <Typography className={classes.para}>
              Founded in 2013 to further the OpenStreetMap (OSM) movement, KLL
              believes in harnessing the power of open-source technology for
              improving the lives of citizens. Over the past 8 years, KLL has
              built and sustained OSM communities of thousands of people from
              Nepal and countries across Asia. The organization’s work spans
              diverse sectors including climate change and resilience, civic
              engagement, map-based surveys, and digital governance. KLL has
              built and sustained a community of thousands of volunteers,
              partners, and supporters that spans across the globe.
            </Typography>
          </div>
          <div className={classes.imgContainer}>
            <div className={classes.img1}>
              <Image
                src="/Rectangle31.png"
                alt="asdasd"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={classes.imgsCtr}>
              <div className={classes.img2}>
                <Image
                  src="/Rectangle32dup.png"
                  alt="asdasd"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={classes.img2}>
                <Image
                  src="/Rectangle33.png"
                  layout="fill"
                  objectFit="cover"
                  alt="asdasd"
                />
              </div>
            </div>
          </div>

          <div className={classes.history}>
            <Typography variant="h6" className={classes.header}>
              Our History
            </Typography>
            <Typography className={classes.para}>
              The foundations for KLL were laid in a project that predates KLL.
              In 2012/2013, we created an open database of schools and hospitals
              in Kathmandu valley. The data would be used by the World Bank for
              assessing earthquake vulnerability of these buildings, but because
              that data was open, it could potentially be used by any other
              individuals or institutions for any purpose they deem fit. KLL was
              later formed by these team members because we believed such ‘work
              once, and put to multiple creative uses’ should be the new,
              effective model of development.
            </Typography>
          </div>

          <div className={classes.valuesAndMission}>
            {valuesAndMission.map((data) => (
              <div key={uid(data)} className={classes.values}>
                <div>
                  <Typography
                    variant="h6"
                    className={clsx(classes.header, classes.tableCaption)}
                  >
                    {data.title}
                  </Typography>
                </div>
                <Typography className={classes.desc} variant="body1">
                  {data.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className={classes.teamCount}>
        <div>
          <div
            styles={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h1" className={classes.teamNumber}>
              16
            </Typography>
            <Typography variant="body1" style={{ color: "#304254" }}>
              awesome people at KLL
            </Typography>
          </div>
        </div>
        <div>
          <Typography className={classes.header} style={{ color: "#304254" }}>
            Our Team
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "#1C2A3A" }}
            className={classes.learnTeam}
          >
            Learn about our awesome team of people at Kathmandu Living Labs
          </Typography>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            classes={{ root: classes.meetBtn, label: classes.meetBtnLabel }}
          >
            Meet the Team
          </Button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
