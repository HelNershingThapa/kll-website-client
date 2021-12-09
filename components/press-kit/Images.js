import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Chip, Typography, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Mosaic from "./Mosaic";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(20),
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(15),
    }
  },
  // blurbs: {
  //   marginBottom: theme.spacing(6),
  // },
  title: {
    marginBottom: theme.spacing(2),
  },
  description: {
    maxWidth: 468,
  },
  btnIcon: {
    fontSize: "16px",
    lineHeight: "16px",
    color: theme.palette.grey[800],
  },
  btnLabel: {
    color: theme.palette.grey[800],
    whiteSpace: "nowrap"
  },
  endIcon: {
    fontSize: "16px",
  },
  iconSizeMedium: {
    "& > *:first-child": {
      fontSize: 16,
    }
  }

}));

const Images = ({ gallery, galleria }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.blurbs}>
          <Typography variant="h5" className={classes.title}>
            {gallery.title}
          </Typography>
          <Typography
            className={classes.description}
            variant="subtitle1"
            color="textSecondary"
          >
            {gallery.description}
          </Typography>
        </div>
        <div className={classes.btnContainer}>
          <Button variant="outlined" classes={{ root: classes.btnRoot, label: classes.btnLabel, endIcon: classes.endIcon, iconSizeMedium: classes.iconSizeMedium }} endIcon={<i className={clsx("ri-download-line", classes.btnIcon)} />}>Download All Photos</Button>
        </div>
      </div>
      <Mosaic galleria={galleria} />
    </>
  );
};

export default Images;
