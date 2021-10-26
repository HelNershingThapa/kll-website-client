import React from "react";
import clsx from "clsx";
import { uid } from "react-uid";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Hidden } from "@material-ui/core";

const job = {
  position: "Data Engineer",
  para1:
    "At Kathmandu Living Labs, our mission is to be a role model technology company. We want to be trusted partners, world-class engineers, and creative innovators for our clients. We have built awesome software products across various verticals and take pride in our craftsmanship that has produced greater results in the software industry and the overall ecosystem.",
  para2:
    "As a Data Engineer, you will closely work with to build data processing, data warehousing infrastructure, and data visualization systems. You will be part of a learning culture where teamwork and collaboration are encouraged, excellence is rewarded, and diversity is respected and valued.",
  qualities: [
    "Follow software development best practices and industry standards to deliver a robust system",
    "Write analytical queries based on business requirements.",
    "Design database schema based on the product requirements.",
    "Prepare flow diagram and technical documentation.",
    "Work and collaborate independently or in a team.",
  ],
  requirements: [
    "At least 4 years of experience in software development using relational databases & SQL (PL/SQL, T-SQL is preferred).",
    "Well-versed and experienced with at least one of the programming languages (Preferred: Python, JavaScript, etc).",
    "Strong knowledge of OLTP and OLAP database design, best practices, and database architecture with experience in Data Warehouse design and data analysis.",
    "Must have hands-on experience in ETL, data transformation, functions, stored procedures, triggers, etc.",
    "Strong computing foundation and fundamentals.",
    "End to end understanding of software components and architectural layers - frontend, backend, REST APIs, OLTP, OLAP databases, etc.",
    "Strong analytical and problem-solving skills and well-versed with fundamental programming concepts and/or data structures and algorithms.",
  ],
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
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
    marginLeft: theme.spacing(1),
  },
  dialog: {
    maxWidth: 920,
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 92px)",
      marginTop: "auto",
      maxWidth: "100%",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    "& p": {
      color: theme.palette.grey[600],
    },
  },
  fixated: {
    padding: theme.spacing(0, 10),
  },
  positionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(25),
  },
  description: {
    flex: 2,
    overflow: "auto",
    padding: theme.spacing(0, 10),
    paddingRight: theme.spacing(4),
    marginRight: theme.spacing(4),
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      borderRadius: "23px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.grey[300],
      borderRadius: "23px",
    },
  },
  applyNowBtn: {
    padding: theme.spacing(3, 4),
  },
  arrowUpBtn: {
    padding: "10px",
    border: "1px solid #CAD5E0",
    borderRadius: "4px",
  },
  arrowUpBtnLabel: {
    lineHeight: "16px",
  },
  position: {
    lineHeight: 1,
  },
  divider: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6),
  },
  jobDescriptionTypo: {
    marginBottom: theme.spacing(2),
    lineHeight: 1.6,
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  qualitiesCtr: {
    marginTop: theme.spacing(4),
  },
  jobRequirementsTypo: {
    marginTop: theme.spacing(12),
  },
  requirementsCtr: {
    marginTop: theme.spacing(2),
  },
  closeDialogIcon: {
    fontSize: "32px",
  },
  applyNowBtnIcon: {
    fontSize: "16px !important",
  },
  closeBtn: {
    position: "absolute",
    top: "90px",
    left: 0,
    transform: "translate(-50%, 0)",
    padding: "14px",
    borderRadius: "50%",
    boxShadow: "10px 10px 40px rgba(13, 24, 41, 0.2)",
  },
  btnIconArrowRight: {
    fontSize: "16px !important",
    color: theme.palette.grey[700],
  },
  // "@global": {
  //   "*::-webkit-scrollbar": {
  //     width: "8px",
  //   },
  //   "*::-webkit-scrollbar-track": {
  //     "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  //     borderRadius: "23px",
  //   },
  //   "*::-webkit-scrollbar-thumb": {
  //     backgroundColor: theme.palette.grey[300],
  //     borderRadius: "23px",
  //   },
  // },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  const slideDirection = screen.width > 992 ? "left" : "up";

  return <Slide direction={slideDirection} ref={ref} {...props} />;
});

function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Hidden smDown>
        <Button
          variant="outlined"
          classes={{
            root: classes.seeDetailsBtn,
            label: classes.label,
            endIcon: classes.icon,
          }}
          endIcon={
            <i
              className={clsx("ri-arrow-right-line", classes.btnIconArrowRight)}
            />
          }
          onClick={handleClickOpen}
        >
          See Details
        </Button>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          variant="outlined"
          classes={{
            root: classes.arrowUpBtn,
            label: classes.arrowUpBtnLabel,
          }}
          onClick={handleClickOpen}
        >
          <i className={clsx("ri-arrow-up-line", classes.btnIconArrowRight)} />
        </IconButton>
      </Hidden>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className={classes.dialog}
      >
        <div className={classes.content}>
          <div className={classes.fixated}>
            <div className={classes.positionContainer}>
              <Typography variant="h5" className={classes.position}>
                Data Engineer
              </Typography>
              <Button
                className={classes.applyNowBtn}
                variant="contained"
                color="primary"
                startIcon={
                  <i
                    className={clsx(
                      "ri-file-copy-2-line",
                      classes.applyNowBtnIcon
                    )}
                  ></i>
                }
              >
                Apply Now
              </Button>
              <Hidden smDown>
                <IconButton
                  aria-label="delete"
                  className={classes.closeBtn}
                  onClick={() => handleClose()}
                >
                  <i
                    className={clsx(
                      "ri-arrow-left-line",
                      classes.closeDialogIcon
                    )}
                  />
                </IconButton>
              </Hidden>
            </div>
            <Divider className={classes.divider} />
          </div>

          <div className={classes.description}>
            <Typography variant="h6" className={classes.jobDescriptionTypo}>
              Job Description
            </Typography>
            <div className={classes.paragraphs}>
              <Typography variant="body1">{job.para1}</Typography>
              <Typography variant="body1">{job.para2}</Typography>
            </div>
            <div className={classes.qualitiesCtr}>
              {job.qualities.map((quality) => (
                <Typography key={uid(quality)} variant="body1">
                  &rarr;&nbsp;{quality}
                </Typography>
              ))}
            </div>
            <Typography variant="h5" className={classes.jobRequirementsTypo}>
              Job Requirements
            </Typography>
            <div className={classes.requirementsCtr}>
              <ul style={{ paddingLeft: "2rem" }}>
                {job.requirements.map((requirement) => (
                  <Typography key={uid(requirement)} variant="body1">
                    <li>{requirement}</li>
                  </Typography>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default FullScreenDialog;
