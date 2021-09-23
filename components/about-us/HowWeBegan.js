import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  historyContainer: {
    marginTop: theme.spacing(12),
  },
  historyDescription: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "40px",
    color: theme.palette.grey[800],
    marginTop: theme.spacing(5),
  },
  header: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    color: theme.palette.grey[800],
  },
}));

function HowWeBegan() {
  const classes = useStyles();

  return (
    <div className={classes.historyContainer}>
      <Typography variant="h6" className={classes.header}>
        How we began
      </Typography>
      <Typography className={classes.historyDescription}>
        The foundations for KLL were laid in a project that predates KLL. In
        2012/2013, we created an open database of schools and hospitals in
        Kathmandu valley. The data would be used by the World Bank for assessing
        earthquake vulnerability of these buildings, but because that data was
        open, it could potentially be used by any other individuals or
        institutions for any purpose they deem fit. KLL was later formed by
        these team members because we believed such ‘work once, and put to
        multiple creative uses’ should be the new, effective model of
        development.
      </Typography>
    </div>
  );
}

export default HowWeBegan;
