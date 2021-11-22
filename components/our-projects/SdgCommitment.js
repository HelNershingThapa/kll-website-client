import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import { desktop } from "styles/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(25),
    background: theme.palette.grey[100],
    display: "grid",
    placeContent: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(12),
    },
  },
  committment: {
    maxWidth: 700,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& h4": {
      lineHeight: 1.25,
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down(desktop)]: {
        marginTop: theme.spacing(5),
        fontSize: "1.5rem",
        lineHeight: 1.5556,
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(5),
        fontSize: "1rem",
        lineHeight: 1.5556,
      },
    },
    "& h5": {
      fontWeight: 400,
      lineHeight: 1.6667,
      width: "95%",
      marginBottom: theme.spacing(12),
      color: theme.palette.grey[800],
      [theme.breakpoints.down(desktop)]: {
        fontSize: "1.111rem",
        lineHeight: 1.5,
        marginBottom: theme.spacing(8),
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        fontSize: "0.7778rem",
        lineHeight: 1.428,
        marginBottom: theme.spacing(6),
      },
    },
  },
  iconFill: {
    position: "relative",
    width: 240,
    height: 192,
    [theme.breakpoints.down(desktop)]: {
      width: 160,
      height: 128,
    },
    [theme.breakpoints.down("xs")]: {
      width: 120,
      height: 96,
    },
  },
  sdgIcons: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(3),
    },
  },
  imgFill: {
    position: "relative",
    width: 120,
    height: 120,
    mixBlendMode: "luminosity",
    [theme.breakpoints.down(desktop)]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.down("xs")]: {
      width: 58.71,
      height: 58.71,
    },
  },
}));

const SdgCommitment = ({ name, category, src }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <div className={classes.committment}>
          <div className={classes.iconFill}>
            <Image src="/icons/sdg.png" layout="fill" objectFit="cover" unoptimized alt="" />
          </div>
          <Typography variant="h4" align="center">
            Our Commitment
          </Typography>
          <Typography variant="h5" align="center">
            {`From our inception in 2012, Kathmandu Living Labs has been fully committed to the UN’s Sustainable Development Goals (SDGs). Our work, over the years, has contributed to the following SDGs.`}
          </Typography>
          <div className={classes.sdgIcons}>
            {["01", "02", "03", "07", "08", "12", "13", "14"].map((icon) => (
              <div key={uid(icon)} className={classes.imgFill}>
                <Image
                  src={`/sdg/E-WEB-Goal-${icon}.png`}
                  layout="fill"
                  objectFit="cover"
                  alt="SDG icons"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SdgCommitment;
