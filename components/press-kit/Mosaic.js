import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Chip, Typography, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(20),
    display: "grid",
    gridTemplateColumns: "1fr 1fr 0.692fr",
    gridTemplateRows: "300px 300px 620px",
    gridGap: theme.spacing(5),
  },
  "photo-1": {
    position: "relative",
    gridRow: "1/2",
    gridColumn: "1/2",
  },
  "photo-2": {
    position: "relative",
    gridRow: "2/3",
    gridColumn: "1/2",
  },
  "photo-3": {
    position: "relative",
    gridRow: "1/3",
    gridColumn: "2/3",
  },
  "photo-4": {
    position: "relative",
    gridRow: "1/3",
    gridColumn: "3/4",
  },
  "photo-5": {
    position: "relative",
    gridRow: "3/4",
    gridColumn: "1/2",
  },
  "photo-6": {
    position: "relative",
    gridRow: "3/4",
    gridColumn: "2/4",
  },
}));

const Mosaic = () => {
  const classes = useStyles();
  const theme = useTheme();

  console.log("theme", theme);

  return (
    <div className={classes.container}>
      {["", "", "", "", "", ""].map((image, index) => (
        <div key={uid(image, index)} className={classes[`photo-${index + 1}`]}>
          <Image
            src={`/press-kit-${index + 1}.png`}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Mosaic;
