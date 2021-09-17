import { uid } from "react-uid";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  workingContainer: {

    background: "#F0F5F9",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(25),
  },
  workingTitle: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(4),
  },
  imagesContainer: {
    display: "flex",
    gap: theme.spacing(3),
  },
  imageFill: {
    position: "relative",
    width: 400,
    height: 400,
  },
}));

const WorkingAtKll = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.workingContainer}>
      <Typography className={classes.workingTitle} align="center">
        Working at Kathmandu Living Labs
      </Typography>
      <marquee>
        <div className={classes.imagesContainer}>
          {["", "", "", "", ""].map((image, index) => (
            <div
              key={uid(image)}
              className={classes.imageFill}
              style={{
                marginTop: Math.floor(Math.random() * (0 - 60 + 1) + 60),
              }}
            >
              <Image
                src={`${index % 2 === 0 ? "/slide-1.png" : "/slide-2.png"}`}
                layout="fill"
                objectFit="cover"
                alt="team members at KLL"
              />
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default WorkingAtKll;
