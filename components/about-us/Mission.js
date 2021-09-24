import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const missions = [
  {
    title: "Not Merely Technology, Civic Technology",
    description:
      "Become a center of excellence with thought leaders in data and technology ",
  },
  {
    title: "Open Data and Open Source Technology",
    description:
      "Lay the groundwork for and build technology and data-driven tools that will enable an engaged and informed citizenry ",
  },
  {
    title: "Local Yet Global",
    description:
      "Pursue innovation in civic-tech with impact to truly change people’s lives",
  },
  {
    title: "Reflect and Optimize",
    description:
      "Become the forefront of improving and promoting OpenStreetMap ",
  },
];

const useStyles = makeStyles((theme) => ({
  bgRoot: {
    background: theme.palette.grey[900],
  },
  root: {
    paddingTop: theme.spacing(25),
    maxWidth: 972,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(20),
  },
  title: {
    display: "table-caption",
    fontFamily: "Manrope",
    fontWeight: 700,
    lineHeight: "40px",
    color: theme.palette.grey[300],
  },
  sNo: {
    fontFamily: "Manrope",
    fontSize: "72px",
    fontWeight: 800,
    lineHeight: "72px",
    color: theme.palette.grey[200],
  },
  missions: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(12),
    maxWidth: 768,
  },
  description: {
    fontWeight: 400,
    lineHeight: "40px",
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: 400,
    color: theme.palette.grey[200],
  },
  missionDescription: {
    fontWeight: 400,
    lineHeight: "40px",
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: 400,
    color: theme.palette.grey[200],
  },
}));

function Mission() {
  const classes = useStyles();

  return (
    <div className={classes.bgRoot}>
      <div className={classes.root}>
        <div>
          <Typography variant="h4" className={classes.title}>
            Our Mission
          </Typography>
        </div>
        <div className={classes.missions}>
          <ul style={{ margin: 0 }}>
            {missions.map((mission, index) => (
              <div key={uid(mission, index)} className={classes.description}>
                <li>
                  <Typography
                    variant="h5"
                    className={classes.missionDescription}
                  >
                    {mission.description}
                  </Typography>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mission;
