import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 972,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(6),
      paddingBottom: theme.spacing(15),
    },
  },
  title: {
    display: "table-caption",
    lineHeight: 1.25,
    color: theme.palette.grey[800],
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7778rem",
      lineHeight: 1.25,
      display: "block",
      textAlign: "center",
    },
  },
  sNo: {
    fontFamily: "Manrope",
    fontSize: "72px",
    fontWeight: 800,
    lineHeight: 1,
    color: theme.palette.grey[200],
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.6667rem",
    },
  },
  values: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(12),
    maxWidth: 770,
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(6),
    },
  },
  head: {
    display: "flex",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(5),
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  valueTitle: {
    fontFamily: "Inter",
    lineHeight: 1.6,
    color: theme.palette.grey[800],
    width: "246px",
  },
  valueDescription: {
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: 1.6,
    color: theme.palette.grey[800],
  },
}));

function Values({ values }) {
  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.root}>
        <div>
          <Typography variant="h4" className={classes.title}>
            Our Values
          </Typography>
        </div>
        <div className={classes.values}>
          {values.map((value, index) => (
            <div key={uid(value, index)}>
              <div className={classes.head}>
                <Typography className={classes.sNo}>
                  {(index + 1).toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </Typography>
                <Typography variant="h6" className={classes.valueTitle}>
                  {value.label}
                </Typography>
              </div>
              <Typography variant="h6" className={classes.valueDescription}>
                {value.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Values;
