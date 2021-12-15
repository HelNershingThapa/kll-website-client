import { useRouter } from "next/router";
import { uid } from "react-uid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";
import BlogListCard from "components/blog/BlogListCard";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundImage: "url('/blog-bg.png')",
      mixBlendMode: "luminosity",
      opacity: 0.8,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(18),
    },
  },
  title: {
    fontFamily: "Manrope",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "0.12em",
    color: theme.palette.grey[900],
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    lineHeight: 1.25,
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(8),
    },
  },
  blogListContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "15px",
    [theme.breakpoints.only("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      rowGap: theme.spacing(8),
    },
  },
  btnRoot: {
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translate(-50%, 50%)",
    padding: "14px 32px",
    background: "#fff",
    whiteSpace: 'nowrap',
  },
}));

const OurInsights = ({ blogs }) => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container fixed>
          <Typography
            align="center"
            variant="subtitle2"
            className={classes.title}
          >
            BLOG
          </Typography>
          <Typography align="center" variant="h4" className={classes.subtitle}>
            Our Insights
          </Typography>
          <div className={classes.blogListContainer}>
            {blogs.map((blog) => (
              <BlogListCard key={uid(blog)} blog={blog} />
            ))}
          </div>
          <Button
            variant="outlined"
            classes={{ root: classes.btnRoot }}
            onClick={() => router.push("/blog")}
          >
            More at our blog{" "}
          </Button>
        </Container>

      </div>
    </>
  );
};

export default OurInsights;
