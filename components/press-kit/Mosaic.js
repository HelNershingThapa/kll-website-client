import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Chip, Typography, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    display: "grid",
    gridTemplateColumns: "1fr 1fr 0.692fr",
    gridTemplateRows: "300px 300px 620px",
    gridGap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridAutoRows: 'minmax(min-content, max-content)'
    }
  },
  "photo-1": {
    gridRow: "1 / 2",
    gridColumn: "1 / 2",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  "photo-2": {
    gridRow: "2/3",
    gridColumn: "1/2",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  "photo-3": {
    gridColumn: "2/3",
    gridRow: "1/3",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  "photo-4": {
    gridColumn: "3/4",
    gridRow: "1/3",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  "photo-5": {
    gridColumn: "1/2",
    gridRow: "3/4",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  "photo-6": {
    gridColumn: "2/4",
    gridRow: "3/4",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  imgFill: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
}));

const Mosaic = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.container}>
      {["", "", "", "", "", ""].map((image, index) => (
        <div key={uid(image, index)} className={classes[`photo-${index + 1}`]}>
          <div className={classes.imgFill}>
            <Image
              src={`/press-kit-${index + 1}.png`}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mosaic;
