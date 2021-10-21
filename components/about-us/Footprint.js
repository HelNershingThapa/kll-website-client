import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const impacts = [
  {
    label: "projects",
    value: "27",
    icon: "/icons/impact-1.svg",
  },
  {
    label: "organizations",
    value: "19",
    icon: "/icons/impact-2.svg",
  },
  {
    label: "people involved",
    value: "3000+",
    icon: "/icons/impact-3.svg",
  },
  {
    label: "events",
    value: "23",
    icon: "/icons/impact-4.svg",
  },
];

const useStyles = makeStyles((theme) => ({
  footprintCtr: {
    position: "relative",
  },
  ourImpactCtr: {
    position: "absolute",
    display: "inline",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  footprint: {
    fontSize: "80px",
    fontWeight: 800,
    lineHeight: 1,
    color: theme.palette.grey[100],
    textTransform: "uppercase",
    marginTop: theme.spacing(30),
    [theme.breakpoints.down("xs")]: {
      fontSize: "60px",
      marginTop: theme.spacing(10),
    },
  },
  ourImpact: {
    display: "inline",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.111rem",
    fontWeight: 600,
    lineHeight: 1.6,
    color: theme.palette.grey[800],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
      lineHeight: 1.5556,
    },
  },
  impactsCtr: {
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      placeContent: "center",
      borderBottom: "1px solid #E1E8F0",
    },
  },
  impacts: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(18),
    paddingBottom: theme.spacing(10),
    borderBottom: "1px solid #E1E8F0",
    [theme.breakpoints.down("xs")]: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(8),
      marginTop: theme.spacing(8),
      borderBottom: "none",
    },
  },
  impact: {
    display: "flex",
    gap: theme.spacing(5),
  },
  imgFill: {
    position: "relative",
    height: 60,
    width: 60,
    mixBlendMode: "luminosity",
  },
  value: {
    fontFamily: "Manrope",
    fontSize: 40,
    fontWeight: 800,
    lineHeight: "40px",
    color: theme.palette.grey[900],
  },
  label: {
    fontWeight: 500,
    color: theme.palette.grey[600],
  },
}));

function Footprint() {
  const classes = useStyles();

  return (
    <>
      <div>
        <div className={classes.footprintCtr}>
          <Typography variant="h1" className={classes.footprint} align="center">
            Footprint
          </Typography>
          <Typography variant="h6" className={classes.ourImpact}>
            Our Impact
          </Typography>
        </div>
      </div>
      <div className={classes.impactsCtr}>
        <div className={classes.impacts}>
          {impacts.map((impact) => (
            <div key={uid(impact)} className={classes.impact}>
              <div className={classes.imgFill}>
                <Image
                  src={impact.icon}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <Typography variant="h3" className={classes.value}>
                  {impact.value}
                </Typography>
                <Typography variant="body1" className={classes.label}>
                  {impact.label}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footprint;
