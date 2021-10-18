import Head from "next/head";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Container,
  Typography,
  Grid,
  Avatar,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@material-ui/core";
import JobDescriptionDialog from "components/work-with-us/JobDescriptionDialog";
import JoinOsmMovement from "components/work-with-us/JoinOsmMovement";
import OurTeam from "components/home/OurTeam";
import styles from "../styles/AboutUs.module.css";
import Traits from "../components/work-with-us/Traits";
import Benefits from "../components/work-with-us/Benefits";
import Programs from "../components/work-with-us/Programs";

const jobListings = [
  {
    title: "Full Stack Developer",
    level: "Mid Level",
    deadline: "Sep 15 2021",
  },
  {
    title: "UIUX Designer",
    level: "Mid Level",
    deadline: "Sep 15 2021",
  },
  {
    title: "Business Development",
    level: "Senior Level",
    deadline: "Sep 15 2021",
  },
  {
    title: "Python Engineer",
    level: "Mid Level",
    deadline: "Sep 15 2021",
  },
];
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

// const workWithUsLabels = [
//   {
//     title: "Heavily Biased towards Action",
//     icon: "work1.svg",
//   },
//   {
//     title: "Excude Creative Confidence",
//     icon: "work2.svg",
//   },
//   {
//     title: "Co-Operativive & Collaborative",
//     icon: "work3.svg",
//   },
//   {
//     title: "Work Local, Talk Global",
//     icon: "work4.svg",
//   },
// ];

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
  pageHeader: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  pageTitle: {
    lineHeight: 1.25,
  },
  titleColoured: {
    color: theme.palette.primary.main,
  },
  pageDesc: {
    marginTop: theme.spacing(3),
    maxWidth: 800,
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      fontSize: "0.7778rem",
      lineHeight: 1.428,
    },
  },
  headerImgFill: {
    position: "relative",
    width: "100%",
    height: 638,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 121,
    },
  },
  statsOverlay: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    background: "white",
    padding: theme.spacing(8, 15),
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "670px",
    transform: "translate(0%, -50%)",
    [theme.breakpoints.down("xs")]: {
      left: 16,
      right: 16,
      width: "inherit",
      padding: "13px",
    },
  },
  statTitle: {
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      lineHeight: 1,
    },
  },
  statValue: {
    marginTop: theme.spacing(1),
    lineHeight: 1,
  },
  content: {
    maxWidth: "860px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(30),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(13),
    },
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
    fontSize: "1.111rem",
    fontWeight: 400,
    lineHeight: 1.6,
    color: theme.palette.grey[800],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
      lineHeight: 1.5,
    },
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
    top: "-84px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(10),
    width: "864px",
  },
  volunteer: {
    margin: "auto",
  },
  volunteeringTitle: {
    fontFamily: "Manrope",
    fontSize: "40px",
    fontWeight: 800,
    lineHeight: "48px",
    color: "#E1E8F0",
  },
  volunteeringDescription: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#CAD5E0",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    gridColumnGap: theme.spacing(10),
  },
  volunteeringBtn: {
    padding: theme.spacing(2.5, 5),
    border: "1px solid #CAD5E0",
    background: "inherit",
  },
  volunteeringBtnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#CAD5E0",
  },

  testimonials: {
    width: "100vw",
    position: "relative",
    left: "calc(-50vw + 50%)",
    marginTop: theme.spacing(20),
    background: "#F0F5F9",
    paddingBottom: "80px",
  },
  testimonialsCtr: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quote: {
    fontSize: "40px",
    fontWeight: 300,
    lineHeight: "60px",
    color: "#304254",
  },
  author: {
    display: "flex",
    gap: theme.spacing(3),
    marginTop: theme.spacing(10),
    alignItems: "center",
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
  hearFromPeopleTitle: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    color: "#1C2A3A",
  },
  hearFromPeopleDescription: {
    marginTop: theme.spacing(4),
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    color: "#304254",
  },
  arrowNavigation: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(7.5),
    marginTop: theme.spacing(10),
  },
  jobListingsContainer: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(20),
    maxWidth: "860px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  jobListingsHeader: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    color: "#0D1829",
    marginBottom: theme.spacing(4),
  },
  jobList: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(4, 0),
    borderBottom: "1px solid #CAD5E0",
  },
  position: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "20px",
    color: "#304254",
  },
  level: {
    marginTop: theme.spacing(1),
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "16px",
    color: theme.palette.grey[600],
  },
  deadline: {
    marginTop: theme.spacing(1),
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "18px",
    color: "#304254",
  },
  tableCell: {
    padding: 0,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderBottom: "1px solid #CAD5E0",
  },
  seeDetailsBtn: {
    padding: "10px 20px",
    borderColor: "#CAD5E0",
  },
  label: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#304254",
  },
  icon: {
    marginLeft: "6.67px",
  },
  meetTheTeamContainer: {
    background: "#E1E8F0",
    paddingBottom: theme.spacing(20),
    paddingTop: theme.spacing(20),
  },
  header: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
  },
  teamCount: {
    display: "flex",
    justifyContent: "center",
    background: "#E1E8F0",
    gap: "67px",
    alignItems: "center",
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
}));

function WorkWithUs() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Work With Us | Kathmandu Living Labs</title>
      </Head>
      <div className={classes.pageHeader}>
        <Container maxWidth="lg">
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
          <Typography variant="body1" className={classes.pageDesc}>
            Kathmandu Living Labs has the most unique working environment and
            culture. On top of all, we offer competitive salaries, monthly
            outings and a flexible schedule
          </Typography>
        </Container>
      </div>

      <div className={classes.headerImgFill}>
        <Image
          src="/work-with-us-header.png"
          layout="fill"
          objectFit="cover"
          alt="People working at KLL"
          priority
        />
      </div>
      <div className={classes.statsOverlay}>
        {stats.map((stat) => (
          <div key={uid(stat)}>
            <Typography variant="body1" className={classes.statTitle}>
              {stat.title}
            </Typography>
            <Typography variant="h5" className={classes.statValue}>
              {stat.value}
            </Typography>
          </div>
        ))}
      </div>

      <Container fixed>
        <div className={classes.content}>
          {/* Traits  Starts */}
          <Traits />
          {/* Traits  Ends */}

          <div className={classes.paragraphs}>
            <Typography variant="body1" className={classes.para}>
              {`Kathmandu Living Labs has a unique environment where we can
              guarantee you will be challenged, feel truly fulfilled and grow
              beyond your limits. We take pride in knowing that our work
              environment is a golden egg and we’d love for you to join it!`}
            </Typography>
            <Typography variant="body1" className={classes.para}>
              {`We are a community of action-takers and builders who believe that
              small contributions from many can last and contribute to a
              large-scale impact. We have foundations in technology and the
              society we live in. We take steps to consider our impact on both
              worlds and know to strike the perfect balance. With a deeply
              passionate belief that technology has the power to change people’s
              lives, we work to create solutions that help improve the society
              we live in. We tackle tasks that seem impossible, and even have
              fun while doing it.`}
            </Typography>
            <Typography variant="body1" className={classes.para}>
              {`There is no magic criterion that will make you a KLL family. At
              the intersection of people and technology, everyone fits. Our
              team's strength is our personal and professional diversity.`}
            </Typography>
          </div>

          <Benefits />

          <div className={classes.fullWidth}>
            <div style={{ width: "860px", margin: "auto" }}>
              <div className={classes.imageOverlay}>
                <Image
                  src="/volunteering.png"
                  width={400}
                  height={600}
                  alt="volunteering"
                />
                <div className={classes.volunteer}>
                  <Typography
                    className={classes.volunteeringTitle}
                    variant="h4"
                    style={{ color: "white" }}
                  >
                    Volunteering
                  </Typography>
                  <Typography
                    className={classes.volunteeringDescription}
                    variant="body1"
                  >
                    Discover the power of giving back to society with Kathmandu
                    Living Labs.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    classes={{
                      root: classes.volunteeringBtn,
                      label: classes.volunteeringBtnLabel,
                    }}
                  >
                    Send us an Email
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mentoships */}
          <Programs />
        </div>
      </Container>

      <JoinOsmMovement />

      {/* Testimonials Starts Here */}

      <div className={classes.testimonials}>
        <Container maxWidth="lg">
          <div className={classes.testimonialsCtr}>
            <div style={{ width: "361px", marginTop: "auto" }}>
              <Typography variant="h5" className={classes.hearFromPeopleTitle}>
                Hear from people at Kathmandu Living Labs
              </Typography>
              <Typography
                variant="body1"
                className={classes.hearFromPeopleDescription}
              >
                Listen to what the people at Kathmandu Living Labs have to say
                about us.
              </Typography>
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
            </div>
            <div
              style={{
                width: "740px",
                position: "relative",
                marginTop: "130px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-32px",
                  left: "-35px",
                }}
              >
                <Image
                  src="/icons/quote.svg"
                  width={29.7}
                  height={22.8}
                  alt="quote icon"
                />
              </div>
              <Typography className={classes.quote}>
                Ever since I first joined here, I’ve made countless friends and
                worked on impactful projects that I’m proud of.
              </Typography>
              <div className={classes.author}>
                <Avatar>
                  <Image src="/author.png" layout="fill" alt="DP" />
                </Avatar>
                <div className={classes.authorDetails}>
                  <Typography
                    variant="subtitle1"
                    className={classes.authorName}
                  >
                    {" "}
                    Aishworya Shrestha
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.authorTitle}
                  >
                    {" "}
                    Research Assistant
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Job Listings Starts Here */}
      <div className={classes.jobListingsContainer}>
        <Typography variant="h6" className={classes.jobListingsHeader}>
          Job Listings
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {jobListings.map((job) => (
                <TableRow key={uid(job)}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.tableCell}
                  >
                    <Typography variant="h6" className={classes.position}>
                      {job.title}
                    </Typography>
                    <Typography variant="h6" className={classes.level}>
                      {job.level}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" className={classes.tableCell}>
                    {" "}
                    <Typography variant="h6" className={classes.level}>
                      Apply Before
                    </Typography>
                    <Typography variant="h6" className={classes.deadline}>
                      {job.deadline}
                    </Typography>
                  </TableCell>
                  <TableCell align="right" className={classes.tableCell}>
                    <JobDescriptionDialog />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Meet The Team */}
      {<OurTeam />}
      {/* Meet The Team Ends Here*/}
    </>
  );
}

export default WorkWithUs;
