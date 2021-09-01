import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Container,
  Typography,
  Grid,
  Avatar,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const jobListings = [
  {
    title: "Full Stack Developer",
    level: "Mid Level",
    deadline: "Sep 15 2021",
  },
  {
    title: "UIUX Designer",
    level: "Mid Level",
    deadline: "Sep 15 2021",
  },
  {
    title: "Business Development",
    level: "Senior Level",
    deadline: "Sep 15 2021",
  },
  {
    title: "Python Engineer",
    level: "Mid Level",
    deadline: "Sep 15 2021",
  },
];

const useStyles = makeStyles((theme) => ({
  jobListingsContainer: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(20),
  },
  jobListingsHeader: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    color: "#0D1829",
    marginBottom: theme.spacing(4),
  },
  jobList: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(4, 0),
    borderBottom: "1px solid #CAD5E0",
  },
  position: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "20px",
    color: "#304254",
  },
  level: {
    marginTop: theme.spacing(1),
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "16px",
    color: "#445668",
  },
  deadline: {
    marginTop: theme.spacing(1),
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "18px",
    color: "#304254",
  },
  tableCell: {
    padding: 0,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderBottom: "1px solid #CAD5E0",
  },
  seeDetailsBtn: {
    padding: "10px 20px",
    borderColor: "#CAD5E0",
  },
  label: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#304254",
  },
  icon: {
    marginLeft: "6.67px",
  },
}));

function JobListings() {
  const classes = useStyles();
  return (
    <div className={classes.jobListingsContainer}>
      <Typography variant="h6" className={classes.jobListingsHeader}>
        Job Listings
      </Typography>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {jobListings.map((job) => (
              <TableRow key={uid(job)}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableCell}
                >
                  <Typography variant="h6" className={classes.position}>
                    {job.title}
                  </Typography>
                  <Typography variant="h6" className={classes.level}>
                    {job.level}
                  </Typography>
                </TableCell>
                <TableCell align="left" className={classes.tableCell}>
                  {" "}
                  <Typography variant="h6" className={classes.level}>
                    Apply Before
                  </Typography>
                  <Typography variant="h6" className={classes.deadline}>
                    {job.deadline}
                  </Typography>
                </TableCell>
                <TableCell align="right" className={classes.tableCell}>
                  <Button
                    variant="outlined"
                    classes={{
                      root: classes.seeDetailsBtn,
                      label: classes.label,
                      endIcon: classes.icon,
                    }}
                    endIcon={
                      <Image
                        src="/icons/buttonRightIcon.svg"
                        width={11}
                        height={11}
                        alt="btnicon"
                      />
                    }
                  >
                    See Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default JobListings;
