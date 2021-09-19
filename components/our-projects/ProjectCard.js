import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    // width: 860,
    height: 620,
    width: '100%',
    // height: '100%',
  },
  imageFill: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  projectInfoOverlay: {
    position: "absolute",
    color: "white",
    bottom: 0,
    padding: theme.spacing(6),
    height: "44%",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: theme.spacing(3),
    width: "100%",
    "& h4": {
      fontFamily: "Manrope",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
      color: theme.palette.grey[100],
      width: 527,
    },
  },
}));

const ProjectCard = ({ name, category, src }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageFill}>
        <Image
          src={src}
          alt="KLL projects"
          layout="fill"
          objectFit="cover"
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
  );
};

export default ProjectCard;
