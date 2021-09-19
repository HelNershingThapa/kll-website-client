import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import fetch from "isomorphic-unfetch";
import {
  Container,
  Typography,
  Divider,
  Avatar,
  Chip,
  IconButton,
  OutlinedInput,
  CircularProgress,
  InputAdornment,
} from "@material-ui/core";
import rightArrowIcon from "public/icons/ArrowRight.svg";
import headerImg from "public/Rectangle124.png";
import BlogListCard from "components/BlogListCard";
import BlogTabs from "components/BlogTabs";
import searchIcon from "public/icons/search.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
  },
  pageTitle: {
    lineHeight: "40px",
    fontFamily: "Manrope",
    color: "#0D1829",
  },
  pageDescription: {
    paddingTop: theme.spacing(2),
    color: "#445668",
  },
  headerImage: {
    position: "relative",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(15),
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
  },
  mainBlogDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  headerTitle: {
    marginTop: theme.spacing(3),
    color: "#F8FAFC",
    fontFamily: "Manrope",
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: 700,
  },
  headerDescription: {
    marginTop: theme.spacing(3),
    maxWidth: "481px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#CAD5E0",
  },
  chipRoot: {
    padding: "6px 12px",
    borderRadius: "8px",
  },
  chipLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "14px",
    padding: 0,
    color: "#F8FAFC",
  },
  timeToRead: {
    color: "#E1E8F0",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
  },
  descriptionHead: {
    display: "flex",
    gap: theme.spacing(8),
    alignItems: "center",
  },
  iconButton: {
    background: "#185ADB !important", //overriding default transparent background color
    height: 60,
    width: 60,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  blogListContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "15px",
    rowGap: theme.spacing(12),
    marginTop: theme.spacing(8),
  },
  search: {
    // "& input:valid + fieldset": {
    //   borderColor: "#CAD5E0",
    //   borderWidth: 1,
    //   padding: "10px 20px",
    // },
  },
  input: {
    padding: "10px 0",
    marginLeft: theme.spacing(1),
    color: theme.palette.grey[700],
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
      color: theme.palette.grey[700],
    },
  },
  adornedStart: {
    paddingLeft: theme.spacing(5),
  },
}));

const BlogList = (props) => {
  const classes = useStyles();
  return (
    <>
    <Head>
      <title>Blog | Kathmandu Living Labs</title>
    </Head>
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" className={classes.pageTitle}>
        Our Blog
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'flex-end' }}>
        <Typography variant="body1" className={classes.pageDescription}>
          See what we’re up to at Kathmandu Living Labs
        </Typography>
        <OutlinedInput
          classes={{
            root: classes.search,
            input: classes.input,
            adornedStart: classes.adornedStart,
          }}
          placeholder="Search for Blog Posts"
          variant="outlined"
          startAdornment={
            <InputAdornment position="start">
              <Image src="/icons/search.svg" width={16} height={16} />
            </InputAdornment>
          }
        />
      </div>
      <div className={classes.headerImage}>
        <Image src={headerImg} alt="KLL Blog" priority/>
        <div className={classes.headerBlogOverlay}>
          <div className={classes.mainBlogDescription}>
            <div className={classes.descriptionHead}>
              <Chip
                label="Featured"
                color="primary"
                classes={{ root: classes.chipRoot, label: classes.chipLabel }}
              />
              <Typography variant="subtitle1" className={classes.timeToRead}>
                12 min read
              </Typography>
            </div>
            <Typography variant="h5" className={classes.headerTitle}>
              Girls Mapping their Community
            </Typography>
            <Typography
              variant="subtitle2"
              className={classes.headerDescription}
            >
              We need more girl mappers and their contribution in open
              geographic data. As, we believe that when a girl maps or uses the
              open...
            </Typography>
          </div>
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
        </div>
      </div>

      <BlogTabs />

      <div className={classes.blogListContainer}>
        {["", "", "", "", "", ""].map((blog) => (
          <BlogListCard key={uid(blog)} />
        ))}
      </div>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          marginTop: "44px",
        }}
      >
        <CircularProgress
          color="secondary"
          style={{ color: "#61758A" }}
          size={24}
        />
      </div>
    </Container>
    </>
  );
};

export default BlogList;
