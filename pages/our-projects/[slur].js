import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Divider, Chip } from "@material-ui/core";
import ProjectPartners from "../../components/our-projects/ProjectPartners";
import Documents from "../../components/our-projects/Documents";

const project = {
  title: "National Housing Reconstruction Programme",
  background:
    "The 7.8 magnitude earthquake of 2015 devastated large swathe of Nepal. The Government of Nepal (GoN) initiated a survey to have a comprehensive housing assessment data. However, the survey had multifold challenges. Not only was there a need to collect a comprehensive information about each record but there was also a need for real-time validation. Creation and operation of a cloud infrastructure to host a large amount of data was also a challenge. Finally, there was also a need to seamlessly transfer the data to relevant government partners for dissemination and use. ",
};

const useStyles = makeStyles((theme) => ({
  imageOverlay: { position: "relative" },
  projectDescription: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 800,
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: theme.spacing(12),
  },
  chipRoot: {
    background: "#E9F3EB",
    padding: "10px 25.5px",
  },
  label: {
    padding: 0,
  },
  chipLabel: {
    fontFamily: "Manrope",
    fontWeight: 600,
    lineHeight: 1,
    color: "#0F5C2B",
  },
  title: {
    fontWeight: 800,
    lineHeight: "60px",
    color: theme.palette.grey[50],
    width: 692,
    marginTop: theme.spacing(4),
  },
  headerImageOverlay: {
    position: "absolute",
    background: "linear-gradient(180deg, #0D1829 0%, rgba(13, 24, 41, 0) 100%)",
    transform: "matrix(1, 0, 0, -1, 0, 0)",
    bottom: 0,
    padding: theme.spacing(10),
    width: "100%",
    height: "51%",
  },
  content: {
    maxWidth: 800,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(25),
    marginLeft: "auto",
    marginRight: "auto",
  },
  projectLink: {
    fontWeight: 600,
    lineHeight: "20px",
    color: theme.palette.grey[500],
  },
  link: {
    fontWeight: 600,
    lineHeight: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(10),
  },
  header: {
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(3),
  },
  paragraph: {
    color: theme.palette.grey[800],
  },
  image: {
    padding: theme.spacing(10, 0),
  },
  imgFill: {
    position: "relative",
    width: 800,
    height: 400,
  },
  bullets: {
    marginTop: theme.spacing(5),
  },
  outcomeTitle: {
    fontWeight: 600,
  },
  imagesCtr: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "500px 350px",
    padding: theme.spacing(10, 0),
    gap: theme.spacing(5),
  },
  images: {
    position: "relative",
    gridColumn: "span 1",
  },
  wideImage: {
    position: "relative",
    gridColumn: "1/3",
  },
  partnersCtr: {
    marginTop: theme.spacing(15),
  },
  partnersLogos: {
    width: "80%",
    display: "flex",
    gap: theme.spacing(8),
    flexWrap: "wrap",
    alignItems: "center",
  },

  partnerLogo: {
    maxWidth: 300,
    height: "auto",
  },
}));

function ProjectDetails() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.imageOverlay}>
        <Image
          src="/project-details-header.png"
          width={1920}
          height={620}
          layout="responsive"
          alt=""
        />
        <div className={classes.headerImageOverlay} />
        <div className={classes.projectDescription}>
          <Chip
            label={
              <Typography variant="subtitle1" className={classes.chipLabel}>
                Completed
              </Typography>
            }
            classes={{ root: classes.chipRoot, label: classes.label }}
          />
          <Typography variant="h2" className={classes.title}>
            {project.title}
          </Typography>
        </div>
      </div>

      <div className={classes.content}>
        <Typography variant="subtitle2" className={classes.projectLink}>
          Project Link
        </Typography>
        <Typography
          variant="body1"
          className={classes.link}
          color="primary"
        >{`https://bit.ly/GH45H`}</Typography>
        <Typography variant="h5" className={classes.header}>
          Background
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          {project.background}
        </Typography>
        <div className={classes.image}>
          <div className={classes.imgFill}>
            <Image
              src="/project-detail-1.png"
              layout="fill"
              imageFit="cover"
              alt=""
            />
          </div>
        </div>
        <Typography variant="h5" className={classes.header}>
          Outcomes
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          {`KLL provided end-end technical assistance to the government in
          surveying, hosting, validating, and dissemination. We provided three
          key solutions to address the complex challenges in this project.`}
        </Typography>
        <ol className={classes.bullets}>
          <li>
            <Typography className={classes.outcomeTitle} display="inline">
              {`Housing Reconstruction Data (HRD) Collect:`}
            </Typography>
            <Typography className={classes.paragraph} display="inline">
              &nbsp;
              {`Through HRD Collect, a mobile app, we collected and transferred
              data to a government owned central server. This app was designed
              to be use offline to address the connectivity issues`}
            </Typography>
          </li>
          <li>
            <Typography className={classes.outcomeTitle} display="inline">
              {`MIS System:`}
            </Typography>
            <Typography className={classes.paragraph} display="inline">
              &nbsp;
              {` The system facilitated real-time validation of the collected data and exported the data in various standard output data formats. We collaborated with Ona Inc to set up the server-side data collection software. `}
            </Typography>
          </li>
          <li>
            <Typography className={classes.outcomeTitle} display="inline">
              {`Monitoring and Visualization Tool:`}
            </Typography>
            <Typography className={classes.paragraph} display="inline">
              &nbsp;
              {`
 We deployed this tool to monitor real-time progress of the survey.  
              `}
            </Typography>
          </li>
        </ol>
        <div className={classes.imagesCtr}>
          <div className={classes.wideImage}>
            <Image
              src="/project-detail-2.png"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className={classes.images}>
            <Image
              src="/project-detail-3.png"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className={classes.images}>
            <Image
              src="/project-detail-4.png"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
        <Typography
          variant="body1"
          className={classes.paragraph}
        >{`KLL mapped 31 earthquake districts across Nepal. Over 3000 surveyors were deployed to assess damages of 1.05 million buildings. 5.08 million people were reached, and 9.34 million photographs were captured during the survey. The robust data collection and management system designed and built by KLL handled more than 10 Terabytes of the data.  `}</Typography>

        <ProjectPartners />
        <Documents />
      </div>
    </>
  );
}

export default ProjectDetails;
