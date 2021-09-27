import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  recurringEventsContainer: {
    padding: theme.spacing(6),
    background: "#F3F6FD",
    borderRadius: 8,
  },
  recurringTitle: {
    marginTop: theme.spacing(4),
    fontFamily: "Manrope",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "32px",
    color: theme.palette.grey[900],
    width: 224,
  },
  recurringDescription: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    color: theme.palette.grey[800],
    marginTop: theme.spacing(4),
  },
  divider: {
    background: "#A3BDF1",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  recurringLinks: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    "& div": {
      display: "flex",
      justifyContent: "space-between",
      "& p": {
        fontWeight: 500,
      },
    },
  },
  arrowRightIcon: {
    fontSize: '18px',
    color: theme.palette.primary.main,
  },
}));

function RecurringEvents() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.recurringEventsContainer}>
        <div style={{ width: 80, height: 80, position: "relative" }}>
          <Image
            src="/icons/calendar.svg"
            layout="fill"
            objectFit="cover"
            alt="calender"
          />
        </div>
        <Typography className={classes.recurringTitle}>
          Recurring Events at Kathmandu Living Labs
        </Typography>
        <Typography className={classes.recurringDescription}>
          Every month, we organize some recurring events for the Mapping
          Community. You’re welcome to join us during our monthly events to get
          in touch with us and contribute to the Open Mapping Community
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.recurringLinks}>
          <div>
            <Typography variant="body1" color="primary">
              Monthly Mapping Group
            </Typography>{" "}
            <i
              className={clsx("ri-arrow-right-line", classes.arrowRightIcon)}
            />
          </div>
          <div>
            <Typography variant="body1" color="primary">
              KLL Monthly News Event
            </Typography>{" "}
            <i
              className={clsx("ri-arrow-right-line", classes.arrowRightIcon)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecurringEvents;
