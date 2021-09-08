import { uid } from "react-uid";
import clsx from "clsx";
import fetch from "isomorphic-unfetch";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Typography, Divider, Avatar, Container } from "@material-ui/core";
import NavBar from "components/NavBar";
import author from "public/author.png";
import groupPhoto from "public/image2.png";
import fullWidthPhoto from "public/image3.png";
import blogImage1 from "public/Rectangle3.png";
import blogImage2 from "public/Rectangle4.png";
import BlogListCard from "components/BlogListCard";
import styles from "../../styles/BlogDetail.module.css";

const useStyles = makeStyles((theme) => ({
  blog: {
    margin: "auto",
    marginTop: "1.78rem",
    maxWidth: "800px",
  },
  headerImageContainer: {
    position: "relative",
  },
  headerImageOverlay: {
    position: "absolute",
    background: "linear-gradient(180deg, #0D1829 0%, rgba(13, 24, 41, 0) 100%)",
    transform: 'matrix(1, 0, 0, -1, 0, 0)',
    bottom: 0,
    padding: theme.spacing(10),
    width: "100%",
    height: "40%",
  },
  timestamp: {
    display: "flex",
    gap: "1.78rem",
    marginBottom: "0.67rem",
    color: theme.palette.grey[700],
  },
  author: {
    display: "flex",
    gap: theme.spacing(3),
    marginTop: theme.spacing(5),
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(6),
  },
  authorDetails: {
    display: "flex",
    flexDirection: "column",
  },
  authorName: {
    fontWeight: 500,
    color: "#304254",
    lineHeight: "1rem",
    marginBottom: theme.spacing(1),
  },
  authorTitle: {
    fontWeight: 400,
    color: "#445668",
  },
  content: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(6),
  },
  photoTitle: {
    lineHeight: "1rem",
    marginTop: theme.spacing(6),
  },
  image: {
    marginTop: theme.spacing(10),
    display: "block",
  },
  imageFullWidth: {
    width: "100vw",
    marginLeft: "calc(-50vw + 49%)",
    overflowX: "hidden",
    marginTop: theme.spacing(12.5),
  },
  divider: {
    marginTop: theme.spacing(12.5),
    marginBottom: theme.spacing(10),
    backgroundColor: "#CAD5E0",
    height: "1px",
  },
  footerMargin: {
    marginBottom: theme.spacing(3),
  },
  tagsContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
  },
  tags: {
    display: "flex",
    gap: theme.spacing(2),
  },
  tagChip: {
    background: "#F0F5F9",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "6px 12px",
    color: "#445668",
    fontWeight: 500,
  },
  relatedPostsBgCtr: {
    background: theme.palette.grey[100],
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    marginTop: theme.spacing(15),
  },
  relatedPostsBg: {
    margin: "auto",
    marginTop: "1.78rem",
    maxWidth: "800px",
  },
  positioned: {
    position: "relative",
    background: "#0cf",
    marginTop: "-1.6rem",
    zIndex: 100,
  },
  // relatedImage: {
  //   background: "url('../../public/image3.png')",
  //   height: 200,
  //   width: 200,
  // },
  relatedBlogs: {
    display: "flex",
    gap: "1.11rem",
  },
  headerImgFill: {
    position: "relative",
  },
  readMoreBlogsTitle: {
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: "32px",
    color: theme.palette.grey[800],
  },
  blogListContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "15px",
    marginTop: theme.spacing(8),
  },
}));

function BlogDetail({ blog }) {
  const classes = useStyles();
  const { API_URL } = process.env;
  console.log("blog", blog);
  return (
    <>
      <div className={classes.headerImageContainer}>
        <Image
          className={classes.headerImage}
          src="/blog-detail-header.png"
          layout="responsive"
          width={1920}
          height={722}
          objectFit="cover"
          alt="Picture of the author"
        />
        <div className={classes.headerImageOverlay} />
      </div>
      <div className={classes.blog}>
        <div className={classes.timestamp}>
          <Typography variant="subtitle2">May 06 2021</Typography>
          <Typography variant="subtitle2">15 min read</Typography>
        </div>
        <Typography variant="h4">{blog.title}</Typography>
        <div className={classes.author}>
          <Avatar>
            <Image src="/author.png" layout="fill" alt="DP" />
          </Avatar>
          <div className={classes.authorDetails}>
            <Typography variant="subtitle1" className={classes.authorName}>
              {" "}
              {blog.authors[0].name}
            </Typography>
            <Typography variant="subtitle2" className={classes.authorTitle}>
              {" "}
              {blog.authors[0].title}
            </Typography>
          </div>
        </div>
        <div className={classes.content}>
          <Typography variant="body1">
            Thamel is the heart of Nepali tourism. The narrow, winding,
            crisscrossing gallis feel like a maze with colorful shops, displays
            of handloom carpets, jute and hemp bags, mountaineering gears,
            trekking agencies, money exchange, metal artifacts, eateries, dance
            bars, clubs, cramped buildings with businesses on every floor,
            ancient temples, hotels, and guest houses. It is said that over 80%
            of tourists who land at the Kathmandu international airport do not
            leave Nepal without visiting this place at least once. Some also
            believe that Thamel boasts the densest concentration of
            tourism-related amenities in all of South Asia. It is the crown
            jewel of Nepali tourism – or rather it used to be.
          </Typography>
          <Typography>
            On April 9, when we met for the GeoNight[i] event, the once-crowded
            Thamel seemed eerily silent, as it has for most of the last year
            since the pandemic brought this happening hub to a grinding halt.
            The narrow gallis of Thamel, looked so familiar and yet so foreign.
            These gallis are still ornamented with trekking shops,
            mountaineering gears, hotels, clubs, pubs, eateries, bars, jewels,
            bags, clothes – but who buys them now? Thamel seems to have
            time-traveled back a hundred years when tourists were more of an
            ‘alien’ than a norm.
          </Typography>
          <Typography>
            “Didi, should we go this way?” my colleague Sushma asked me,
            breaking me out of my trance. All 31 volunteers had started at 10 am
            from the eastern end of Thamel and proceeded west. At each
            crossroads, two (or four) of our volunteers would branch off into
            these connecting streets. Each pair had one goal – to put their
            street’s businesses on the map – literally! When Sushma asked me if
            we should take a particular street, only four of us were left. The
            rest were already spread across Thamel, collecting data, street by
            street, shop by shop.
          </Typography>
        </div>
        <Typography variant="h6" className={classes.photoTitle}>
          Heroes of the day!
        </Typography>
        <div className={classes.image}>
          <Image src={groupPhoto} layout="responsive" alt="Group photo" />
        </div>
        <div className={classes.content}>
          <Typography>
            These volunteers came from diverse backgrounds and came from areas
            far off. Some of them had reached Thamel on empty stomachs from
            places as far as Dhulikhel (31 km from Thamel). Most had come to
            Thamel by public buses, amidst the fear of the pandemic. This
            writing is also a shout-out to these heroes who braved the risk and
            volunteered their mornings to help the Nepali tourism sector reeling
            from the effects of the pandemic.
          </Typography>
          <Typography>
            In little under two hours, our heroes had collected 751 businesses
            (more than 40 categories of tourist amenities). Below is the map
            showing the streets we covered that day. Each red dot is a tourism
            business.
          </Typography>
        </div>
        <div className={classes.imageFullWidth}>
          <Image src={fullWidthPhoto} layout="responsive" alt="Group photo" />
        </div>
        <div className={classes.content}>
          <Typography>
            Here is the pictorial recap of those two hours:
          </Typography>
          <Typography>
            <ol>
              <li>
                {" "}
                The General Secretary of Thamel Tourism Development Council
                (TTDC) explains how the COVID situation has affected the tourism
                businesses in Thamel; and how today’s work will play a small but
                important role in the grander scheme of things.
              </li>
              <li>
                We brief the volunteers on what they have to accomplish in the
                next two hours.
              </li>
              <li>
                {" "}
                We also install the mobile data collection app on their devices.
                They are ready to go! Our heroes collect data in the streets of
                Thamel
              </li>
            </ol>
          </Typography>
        </div>
        <Divider classes={{ root: classes.divider }} />
        <div className={clsx(classes.author, classes.footerMargin)}>
          <Avatar>
            <Image src={author} layout="fill" alt="DP" />
          </Avatar>
          <div className={classes.authorDetails}>
            <Typography variant="subtitle1" className={classes.authorName}>
              {" "}
              Aishworya Shrestha
            </Typography>
            <Typography variant="subtitle2" className={classes.authorTitle}>
              {" "}
              Research Assistant
            </Typography>
          </div>
        </div>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#0D1829",
            lineHeight: "1.33rem",
            marginBottom: "29px",
          }}
        >
          Aishworya is a research assistant working under the PEER Science
          Project at KLL. She is a social science researcher with a background
          in Social Work and Major English. Her major interest lies in using
          technology for the betterment of the society. She believes that
          societal needs should be at the center of any technological
          advancement. Her prior works include being a wheelchair basketball
          coach, a school social worker and an adult literacy teacher.{" "}
        </Typography>
        <div className={classes.tagsContainer}>
          <Typography
            style={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "16px",
              color: "#0D1829",
            }}
          >
            Tags
          </Typography>
          <div className={classes.tags}>
            <div className={classes.tagChip}>Community</div>
            <div className={classes.tagChip}>Disaster Mapping</div>
          </div>
        </div>
      </div>

      <div className={classes.relatedPostsBgCtr}>
        <Container maxWidth="lg">
          <Typography className={classes.readMoreBlogsTitle}>
            Read More from our Blog
          </Typography>
          <div className={classes.blogListContainer}>
            {["", "", ""].map((blog) => (
              <BlogListCard key={uid(blog)} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}blogs/1`);
  console.log("res", res);
  const data = await res.json();
  console.log("data", data);
  return {
    props: {
      blog: data,
    },
  };
}

export default BlogDetail;
