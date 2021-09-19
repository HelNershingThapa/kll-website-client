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
    name:
      "Mapping and Opening Data for Local Governance and Citizen Engagement (Model4G)",
    category: "Mapping",
  },
  {
    name: "Earthquake Risk Exposure Survey Web Application",
    category: "Disaster Prevention",
  },
  {
    name:
      "Engaging Youth and Students in Mapping Agriculture and Food Security for a better world",
    category: "Mapping",
  },
  {
    name:
      "Mapping and Opening Data for Local Governance and Citizen Engagement (Model4G)",
    category: "Mapping",
  },
  {
    name: "Earthquake Risk Exposure Survey Web Application",
    category: "Disaster Prevention",
  },
  {
    name:
      "Engaging Youth and Students in Mapping Agriculture and Food Security for a better world",
    category: "Mapping",
  },
  {
    name:
      "Mapping and Opening Data for Local Governance and Citizen Engagement (Model4G)",
    category: "Mapping",
  },
  {
    name: "Earthquake Risk Exposure Survey Web Application",
    category: "Disaster Prevention",
  },
  {
    name:
      "Engaging Youth and Students in Mapping Agriculture and Food Security for a better world",
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
      width: 323,
      color: theme.palette.grey[800],
      marginBottom: theme.spacing(12),
    },
  },
  name: {
    fontWeight: 600,
    marginTop: theme.spacing(3)
  },
  // chipRoot: {
  //   padding: "6px 12px",
  //   borderRadius: "8px",
  // },
  // chipLabel: {
  //   fontSize: "14px",
  //   fontWeight: 500,
  //   color: theme.palette.grey[50],
  //   padding: 0,
  // },
  // tableRow: {
  //
  // },
  tableCell: {
    padding: 0,
  },
  tableRow: {
    "& td:not(:first-child)": {
      paddingLeft: "15px",
    },
  },
  tableBody: {
    "& tr": {
      "& td:not(:first-child):not(:last-child)": {
        paddingLeft: "15px",
        borderLeft: '1px solid #CAD5E0',
        borderRight: '1px solid #CAD5E0',
      },
    },
    "& tr:first-child": {
      "& td": {
        paddingBottom: theme.spacing(8),
      },
    },
    "& tr:not(:first-child)": {
      "& td:not(:first-child)": {
        paddingLeft: "15px",
      },
    },
    "& tr:not(:first-child):not(:last-child)": {
      "& td": {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
    },
    "& tr:last-child": {
      "& td": {
        paddingTop: theme.spacing(8),
        borderBottom: 'none'
      },
    },
  },
}));

const MoreProjects = ({ name, category, src }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Some more projects for you to check out
        </Typography>
        <TableContainer>
          <Table
            className={classes.table}
            aria-label="simple table"
            style={{ tableLayout: "fixed" }}
          >
            <TableBody className={classes.tableBody}>
              {result.map((row) => (
                <TableRow key={uid(row)} className={classes.tableRow}>
                  {row.map((project) => (
                    <TableCell key={uid(project)} className={classes.tableCell}>
                      <div key={uid(project)} className={classes.project}>
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
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default MoreProjects;
