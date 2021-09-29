import Link from "next/link";
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
    width: 460,
  },
  image: {
    height: 460,
    width: 460,
  },
  content: {
    padding: 0,
  },
  name: {
    fontFamily: "Manrope",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    color: theme.palette.grey[800],
    marginTop: theme.spacing(4),
  },
  position: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "18px",
    color: "#61758A",
    marginTop: theme.spacing(1),
  },
  bio: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: theme.palette.grey[700],
    marginTop: theme.spacing(5),
  },
  readMore: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    cursor: 'pointer'
  },
  socialLinks: {
    padding: 0,
    marginTop: theme.spacing(5),
    display: "flex",
    gap: theme.spacing(4),
    alignItems: "center",
  },
}));

function TeamMemberCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        className={classes.image}
        component="img"
        alt="Contemplative Reptile"
        image="/team-member.png"
        title="Contemplative Reptile"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.name}>Aishworya Shrestha</Typography>
        <Typography className={classes.position}>Research Assistant</Typography>
        <Typography component="p" className={classes.bio}>
          Aishworya is a research assistant working under the PEER Science
          Project at KLL. She is a social science researcher with a background
          in Social ...{" "}
          <Link href="/our-team/arogya-koirala">
            <Typography
              variant="body2"
              className={classes.readMore}
              display="inline"
              color="primary"
            >
              Read More
            </Typography>
          </Link>
        </Typography>
      </CardContent>
      <CardActions className={classes.socialLinks}>
        <Image
          src="/icons/twitter-logo.svg"
          height={20}
          width={20}
          alt="twitter icon"
        />
        <Image
          src="/icons/ig-logo.svg"
          height={20}
          width={20}
          alt="twitter icon"
        />
        <Image
          src="/icons/linkedin-logo.svg"
          height={20}
          width={20}
          alt="twitter icon"
        />
      </CardActions>
    </Card>
  );
}

export default TeamMemberCard;
