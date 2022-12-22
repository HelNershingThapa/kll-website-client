import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    display: "grid",
    gridTemplateColumns: "1fr 1fr 0.692fr",
    gridTemplateRows: "300px 300px 620px",
    gridGap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",
    },
    "& div:nth-of-type(1)": {
      gridRow: "1 / 2",
      gridColumn: "1 / 2",
      [theme.breakpoints.down("sm")]: {
        gridRow: "auto",
        gridColumn: "auto",
      },
    },
    "& div:nth-of-type(2)": {
      gridRow: "2/3",
      gridColumn: "1/2",
      [theme.breakpoints.down("sm")]: {
        gridRow: "auto",
        gridColumn: "auto",
      },
    },
    "& div:nth-of-type(3)": {
      gridColumn: "2/3",
      gridRow: "1/3",
      [theme.breakpoints.down("sm")]: {
        gridRow: "auto",
        gridColumn: "auto",
      },
    },
    "& div:nth-of-type(4)": {
      gridColumn: "3/4",
      gridRow: "1/3",
      [theme.breakpoints.down("sm")]: {
        gridRow: "auto",
        gridColumn: "auto",
      },
    },
    "& div:nth-of-type(5)": {
      gridColumn: "1/2",
      gridRow: "3/4",
      [theme.breakpoints.down("sm")]: {
        gridRow: "auto",
        gridColumn: "auto",
      },
    },
    "& div:nth-of-type(6)": {
      gridColumn: "2/4",
      gridRow: "3/4",
      [theme.breakpoints.down("sm")]: {
        gridRow: "auto",
        gridColumn: "auto",
      },
    },
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
}));

const Mosaic = ({ galleria }) => {
  const { API_URL } = process.env;
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        {galleria.imageRepeatable.map((image, index) => (
          <div
            key={uid(image, index)}
            className={classes[`photo-${index + 1}`]}
          >
            <div className={classes.imageFill}>
              <Image
                className={classes.image}
                src={`${API_URL}${image.image.url}`}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mosaic;
