import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  imageFill: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    [theme.breakpoints.down("xs")]: {
      height: "calc(100vw - 32px)",
    },
  },
  content: {
    // padding: 0,
  },
  name: {
    color: theme.palette.grey[800],
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("xs")]:{
      marginTop: theme.spacing(3),
      fontSize: '1.111rem',
      lineHeight: 1.6,
    }
  },
  position: {
    lineHeight: 1,
    color: "#61758A",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("xs")]:{
      marginTop: theme.spacing(0),
      fontSize: '0.8889rem',
      lineHeight: 1.5,
    },
  },
  bio: {
    color: theme.palette.grey[700],
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("xs")]:{
      marginTop: theme.spacing(2),      
    },
  },
  readMore: {
    fontWeight: 600,
    cursor: "pointer",
  },
  socialLinks: {
    padding: 0,
    marginTop: theme.spacing(5),
    display: "flex",
    gap: theme.spacing(3),
    alignItems: "center",
    [theme.breakpoints.down("xs")]:{
      marginTop: theme.spacing(4),      
    },
  },
}));

function TeamMemberCard() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.imageFill}>
        <Image src="/team-member.png" layout="fill" objectFit="cover" alt="" />
      </div>
      <Typography variant="h5" className={classes.name}>Aishworya Shrestha</Typography>
      <Typography className={classes.position}>Research Assistant</Typography>
      <Typography variant="subtitle1" component="p" className={classes.bio}>
        Aishworya is a research assistant working under the PEER Science Project
        at KLL. She is a social science researcher with a background in Social
        ...{" "}
        <Link href="/our-team/arogya-koirala">
          <Typography
            variant="subtitle1"
            className={classes.readMore}
            display="inline"
            color="primary"
          >
            Read More
          </Typography>
        </Link>
      </Typography>
      <div className={classes.socialLinks}>
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
      </div>
    </div>
  );
}

export default TeamMemberCard;
