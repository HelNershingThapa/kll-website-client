import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Chip, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(25),
    display: "grid",
    placeContent: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(10),
    },
  },
  committment: {
    maxWidth: 496,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& h4": {
      fontFamily: "Manrope",
      fontWeight: 700,
      lineHeight: "40px",
      // color: theme.palette.grey[900],
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(2),
    },
    "& h5": {
      fontWeight: 400,
      lineHeight: "40px",
      width: "95%",
      marginBottom: theme.spacing(12),
    },
  },
  iconFill: {
    position: "relative",
    width: 200,
    height: 159,
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      width: 160,
      height: 127,
      marginBottom: theme.spacing(6),
    },
  },
  sdgIcons: {
    display: "flex",
    gap: theme.spacing(8),
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      gap: "22px",
    },
  },
  sdgIconFill: {
    position: "relative",
    width: 100,
    height: 100,
    mixBlendMode: "luminosity",
    "&:hover": {
      mixBlendMode: "normal",
    },
    [theme.breakpoints.down("xs")]: {
      width: 69,
      height: 69,
    },
  },
}));

const Sdg = ({ sdgs }) => {
  const classes = useStyles();

  const sdg = sdgs.map((sdg) => sdg.goalNumber).sort((a, b) => a - b);

  const formattedSdgNumber = sdg.map((n) => (n > 9 ? "" + n : "0" + n));

  return (
    <div className={classes.root}>
      <div className={classes.committment}>
        <div className={classes.iconFill}>
          <Image
            src="/icons/sdg.png"
            layout="fill"
            objectFit="cover"
            sizes="200px"
            alt=""
          />
        </div>
        <div className={classes.sdgIcons}>
          {formattedSdgNumber.map((icon) => (
            <div key={uid(icon)} className={classes.sdgIconFill}>
              <Image
                src={`/sdg/E-WEB-Goal-${icon}.png`}
                layout="fill"
                objectFit="cover"
                sizes="100px"
                alt="SDG icon"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sdg;
