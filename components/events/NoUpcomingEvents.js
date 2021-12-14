import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  noUpcomingEventsContainer: {
    maxWidth: "522px",
    marginTop: theme.spacing(30),
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(35),
  },
  calendarCrossFill: {
    position: "relative",
    width: 80,
    height: 80,
    [theme.breakpoints.down("xs")]: {
      width: 60,
      height: 60,
    },
  },
  nullEventsTitle: {
    marginTop: theme.spacing(10),
    fontFamily: "Manrope",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "32px",
    color: theme.palette.grey[900],
  },
  nullEventsDescription: {
    marginTop: theme.spacing(2),
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1.428,
    },
  },
  pastEventsBtn: {
    padding: theme.spacing(2.5, 11.5),
    marginTop: theme.spacing(8),
    borderRadius: 4,
  },
  pastEventsBtnLabel: {
    fontSize: "0.7778rem",
    fontWeight: 500,
    lineHeight: 1.428,
    color: theme.palette.grey[700],
  },
  startIcon: {
    marginRight: theme.spacing(1),
  },
  iconSizeMedium: {
    "& > *:first-child": {
      fontSize: 16,
      lineHeight: 1,
    },
  },
}));

function NoUpcomingEvents({ setValue }) {
  const classes = useStyles();

  return (
    <div className={classes.noUpcomingEventsContainer}>
      <div className={classes.calendarCrossFill}>
        <Image
          src="/icons/calendar-cross.svg"
          alt="calendar cross"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Typography className={classes.nullEventsTitle} variant="subtitle2">
        No Events Found
      </Typography>
      <Typography
        className={classes.nullEventsDescription}
        variant="body1"
        align="center"
      >
        Sorry! We do not have any events happening at the moment. Please try
        visiting this page at a later time. In the meantime, feel free to
        explore our past events.
      </Typography>
      <Button
        variant="outlined"
        classes={{
          root: classes.pastEventsBtn,
          label: classes.pastEventsBtnLabel,
          startIcon: classes.startIcon,
          iconSizeMedium: classes.iconSizeMedium,
        }}
        startIcon={<i className={clsx("ri-eye-2-line", classes.btnIcon)} />}
        onClick={() => setValue("Past Events")}
      >
        Check Out Past Events
      </Button>
    </div>
  );
}

export default NoUpcomingEvents;
