import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Chip, Typography } from "@material-ui/core";
import Brand from "components/press-kit/Brand";
import Logos from "components/press-kit/Logos";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(30),
  },
  pageTitle: {
    lineHeight: "40px",
    color: theme.palette.grey[900],
  },
  pageDescription: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),
    width: 820,
    fontWeight: 400,
    lineHeight: "28px",
    color: theme.palette.grey[600],
  },
}));

const PressKit = () => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.container}>
      <div className={classes.root}>
        <Typography variant="h4" className={classes.pageTitle}>
          Press Kit
        </Typography>
        <Typography className={classes.pageDescription}>
          The KLL Press Kit contains our official logos, colors, images and
          product screenshots. Please feel free to reuse these materials as you
          please. We appreciate any coverage! For press releases and news,
          please contact press@kll.com
        </Typography>
      </div>
      <Brand />
      <Logos />
    </Container>
  );
};

export default PressKit;
