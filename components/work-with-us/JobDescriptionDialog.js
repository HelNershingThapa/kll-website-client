import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
import {
  Button,
  Dialog,
  Divider,
  IconButton,
  Typography,
  Slide,
  Hidden,
} from "@material-ui/core";
import { KLL_EMAIL } from "../../constants";

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
      height: "calc(100vh - 64px)",
      marginTop: "auto",
      maxWidth: "100%",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
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
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(10),
    },
  },
  positionContent: {
    display: "flex",
  },
  closeBtn: {
    position: "absolute",
    zIndex: 4,
    backgroundColor: "#FFFFFF",
    top: "90px",
    left: 0,
    transform: "translate(-50%, 0)",
    padding: "14px",
    borderRadius: "50%",
    boxShadow: "10px 10px 40px rgba(13, 24, 41, 0.2)",

    "&:hover":{
      backgroundColor: "#CAD5E0"
    }
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
  header: {
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
    lineHeight: 1,
  },
  applyNowBtnIcon: {
    fontSize: "16px !important",
  },
  btnIconArrowRight: {
    fontSize: "16px !important",
    color: theme.palette.grey[700],
    lineHeight: 1,
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
  para: {
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.7778rem",
    },
  },
  description: {
    overflowY: "scroll",
    padding: "24px 40px",
    paddingTop: "0px",
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
  listItem: {
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1.428,
    },
  },
  list: {
    margin: 0,
    paddingLeft: theme.spacing(6),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  const slideDirection = screen.width > 992 ? "left" : "up";

  return <Slide direction={slideDirection} ref={ref} {...props} />;
});

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classes.para}>
      {props.children}
    </Typography>
  );
}

const MarkdownHeading = (props) => {
  const classes = useStyles();

  let variant;
  switch (props.level) {
    case 1:
      variant = "h5";
      break;
    case 2:
      variant = "h6";
      break;
    case 3:
      variant = "subtitle1";
      break;
    case 4:
      variant = "subtitle2";
      break;
    default:
      variant = "h6";
      break;
  }
  return (
    <Typography className={classes.header} gutterBottom variant={variant}>
      {props.children}
    </Typography>
  );
};

const MarkdownListItem = (props) => {
  const classes = useStyles();

  return (
    <li className={classes.listItem}>
      <Typography variant="body1" component="span" className={classes.listItem}>
        {props.children}
      </Typography>
    </li>
  );
};

const MarkdownList = (props) => {
  const classes = useStyles();

  return <ul className={classes.list}>{props.children}</ul>;
};

const renderers = {
  paragraph: MarkdownParagraph,
  heading: MarkdownHeading,
  listItem: MarkdownListItem,
  list: MarkdownList,
};

function FullScreenDialog({ vacancy }) {
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
              <div className={classes.positionContent}>
                <Hidden smDown>
                  <IconButton
                    aria-label="close"
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
                <Typography variant="h5" className={classes.position}>
                  {vacancy.position}
                </Typography>
              </div>
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
                  />
                }
                onClick={() => window.open(`mailto:${KLL_EMAIL}`)}
              >
                Apply Now
              </Button>
            </div>
            <Divider className={classes.divider} />
          </div>

          <div className={classes.description}>
            {/* eslint-disable react/no-children-prop */}
            <ReactMarkdown
              children={vacancy.description}
              renderers={renderers}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default FullScreenDialog;
