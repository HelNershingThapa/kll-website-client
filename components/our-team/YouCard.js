import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 460,
    borderRadius: 0,
  },
  blueBackground: {
    width: '100%',
    height: 460,
    background: theme.palette.primary.main,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: 'calc(100vw - 32px)',
    }
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
    }
  },
  btnRoot: {
    paddingTop: "10px",
    paddingBottom: '10px'
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[700],
  },
  startIcon: {
    marginRight: '5.33px'
  }
}));

function YouCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.content}>
        <div className={classes.blueBackground}>
          <div className={classes.you}>
            <Typography className={classes.youText}>
              you.
            </Typography>
          </div>
        </div>

        <Typography component="p" className={classes.description}>
          We’re always on the look-out for talented people to join our awesome
          group of people. Think you fit in at Kathmandu Living Labs?
        </Typography>
      </CardContent>
      <CardActions className={classes.socialLinks}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={
            <Image
              src="/icons/check-out.svg"
              width={13.33}
              height={13.33}
              alt="check-out"
            />
          }
          classes={{ root: classes.btnRoot, label: classes.btnLabel, startIcon: classes.startIcon }}
        >
          Check-Out Open Positions
        </Button>
      </CardActions>
    </Card>
  );
}

export default YouCard;
