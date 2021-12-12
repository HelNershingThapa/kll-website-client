import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { uid } from "react-uid";
import fetch from "isomorphic-unfetch";
import {
  Container,
  Typography,
  OutlinedInput,
  CircularProgress,
  InputAdornment,
} from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroller";
import BlogListCard from "components/blog/BlogListCard";
import BlogTabs from "components/blog/BlogTabs";
import TopBlog from "../../components/blog/TopBlog";
import { tablet } from "../../styles/theme";
import useIntersection from "components/blog/useIntersection";
import NoResultFound from "../../components/blog/NoResultFound";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(16),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(9),
    },
  },
  pageTitle: {
    color: "#0D1829",
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(1),
    },
  },
  pageDescription: {
    color: "#445668",
    "& b": {
      fontWeight: 500,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  headerAction: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: theme.spacing(4),
    },
  },
  blogListContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "15px",
    rowGap: theme.spacing(12),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down(tablet)]: {
      gridTemplateColumns: "1fr",
      rowGap: theme.spacing(8),
      marginTop: theme.spacing(4),
    },
  },
  search: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
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

const BlogList = ({ featuredBlog }) => {
  const classes = useStyles();
  const [category, setCategory] = useState("none");
  const [blogs, setBlogs] = useState([]);
  const [blogCount, setBlogCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const { API_URL } = process.env;

  const hasMore = blogs.length < blogCount;

  useEffect(() => {
    loadFunc();
  }, []);

  async function loadFunc() {
    let categoryQuery = "";
    if (category === "newest") {
      categoryQuery = "&_sort=created_at:desc";
    } else if (category === "oldest") {
      categoryQuery = "&_sort=created_at";
    } else if (category === "none" || category === "relevant") {
      categoryQuery = "";
    } else {
      categoryQuery = `&category=${category}`;
    }
    const countRes = await fetch(
      `${API_URL}/blogs/count?isFeatured=false${
        searchQuery === "" ? "" : `&title_contains=${searchQuery}`
      }${categoryQuery}`
    );
    const resCount = await countRes.json();
    setBlogCount(resCount);

    const res = await fetch(
      `${API_URL}/blogs?_start=${blogs.length}&_limit=6&isFeatured=false${
        searchQuery === "" ? "" : `&title_contains=${searchQuery}`
      }${categoryQuery}`
    );
    const blogRes = await res.json();
    setBlogs(blogs.concat(blogRes));
  }

  return (
    <>
      <Head>
        <title>Blog | Kathmandu Living Labs</title>
      </Head>
      <Container fixed className={classes.container}>
        <Typography variant="h4" className={classes.pageTitle}>
          {searchQuery ? "Search Results" : "Our Blog"}
        </Typography>
        <div className={classes.headerAction}>
          {!searchQuery ? (
            <Typography variant="body1" className={classes.pageDescription}>
              Read what we have been upto at KLL.
            </Typography>
          ) : (
            <Typography variant="body1" className={classes.pageDescription}>
              We found {blogCount} results for <b>&quot;{searchQuery}&quot;</b>
            </Typography>
          )}
          <OutlinedInput
            classes={{
              root: classes.search,
              input: classes.input,
              adornedStart: classes.adornedStart,
            }}
            placeholder="Search for Blog Posts"
            variant="outlined"
            value={searchQuery}
            startAdornment={
              <InputAdornment position="start">
                <i
                  className="ri-search-2-line"
                  style={{ fontSize: "16px" }}
                ></i>
              </InputAdornment>
            }
            onChange={(e) => {
              setBlogs([]);
              setSearchQuery(e.target.value);
              loadFunc();
              setCategory("relevant");
              e.target.value === "" && setCategory("none");
            }}
          />
        </div>
        {!searchQuery && <TopBlog featuredBlog={featuredBlog} />}

        {blogCount > 0 && (
          <BlogTabs
            category={category}
            setCategory={setCategory}
            loadFunc={loadFunc}
            setBlogs={setBlogs}
            searchQuery={searchQuery}
          />
        )}

        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={hasMore}
          loader={
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
          }
        >
          <div className={classes.blogListContainer}>
            {blogs &&
              blogs.map((blog) => <BlogListCard key={uid(blog)} blog={blog} />)}
          </div>
        </InfiniteScroll>
        {blogCount === 0 && searchQuery && (
          <NoResultFound
            setCategory={setCategory}
            setSearchQuery={setSearchQuery}
            loadFunc={loadFunc}
          />
        )}
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const response = await fetch(`${API_URL}/blogs?isFeatured=true`);
  const featuredBlog = await response.json();

  // const res = await fetch(`${API_URL}/blogs?isFeatured=false`);
  // const blogs = await res.json();

  return {
    props: {
      featuredBlog: featuredBlog[0],
      // blogs,
    },
  };
}

export default BlogList;
