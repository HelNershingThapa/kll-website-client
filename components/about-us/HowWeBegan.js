import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  historyContainer: {
    paddingTop: theme.spacing(30),
    paddingBottom: "240px",
    marginBottom: "340px",
    background: theme.palette.grey[100],
  },
  widthed: {
    maxWidth: 972,
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
  },
  description: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "40px",
    color: theme.palette.grey[800],
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(15),
  },
  title: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    color: theme.palette.grey[800],
  },
  imgOverlay: {
    position: "absolute",
    right: 0,
    left: 0,
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: 480,
  },
}));

function HowWeBegan() {
  const classes = useStyles();

  return (
    <div className={classes.historyContainer}>
      <div className={classes.widthed}>
        <Typography variant="h6" className={classes.title}>
          How we began
        </Typography>
        <Typography className={classes.description}>
          The foundations for KLL were laid in a project that predates KLL. In
          2012/2013, we created an open database of schools and hospitals in
          Kathmandu valley. The data would be used by the World Bank for
          assessing earthquake vulnerability of these buildings, but because
          that data was open, it could potentially be used by any other
          individuals or institutions for any purpose they deem fit. KLL was
          later formed by these team members because we believed such ‘work
          once, and put to multiple creative uses’ should be the new, effective
          model of development.
        </Typography>
        <div className={classes.imgOverlay}>
          <div className={classes.imgFill}>
            <Image
              src="/how-we-began.png"
              layout="fill"
              objectFit="cover"
              alt="KLL history"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeBegan;
