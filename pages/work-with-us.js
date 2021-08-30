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
    title: "Vacancies",
    value: "04",
  },
  {
    title: "Working hrs",
    value: "07",
  },
  {
    title: "Alumini",
    value: "56",
  },
];

const workWithUsLabels = [
  {
    title: "Heavily Biased towards Action",
    icon: "work1.svg",
  },
  {
    title: "Excude Creative Confidence",
    icon: "work2.svg",
  },
  {
    title: "Co-Operativive & Collaborative",
    icon: "work3.svg",
  },
  {
    title: "Work Local, Talk Global",
    icon: "work4.svg",
  },
];

const benefits = [
  {
    title: "Paid Leaves",
    icon: "/icons/benefit1.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Monthly Outings",
    icon: "/icons/benefit2.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Paid Leaves",
    icon: "/icons/benefit1.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Monthly Outings",
    icon: "/icons/benefit2.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
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
  container: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(30),
  },
  pageTitleCtr: {
    marginBottom: theme.spacing(3),
  },
  pageTitle: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: "32px",
    color: "#0D1829",
    lineHeight: "40px",
  },
  titleColoured: {
    color: "#467efb",
  },
  pageDesc: {
    maxWidth: "800px",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    color: "#445668",
  },
  imageFullWidth: {
    position: 'relative',
    marginTop: theme.spacing(10),
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
  },
  statsOverlay: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(25),
    background: "white",
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
    width: "860px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(30),
  },
  traitsTitle: {
    marginTop: theme.spacing(3),
    fontFamily: "Manrope",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "28px",
    color: "#304254",
    width: "170px",
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  para: {
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "32px",
    color: "#1C2A3A",
  },
  benefitsContainer: {
    marginTop: theme.spacing(15),
  },
  benefitsTitle: {
    fontFamily: "Manrope",
    fontSize: "40px",
    fontWeight: 800,
    lineHeight: "48px",
    color: "#304254",
  },
  benefits: {
    marginTop: theme.spacing(8),
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(10),
  },
  benefitTitle: {
    fontFamily: "Manrope",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "18px",
    color: "#304254",
  },
  benefitDescription: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#445668",
  },
  fullWidth: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    height: "432px",
    background: "#0D1829",
    marginTop: theme.spacing(46),
    position: "relative",
  },
  imageOverlay: {
    position: "absolute",
    top: "-84px"
  },
}));

function WorkWithUs() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.pageTitleCtr}>
          <Typography
            display="inline"
            variant="h4"
            className={classes.pageTitle}
          >
            Work with&nbsp;
          </Typography>
          <Typography
            display="inline"
            variant="h4"
            className={clsx(classes.pageTitle, classes.titleColoured)}
          >
            Kathmandu Living Labs
          </Typography>
        </div>
        <Typography variant="body1" className={classes.pageDesc}>
          Kathmandu Living Labs has the most unique working environment and
          culture. On top of all, we offer competitive salaries, monthly outings
          and a flexible schedule
        </Typography>
        <div className={classes.imageFullWidth}>
          <Image
            src="/work-with-us-header.png"
            width={1920}
            height={638}
            alt="People working at KLL"
          />
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
          <Box display="flex" justifyContent="space-between" mb={10}>
            {workWithUsLabels.map((data) => (
              <div
                key={uid(data)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "#F0F5F9",
                  padding: "32px 15px",
                }}
              >
                <Image
                  src={`/icons/${data.icon}`}
                  width={94}
                  height={100}
                  alt="KLL traits logo"
                />
                <Typography
                  variant="body1"
                  className={classes.traitsTitle}
                  align="center"
                >
                  {data.title}
                </Typography>
              </div>
            ))}
          </Box>

          <div className={classes.paragraphs}>
            <Typography variant="body1" className={classes.para}>
              We are community builders who believe that small actions done by
              many can bring large-scale impact. We are tech savvy people deeply
              passionate about improving the society we live in. We tackle tasks
              that seem impossible, and even have fun while doing it.
            </Typography>
            <Typography variant="body1" className={classes.para}>
              There is no magic criterion that will make you a KLL family. Our
              team&apos;s strength is our personal and professional diversity.
            </Typography>
          </div>

          <div className={classes.benefitsContainer}>
            <Typography variant="h5" className={classes.benefitsTitle}>
              Benefits of working with us
            </Typography>
            <div className={classes.benefits}>
              {benefits.map((benefit) => (
                <div
                  key={uid(benefit)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "grid",
                      placeContent: "center",
                      padding: "12px",
                      background: "#ECF0FF",
                    }}
                  >
                    <Image
                      src={`${benefit.icon}`}
                      height={26}
                      width={26}
                      alt="KLL benefits"
                    />
                  </div>
                  <Typography className={classes.benefitTitle}>
                    {benefit.title}
                  </Typography>
                  <Typography className={classes.benefitDescription}>
                    {benefit.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.fullWidth}>
          <div style={{ width: "860px", margin: "auto" }}>
            <span style={{ color: "white" }}>sdasdas</span>
            <div className={classes.imageOverlay}>
              <Image
                src="/volunteering.png"
                width={400}
                height={600}
                alt="volunteering"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default WorkWithUs;
