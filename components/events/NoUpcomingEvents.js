import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  noUpcomingEventsContainer: {
    maxWidth: "522px",
    marginTop: theme.spacing(10),
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  calendarCrossFill: {
    position: "relative",
    width: 80,
    height: 80,
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
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    color: theme.palette.grey[600],
  },
  pastEventsBtn: {
    padding: theme.spacing(3, 6),
    background: theme.palette.grey[100],
    marginTop: theme.spacing(8),
    borderRadius: 4,
  },
  pastEventsBtnLabel: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "16px",
    color: theme.palette.grey[700],
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
        classes={{
          root: classes.pastEventsBtn,
          label: classes.pastEventsBtnLabel,
        }}
        onClick={() => setValue("Past Events")}
      >
        Check Out Past Events
      </Button>
    </div>
  );
}

export default NoUpcomingEvents;
