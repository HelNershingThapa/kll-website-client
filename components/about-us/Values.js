import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const values = [
  {
    title: "Not Merely Technology, Civic Technology",
    description:
      "The social, political, and psychological circumstances surrounding the adoption of technology projects are often overlooked in the excitement of creating something. In KLL, we try to pay a lot of attention to the context in which users use our product to make it truly impactful. Understanding the issues that arise with top-level problem solving, we try to connect with the roots of each situation. ",
  },
  {
    title: "Open Data and Open Source Technology",
    description:
      "We believe in supporting digital transformation by embracing the open source and open data philosophies. This has had an impact on the kind of people, projects and organizations we work with. ",
  },
  {
    title: "Local Yet Global",
    description:
      "Our work has been deeply immersed in communities while we leverage the best of global practices and innovative knowledge to help address local issues. Our partnerships are truly global, and we have been able to engage the best scholars, innovators, and institutions from all over the world.  ",
  },
  {
    title: "Reflect and Optimize",
    description:
      "We are careful not to take on technology/data projects just because it’s the cool thing to do. It should serve a real need from the ground, and touch people’s lives. We spend a lot of time questioning our own work. In a lot of cases, We reflect about whether our work has actually created a meaningful impact and are often the first to admit that not all of our work has been successful.   ",
  },
];

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

function Values() {
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
                  {value.title}
                </Typography>
              </div>
              <Typography variant="h6" className={classes.valueDescription}>
                {value.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Values;
