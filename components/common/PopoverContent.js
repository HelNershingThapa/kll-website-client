import Link from "next/link";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const subMenus = [
  {
    title: "About Us",
    link: "/about-us",
    img: "/popover-img-1.png",
    description: "Learn what we stand for and what we have done so far.",
  },
  {
    title: "Our Team",
    link: "/our-team",
    img: "/popover-img-2.png",
    description: "Take a look behind the scenes and get to know us better",
  },
];

const insightsMenus = [
  {
    title: "Our Blog",
    link: "/blog",
    img: "/icons/blog.svg",
    description:
      "We update our Blog on a weekly basis. Learn what we’re up to at Kathmandu Living Labs",
  },
  {
    title: "In the Media",
    link: "/in-the-media",
    img: "/icons/media.svg",
    description: "We’ve been featured in mainstream media over the years.",
  },
  {
    title: "Events",
    link: "/events",
    img: "/icons/events.svg",
    description: "We organize various events at KLL where you can take part.",
  },
];

const getInvolvedMenus = [
  {
    title: "Work with Us",
    img: "/get-involved-1.png",
    link: "/work-with-us",
    description:
      "We’re always on the lookout for new talents. See what opportunities we have for you.",
  },
  {
    title: "Join the OSM Movement",
    link: "/work-with-us",
    img: "/get-involved-2.png",
    description:
      "We’re always on the lookout for new talents. See what opportunities we have for you.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  page: {
    // height: 160,
  },
  imgFill: {
    position: "relative",
    marginBottom: "8px",
    width: "100%",
    height: 160,
  },
  pageName: {
    fontFamily: "Manrope",
    fontWeight: 800,
    lineHeight: "28px",
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(1),
  },
  pageDesc: {
    fontWeight: 400,
    lineHeight: "20px",
    color: theme.palette.grey[600],
  },
  insights: {
    display: "grid",
    width: 340,
    columnGap: "20px",
    rowGap: "24px",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `"fw fw"
  "hw1 hw2"`,
  },
  getInvolved: {
    display: "grid",
    width: 305,
    rowGap: "24px",
    gridTemplateColumns: "1fr",
  },
}));
340;

function PopoverContent({ identifier }) {
  const classes = useStyles();

  console.log(identifier);

  return (
    <>
      {identifier === "whoweare" && (
        <div style={{ display: "flex", gap: "20px" }}>
          {subMenus.map((page) => (
            <Link key={uid(page)} href={page.link}>
              <div
                className={classes.page}
                key={uid(page)}
                style={{ width: 160, cursor: "pointer" }}
              >
                <div className={classes.imgFill}>
                  <Image
                    src={page.img}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
                <Typography variant="body1" className={classes.pageName}>
                  {page.title}
                </Typography>
                <Typography variant="subtitle2" className={classes.pageDesc}>
                  {page.description}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      )}
      {identifier === "insights" && (
        <div className={classes.insights}>
          {insightsMenus.map((page, index) => (
            <Link key={uid(page, index)} href={page.link}>
              <div
                key={uid(page)}
                style={{
                  gridArea: `${index === 0 ? "fw" : `hw${index}`}`,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    background: `${index === 0 ? "#185ADB" : "#E8EFFC"}`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 160,
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: index === 0 ? 80 : 60,
                      width: index === 0 ? 80 : 60,
                    }}
                  >
                    <img
                      src={page.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </div>
                <Typography variant="body1" className={classes.pageName}>
                  {page.title}
                </Typography>
                <Typography variant="subtitle2" className={classes.pageDesc}>
                  {page.description}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      )}

      {identifier === "get-involved" && (
        <div className={classes.getInvolved}>
          {getInvolvedMenus.map((page, index) => (
            <Link key={uid(page, index)} href={page.link}>
              <div style={{ cursor: "pointer" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 160,
                    marginBottom: "8px",
                  }}
                >
                  <img src={page.img} layout="fill" objectFit="cover" alt="" />
                </div>
                <Typography variant="body1" className={classes.pageName}>
                  {page.title}
                </Typography>
                <Typography variant="subtitle2" className={classes.pageDesc}>
                  {page.description}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default PopoverContent;
