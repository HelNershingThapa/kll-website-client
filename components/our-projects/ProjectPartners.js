import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(3),
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
  unsetImg: {
    maxWidth: 300,
    "& div": {
      position: "unset !important",
    },
  },
  custom: {
    objectFit: "contain",
    width: "100%  !important",
    position: "relative  !important",
    height: "unset  !important",
  },
}));

const ProjectPartners = () => {
  const classes = useStyles();
  return (
    <div className={classes.partnersCtr}>
      <Typography variant="h5" className={classes.header}>
        {`Our Partners`}
      </Typography>
      <div className={classes.partnersLogos}>
        <div className={classes.unsetImg}>
          <Image
            src="/project-detail-5.png"
            className={classes.custom}
            layout="fill"
            alt=""
          />
        </div>
        <div className={classes.unsetImg}>
          <Image
            src="/project-detail-6.png"
            className={classes.custom}
            layout="fill"
            alt=""
          />
        </div>
        <div className={classes.unsetImg}>
          <Image
            src="/project-detail-7.png"
            className={classes.custom}
            layout="fill"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPartners;
