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
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(15),
    }
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  description: {
    maxWidth: 468,
    marginBottom: theme.spacing(6),
  },
}));

const Images = () => {
  const classes = useStyles();
  const theme = useTheme();

  console.log("theme", theme);

  return (
    <div className={classes.container}>
      <Typography variant="h5" className={classes.title}>
        Images
      </Typography>
      <Typography
        className={classes.description}
        variant="subtitle1"
        color="textSecondary"
      >
        A collection of images from Kathmandu Living Labs showcasing our office,
        work and team. Feel free to use these in our press coveraes!
      </Typography>
      <Mosaic />
    </div>
  );
};

export default Images;
