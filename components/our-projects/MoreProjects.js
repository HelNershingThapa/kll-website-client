import { uid } from "react-uid";
import Image from "next/image";
import { Chip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    "& h4": {
      maxWidth: 323,
      color: theme.palette.grey[800],
      marginBottom: theme.spacing(12),
      lineHeight: 1.25,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(15),
      "& h4": {
        maxWidth: "65vw",
        fontSize: "1.333rem",
        lineHeight: 1.333,
        color: theme.palette.grey[800],
        marginBottom: theme.spacing(1),
      },
    },
  },
  name: {
    fontWeight: 600,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
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

const MoreProjects = ({ name, category, src }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">
        Some more projects for you to check out
      </Typography>
      <div className={classes.projectsCtr}>
        {moreProjects.map((project) => (
          <div key={uid(project)} className={classes.project}>
            {/* <Chip
                label={project.category}
                color="primary"
                classes={{
                  root: classes.chipRoot,
                  label: classes.chipLabel,
                }}
              /> */}
            <div>
              <Chip
                label="Mapping"
                color="primary"
                classes={{ root: classes.chipRoot, label: classes.chipLabel }}
              />
            </div>
            <Typography variant="h5" className={classes.name}>
              {project.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
