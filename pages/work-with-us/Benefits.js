import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid, Avatar } from "@material-ui/core";


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
  },
  benefitsTitle: {
    fontFamily: "Manrope",
    fontSize: "40px",
    fontWeight: 800,
    lineHeight: "48px",
    color: "#304254",
  },
  benefits: {
    marginTop: theme.spacing(8),
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(10),
  },
  benefitTitle: {
    fontFamily: "Manrope",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "18px",
    color: "#304254",
  },
  benefitDescription: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#445668",
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
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "grid",
                placeContent: "center",
                padding: "12px",
                background: "#ECF0FF",
              }}
            >
              <Image
                src={`${benefit.icon}`}
                height={26}
                width={26}
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
