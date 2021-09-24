import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(25),
    display: "grid",
    placeContent: "center",
  },
  committment: {
    width: 496,
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
  },
  sdgIcons: {
    display: "flex",
    gap: theme.spacing(8),
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const Sdg = ({ name, category, src }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.committment}>
        <div className={classes.iconFill}>
          <Image src="/icons/sdg.png" layout="fill" objectFit="cover" />
        </div>
        <div className={classes.sdgIcons}>
          {[
            "03",
            "04",
            "06",
            "07",
            "08",
            "10",
            "11",
            "13",
            "15",
            "16",
            "17",
          ].map((icon) => (
            <div
              key={uid(icon)}
              style={{
                position: "relative",
                width: 100,
                height: 100,
                mixBlendMode: "luminosity",
              }}
            >
              <Image
                src={`/sdg/E-WEB-Goal-${icon}.png`}
                layout="fill"
                objectFit="cover"
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
