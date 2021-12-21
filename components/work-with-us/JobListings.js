import { uid } from "react-uid";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import JobDescriptionDialog from "components/work-with-us/JobDescriptionDialog";

const useStyles = makeStyles((theme) => ({
  jobListingsContainer: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(20),
    maxWidth: "860px",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: "48px 0"
    }
  },
  jobListingsHeader: {
    lineHeight: 1.25,
    marginBottom: theme.spacing(4),
  },
  jobList: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(4, 0),
    borderBottom: "1px solid #CAD5E0",
  },
  position: {
    fontSize: "1.111rem",
    fontWeight: 600,
    lineHeight: 1,
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
    },
  },
  level: {
    marginTop: theme.spacing(1),
    fontSize: "0.7778rem",
    fontWeight: 400,
    lineHeight: 1,
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7778rem",
    },
  },
  deadline: {
    marginTop: theme.spacing(1),
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: 1,
    color: theme.palette.grey[700],
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8889rem",
    },
  },
  tableCell: {
    padding: 0,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderBottom: "1px solid #CAD5E0",
  },
}));

function JobListings({ vacancies }) {
  const classes = useStyles();

  return (
    <Container fixed id="jobListingRoot">
      <div className={classes.jobListingsContainer}>
        <Typography variant="h4" className={classes.jobListingsHeader}>
          Job Listings
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {vacancies.map((vacancy) => (
                <TableRow key={uid(vacancy)}>
                  <TableCell className={classes.tableCell}>
                    <Typography className={classes.position}>
                      {vacancy.position}
                    </Typography>
                    <Typography className={classes.level}>
                      {vacancy.level}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" className={classes.tableCell}>
                    {" "}
                    <Typography className={classes.level}>
                      Apply Before
                    </Typography>
                    <Typography className={classes.deadline}>
                      {vacancy.deadline}
                    </Typography>
                  </TableCell>
                  <TableCell align="right" className={classes.tableCell}>
                    <JobDescriptionDialog vacancy={vacancy} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

export default JobListings;
