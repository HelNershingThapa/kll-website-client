import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(25),
    background: theme.palette.grey[100],
    display: "grid",
    placeContent: "center",
    marginBottom: theme.spacing(20)
  },
  committment: {
    width: 700,
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
    width: 240,
    height: 192,
  },
  sdgIcons: {
    display: "flex",
    gap: '25px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
}));

const SdgCommitment = ({ name, category, src }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.committment}>
        <div className={classes.iconFill}>
          <Image src="/icons/sdg.png" layout="fill" objectFit="cover" />
        </div>
        <Typography variant="h4" align="center">
          Our Commitment
        </Typography>
        <Typography
          variant="h5"
          align="center"
        >{`From our inception in 2012, Kathmandu Living Labs has been fully committed to the UN’s Sustainable Development Goals. Our work, over the years, has contributed to the following Sustainable Goals.`}</Typography>
        <div className={classes.sdgIcons}>
          {["01", "02", "03", "07", "08", "12", "13", "14"].map((icon) => (
            <div
              key={uid(icon)}
              style={{
                position: "relative",
                width: 120,
                height: 120,
                mixBlendMode: "luminosity",
              }}
            >
              <Image
                src={`/sdg/E-WEB-Goal-${icon}.png`}
                layout="fill"
                objectFit="cover"
                alt="SDG icons"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SdgCommitment;
