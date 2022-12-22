import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { uid } from "react-uid";

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
    maxHeight: 80,
    "& div": {
      position: "unset !important",
    },
  },
  custom: {
    objectFit: "contain",
    height: "80px !important",
    position: "relative !important",
    width: "unset !important",
  },
}));

const ProjectPartners = ({ partners }) => {
  const classes = useStyles();

  return (
    <div className={classes.partnersCtr}>
      <Typography variant="h5" className={classes.header}>
        {`Our Partners`}
      </Typography>
      <div className={classes.partnersLogos}>
        {partners.map((partner) => (
          <div className={classes.unsetImg} key={uid(partner)}>
            <Image
              src={partner.image.url}
              className={classes.custom}
              layout="fill"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPartners;
