import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography, IconButton, Hidden } from "@material-ui/core";
import rightArrowIcon from "public/icons/ArrowRight.svg";

const useStyles = makeStyles((theme) => ({
  headerImage: {
    position: "relative",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(10),
    },
  },
  headerBlogOverlay: {
    position: "absolute",
    background: "linear-gradient(180deg, rgba(13, 24, 41, 0) 0%, #0d1829 100%)",
    bottom: 0,
    padding: theme.spacing(10),
    width: "100%",
    height: "71%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3),
    },
  },
  mainBlogDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  title: {
    marginTop: theme.spacing(3),
    color: theme.palette.grey[50],
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
    },
  },
  description: {
    marginTop: theme.spacing(3),
    maxWidth: "481px",
    fontWeight: "400",
    color: theme.palette.grey[300],
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      fontSize: "14px",
      width: '100%'
    },
  },
  iconButton: {
    background: "#185ADB !important", //overriding default transparent background color
    height: 60,
    width: 60,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  timeToRead: {
    color: theme.palette.grey[200],
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  descriptionHead: {
    display: "flex",
    gap: theme.spacing(8),
    alignItems: "center",
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: 572,
    [theme.breakpoints.down("xs")]: {
      height: "85vw",
    },
  },
}));

const TopBlog = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerImage}>
      <div className={classes.imgFill}>
        <Image
          priority
          className={classes.image}
          src="/blog-list-header.png"
          layout="fill"
          objectFit="cover"
          alt="KLL Blog"
        />
      </div>
      <div className={classes.headerBlogOverlay}>
        <div className={classes.mainBlogDescription}>
          <div className={classes.descriptionHead}>
            <Chip label="Featured" color="primary" />
            <Typography variant="subtitle1" className={classes.timeToRead}>
              12 min read
            </Typography>
          </div>
          <Typography variant="h4" className={classes.title}>
            Girls Mapping their Community
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            We need more girl mappers and their contribution in open geographic
            data. As, we believe that when a girl maps or uses the open...
          </Typography>
        </div>
        <Hidden xsDown>
        <div style={{ display: "block", marginTop: "auto" }}>
          <IconButton
            aria-label="delete"
            disabled
            color="primary"
            className={classes.iconButton}
          >
            <Image
              src={rightArrowIcon}
              height={16}
              width={16}
              alt="right arrow icon"
            />
          </IconButton>
        </div>
        </Hidden>

      </div>
    </div>
  );
};

export default TopBlog;
