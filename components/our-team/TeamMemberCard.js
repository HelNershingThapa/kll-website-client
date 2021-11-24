import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  imageFill: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "100%",
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
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
      fontSize: "1.111rem",
      lineHeight: 1.6,
    },
  },
  position: {
    lineHeight: 1,
    color: "#61758A",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(0),
      fontSize: "0.8889rem",
      lineHeight: 1.5,
    },
  },
  bio: {
    color: theme.palette.grey[700],
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
    },
  },
  socialIcon: {
    fontSize: "24px",
    color: theme.palette.grey[600],
  },
}));

function TeamMemberCard({ memberData, key }) {
  const classes = useStyles();
  const {API_URL} = process.env
  

  const { slug, name, bio, position, image } = memberData;

  return (
    <div>
      <div className={classes.imageFill}>
        <Image
          src={`${API_URL}${image.url}`}
          layout="fill"
          objectFit="cover"
          sizes="33vw"
          alt=""
          unoptimized
        />  
      </div>
      <Typography variant="h5" className={classes.name}>
        {name}
      </Typography>
      <Typography className={classes.position}>{position}</Typography>
      <Typography variant="subtitle1" component="p" className={classes.bio}>
        {bio.substring(0, 143)}
        ...{" "}
        <Link href="/our-team/[slug]" as={`/our-team/${slug}`} passHref>
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
        <i
          className={clsx("ri-twitter-fill", classes.socialIcon)}
          style={{ color: "#1DA1F2" }}
        />
        <i
          className={clsx("ri-instagram-line", classes.socialIcon)}
          style={{ color: "#E1306C" }}
        />
        <i
          className={clsx("ri-linkedin-fill", classes.socialIcon)}
          style={{ color: "#0077B5" }}
        />
      </div>
    </div>
  );
}

export default TeamMemberCard;
