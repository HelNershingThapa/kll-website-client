import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
    cursor: "pointer",
  },
  imageFill: {
    position: "relative",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      "& div": {
        position: "unset !important",
      },
    },
  },
  image: {
    [theme.breakpoints.down("xs")]: {
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
      width: 527,
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
        lineHeight: 1.5,
      },
    },
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(2),
      padding: theme.spacing(3),
    },
  },
  chipRoot: {
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(2),
    },
  },
  chipLabel: {
    padding: 0,
  },
}));

const ProjectCard = ({ name, category, src }) => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.root}
        onClick={() =>
          router.push("/our-projects/national-housing-reconstruction-programme")
        }
      >
        <div className={classes.imageFill}>
          <Image
            src={src}
            alt="KLL projects"
            layout="fill"
            objectFit="cover"
            className={classes.image}
          />
        </div>
        <div className={classes.projectInfoOverlay}>
          {" "}
          <div>
            <Chip
              label={category}
              color="primary"
              classes={{ root: classes.chipRoot, label: classes.chipLabel }}
            />
          </div>
          <Typography variant="h4">{name}</Typography>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
