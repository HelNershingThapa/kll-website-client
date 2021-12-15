import { uid } from "react-uid";
import Image from "next/image";
import Link from 'next/link'
import { Chip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { desktop } from "styles/theme";

const moreProjects = [
  {
    name: "Mapping and Opening Data for Local Governance and Citizen Engagement (Model4G)",
    category: "Mapping",
  },
  {
    name: "Earthquake Risk Exposure Survey Web Application",
    category: "Disaster Prevention",
  },
  {
    name: "Engaging Youth and Students in Mapping Agriculture and Food Security for a better world",
    category: "Mapping",
  },
  {
    name: "Mapping and Opening Data for Local Governance and Citizen Engagement (Model4G)",
    category: "Mapping",
  },
  {
    name: "Earthquake Risk Exposure Survey Web Application",
    category: "Disaster Prevention",
  },
  {
    name: "Engaging Youth and Students in Mapping Agriculture and Food Security for a better world",
    category: "Mapping",
  },
  {
    name: "Mapping and Opening Data for Local Governance and Citizen Engagement (Model4G)",
    category: "Mapping",
  },
  {
    name: "Earthquake Risk Exposure Survey Web Application",
    category: "Disaster Prevention",
  },
  {
    name: "Engaging Youth and Students in Mapping Agriculture and Food Security for a better world",
    category: "Mapping",
  },
];

var perChunk = 3; // items per chunk

var result = moreProjects.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / perChunk);

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = []; // start a new chunk
  }

  resultArray[chunkIndex].push(item);

  return resultArray;
}, []);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(25),
    marginBottom: theme.spacing(25),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(15),
    },
  },
  title: {
    maxWidth: 323,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(12),
    lineHeight: 1.25,
    [theme.breakpoints.down(desktop)]: {
      maxWidth: "300px",
      fontSize: "1.556rem",
      lineHeight: 1.333,
      color: theme.palette.grey[800],
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "65vw",
      fontSize: "1.333rem",
      lineHeight: 1.333,
      color: theme.palette.grey[800],
      marginBottom: theme.spacing(1),
    },
  },
  name: {
    fontWeight: 600,
    marginTop: theme.spacing(3),
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down(desktop)]: {
      fontSize: "1.111rem",
      lineHeight: 1.5556,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
      fontSize: "1rem",
      lineHeight: 1.5556,
    },
  },
  projectsCtr: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "1px",
    background: theme.palette.grey[300], // grid-items border color
    "& div:nth-child(-n + 3)": {
      paddingTop: 0,
    },
    "& div:nth-child(3n)": {
      paddingRight: 0,
    },
    "& div:nth-child(3n - 2)": {
      paddingLeft: 0,
    },
    "& div:nth-child(n+7)": {
      paddingBottom: 0,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      "& div:last-child": {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      },
    },
  },
  project: {
    padding: "32px 15px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "16px 0 !important",
    },
  },
  chipRoot: {
    padding: "6px 12px !important",
    borderRadius: "8px",
  },
  chipLabel: {
    fontSize: "0.7778rem",
    fontWeight: 500,
    // lineHeight: "14px",
    // padding: 0,
    color: "#F8FAFC",
    overflow: "visible",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6667rem",
    },
  },
}));

const label = {
  "disaster_preparedness": "Disaster Preparedness",
  "disaster_response": "Disaster Response",
  "governance": "Governance",
  "openstreetmap": "OpenStreetMap",
  "civic_engagement": "Civic Engagement",
  "climate_change_and_sustainability": "Climate Change and Sustainability",
}

const MoreProjects = ({ projects }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Some more projects for you to check out
      </Typography>
      <div className={classes.projectsCtr}>
        {projects.map((project) => (
          <div key={uid(project)} className={classes.project}>
            <div>
              <Chip
                label={label[project.category]}
                color="primary"
                classes={{ root: classes.chipRoot, label: classes.chipLabel }}
              />
            </div>
            <Link href={`/our-work/${project.slug}`} passHref>
              <Typography variant="h5" className={classes.name}>
                {project.name}
              </Typography>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
