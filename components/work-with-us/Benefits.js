import { uid } from "react-uid";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Container, Typography, Button } from "@material-ui/core";

const benefits = [
  {
    title: "Paid Leaves",
    icon: "/icons/benefit1.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Monthly Outings",
    icon: "/icons/benefit2.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Paid Leaves",
    icon: "/icons/benefit1.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Monthly Outings",
    icon: "/icons/benefit2.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const useStyles = makeStyles((theme) => ({
  benefitsContainer: {
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(8),
    },
  },
  benefitsTitle: {
    fontFamily: "Manrope",
    fontWeight: 800,
    color: theme.palette.grey[700],
  },
  benefits: {
    marginTop: theme.spacing(8),
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      gridTemplateColumns: "1fr",
      gridGap: theme.spacing(5),
    },
  },
  imgFill: {
    width: "48px",
    height: "48px",
    display: "grid",
    placeContent: "center",
    padding: theme.spacing(2),
    background: theme.palette.blue[100],
  },
  benefitTitle: {
    fontFamily: "Manrope",
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
    },
  },
  benefitDescription: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: theme.palette.grey[600],
  },
}));

function Benefits() {
  const classes = useStyles();

  return (
    <div className={classes.benefitsContainer}>
      <Typography variant="h5" className={classes.benefitsTitle}>
        Benefits of working with us
      </Typography>
      <div className={classes.benefits}>
        {benefits.map((benefit) => (
          <div
            key={uid(benefit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div className={classes.imgFill}>
              <Image
                src={`${benefit.icon}`}
                height={32}
                width={32}
                alt="KLL benefits"
              />
            </div>
            <Typography className={classes.benefitTitle}>
              {benefit.title}
            </Typography>
            <Typography className={classes.benefitDescription}>
              {benefit.desc}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
