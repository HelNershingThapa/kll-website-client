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
    },
  },
  name: {
    fontWeight: 600,
    marginTop: theme.spacing(3),
  },
  projectsCtr: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "1px",
    background: "black",
    "& project:nth-child(-n + 3)": {
      paddingTop: 0,
      borderTop: 'none',
    },
    "& :nth-child(3n)": {
      paddingRight: 0,
    },
    "& :nth-child(3n - 2)": {
      paddingLeft: 0,
    },
    "& :nth-child(n+7)": {
      paddingBottom: 0,
    },
  },
  project: {
    outline: "1px solid #CAD5E0",
    padding: "32px 15px",
    background: "white",
  },
}));

const MoreProjects = ({ name, category, src }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Some more projects for you to check out
      </Typography>
      <div className={classes.projectsCtr}>
        {moreProjects.map((project) => (
          <div key={uid(project)} className={classes.project}>
            <div style={{ margin: "auto" }}>
              <Chip
                label={project.category}
                color="primary"
                classes={{
                  root: classes.chipRoot,
                  label: classes.chipLabel,
                }}
              />
              <Typography variant="h5" className={classes.name}>
                {project.name}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
