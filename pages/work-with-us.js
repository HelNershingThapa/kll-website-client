import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import NavBar from "components/NavBar";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid, Avatar } from "@material-ui/core";
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
    position: "relative",
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
  otherFeatures: {
    display: "flex",
    gap: theme.spacing(5),
    marginTop: theme.spacing(41),
  },
  otherFeaturesTitle: {
    paddingTop: theme.spacing(8),
    fontFamily: "Manrope",
    fontSize: "24px",
    fontWeight: 800,
    lineHeight: "24px",
    color: "#304254",
  },
  otherFeaturesDescription: {
    marginTop: theme.spacing(3),
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#445668",
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
    color: "#445668",
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
}));

function WorkWithUs() {
  const classes = useStyles();
  return (
    <>
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
          <div className={classes.otherFeatures} style={{ width: "inherit" }}>
            <div>
              <Image
                src="/fellowships.png"
                width={420}
                height={500}
                alt="mentorships at KLL"
              />
              <Typography variant="h6" className={classes.otherFeaturesTitle}>
                Fellowships
              </Typography>
              <Typography
                variant="body1"
                className={classes.otherFeaturesDescription}
              >
                Discover the power of giving back to society with Kathmandu
                Living Labs.{" "}
              </Typography>
            </div>
            <div>
              <Image
                src="/mentorships.png"
                width={420}
                height={500}
                alt="mentorships at KLL"
              />
              <Typography variant="h6" className={classes.otherFeaturesTitle}>
                Mentorships
              </Typography>
              <Typography
                variant="body1"
                className={classes.otherFeaturesDescription}
              >
                Discover the power of giving back to society with Kathmandu
                Living Labs.{" "}
              </Typography>
            </div>
          </div>

          <div className={classes.testimonials}>
            <Container maxWidth="lg">
              <div className={classes.testimonialsCtr}>
                <div style={{ width: "361px" }}>
                  <Typography
                    variant="h5"
                    className={classes.hearFromPeopleTitle}
                  >
                    Hear from people at Kathmandu Living Labs
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.hearFromPeopleDescription}
                  >
                    Listen to what the people at Kathmandu Living Labs have to
                    say about us.
                  </Typography>
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
                    Ever since I first joined here, I’ve made countless friends
                    and worked on impactful projects that I’m proud of.
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
        </div>
      </Container>
    </>
  );
}

export default WorkWithUs;
