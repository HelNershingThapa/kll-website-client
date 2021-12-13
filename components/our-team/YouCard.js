import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 460,
    borderRadius: 0,
  },
  blueBackground: {
    width: "100%",
    height: 0,
    paddingBottom: "100%",
    background: theme.palette.primary.main,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "calc(100vw - 32px)",
    },
  },
  you: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  content: {
    padding: 0,
  },
  description: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: theme.palette.grey[700],
    marginTop: theme.spacing(4),
  },
  socialLinks: {
    padding: 0,
    marginTop: theme.spacing(5),
    display: "flex",
    gap: theme.spacing(4),
    alignItems: "center",
  },
  youText: {
    fontFamily: "Manrope",
    fontSize: "3.33rem",
    fontWeight: 800,
    lineHeight: 1,
    color: theme.palette.grey[50],
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.485rem",
    },
  },
  btnRoot: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[700],
  },
  iconSizeMedium: {
    "& > *:first-child": {
      fontSize: 16,
      lineHeight: 1,
    },
  },
  startIcon: {
    marginRight: theme.spacing(1),
  },
}));

function YouCard() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.content}>
        <div className={classes.blueBackground}>
          <div className={classes.you}>
            <Typography className={classes.youText}>you.</Typography>
          </div>
        </div>

        <Typography component="p" className={classes.description}>
          {`We are always on the look-out for passionate people to join our team. Think you fit in at Kathmandu Living Labs?`}
        </Typography>
      </CardContent>
      <CardActions className={classes.socialLinks}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<i className={clsx("ri-eye-2-line", classes.btnIcon)} />}
          classes={{
            root: classes.btnRoot,
            label: classes.btnLabel,
            startIcon: classes.startIcon,
            iconSizeMedium: classes.iconSizeMedium,
          }}
          onClick={() =>
            router.push({
              pathname: "/work-with-us",
              hash: "joblistings",
            })
          }
        >
          Check-Out Open Positions
        </Button>
      </CardActions>
    </Card>
  );
}

export default YouCard;
