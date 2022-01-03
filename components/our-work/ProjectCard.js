import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";
import { desktop, tablet } from "styles/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
    cursor: "pointer",
  },
  imageFill: {
    position: "relative",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "& div": {
        position: "unset !important",
      },
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      width: "100% important",
      position: "relative !important",
      height: "unset !important",
    },
  },
  projectInfoOverlay: {
    width: "100%",
    height: "44%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: theme.spacing(3),
    color: "white",
    padding: theme.spacing(6),
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
    "& h4": {
      fontFamily: "Manrope",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
      color: theme.palette.grey[100],
      maxWidth: 527,
      [theme.breakpoints.down(desktop)]: {
        fontSize: "24px",
        lineHeight: 1.25,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        lineHeight: 1.5,
        width: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        lineHeight: 1.5,
        width: "100%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(2),
      padding: theme.spacing(3),
    },
  },
  chipRoot: {
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(2),
    },
  },
  chipLabel: {
    padding: 0,
  },
}));

const label = {
  disaster_preparedness: "Disaster Preparedness",
  disaster_response: "Disaster Response",
  governance: "Governance",
  openstreetmap: "OpenStreetMap",
  civic_engagement: "Civic Engagement",
  climate_change_and_sustainability: "Climate Change and Sustainability",
};

const ProjectCard = ({ name, category, src, slug, coverImagePosition }) => {
  const router = useRouter();
  const classes = useStyles();

  const { IMAGE_URL } = process.env;

  return (
    <div
      className={classes.root}
      onClick={() => router.push(`/our-work/${slug}`)}
    >
      <div className={classes.imageFill}>
        <Image
          src={`${IMAGE_URL}${src}`}
          className={classes.image}
          layout="fill"
          objectFit="cover"
          objectPosition={`${coverImagePosition && coverImagePosition}`}
          sizes="900px"
          alt="KLL projects"
        />
      </div>
      <div className={classes.projectInfoOverlay}>
        {" "}
        <div>
          <Chip
            label={label[category]}
            color="primary"
            classes={{ root: classes.chipRoot, label: classes.chipLabel }}
          />
        </div>
        <Typography variant="h4" className={classes.projectTitle}>
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default ProjectCard;
