import { useRouter } from "next/router";
import clsx from "clsx";
import { uid } from "react-uid";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, Button, Card } from "@material-ui/core";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(21),
    color: theme.palette.grey[100],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(10),
    },
  },
  title: {
    marginTop: theme.spacing(),
    fontWeight: "600",
    color: "#0D1829",
  },
  videosTitle: {
    marginTop: theme.spacing(20),
  },
  subTitle: {
    color: "#445668",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(4),
    },
  },
  showcaseCtr: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: theme.spacing(6),
    gridAutoRows: "280px",
    marginTop: "2rem",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  productsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: theme.spacing(6),
    // gridAutoRows: "400px",
    marginTop: "2rem",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  product: {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.grey[100],
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "& div": {
        position: "unset !important",
      },
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      width: "100% important",
      position: "relative !important",
      height: "unset !important",
    },
  },
  blueBg: {
    background: theme.palette.primary.main,
    height: "100%",
    padding: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  btnRoot: {
    background: theme.palette.blue[700],
    whiteSpace: "nowrap",
    height: "2.69rem",
  },
  btnIcon: {
    fontSize: "0.8889rem",
    lineHeight: 1,
  },
  btnLabel: {
    color: "#fff",
  },
  visitBtnRoot: {
    whiteSpace: "nowrap",
  },
  products: {
    // marginTop: "5rem",
  },
  productImgFill: {
    position: "relative",
    width: "100%",
    height: "280px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 121,
    },
  },
  productInfoCtr: {
    padding: theme.spacing(6),
    paddingTop: theme.spacing(5),
    backgroundColor: theme.palette.grey[800],
    flexGrow: 1,
  },
  productTitle: {
    fontWeight: "bold",
    lineHeight: 1.2,
    marginBottom: theme.spacing(3),
  },
  productDescription: {
    marginBottom: theme.spacing(6),
  },
  actionBtnsCtr: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
  },
  desc: {
    marginTop: theme.spacing(3),
    maxWidth: 800,
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      fontSize: "0.7778rem",
      lineHeight: 1.428,
    },
  },
}));

function Showcase({ showcases }) {
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Showcase | Kathmandu Living Labs</title>
      </Head>
      <Container fixed>
        <div className={classes.mainContainer}>
          <Typography
            className={clsx(classes.title, classes.products)}
            variant="h4"
          >
            Products and Visualizations
          </Typography>
          <Typography variant="body1" className={classes.desc}>
            Explore our range of innovative tools and interactive visualizations
            that help communities solve real-world problems using data-driven
            decisions.
          </Typography>
          <div className={classes.productsContainer}>
            {showcases
              .filter((showcase) => showcase.category === "product")
              .map((showcase) => (
                <Card key={uid(showcase)} className={classes.product}>
                  <div className={classes.productImgFill}>
                    {showcase.thumbnail?.url && (
                      <Image
                        src={showcase.thumbnail?.url}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    )}
                  </div>
                  <div className={classes.productInfoCtr}>
                    <Typography component="h5" className={classes.productTitle}>
                      {showcase.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.productDescription}
                    >
                      {showcase.description}
                    </Typography>
                    <div className={classes.actionBtnsCtr}>
                      {showcase.internalLink && (
                        <Button
                          classes={{
                            root: classes.btnRoot,
                            label: classes.btnLabel,
                          }}
                          size="small"
                          variant="primary"
                          onClick={() => router.push(showcase.internalLink)}
                        >
                          Read More
                        </Button>
                      )}
                      {showcase.externalLink && (
                        <a
                          className={clsx(
                            classes.visitBtnRoot,
                            classes.btnLabel
                          )}
                          target="_blank"
                          href={showcase.externalLink}
                          rel="noopener noreferrer"
                        >
                          Visit Link&nbsp;&nbsp;
                          <i
                            className={clsx(
                              "ri-arrow-right-line",
                              classes.btnIcon
                            )}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
          <Typography
            className={clsx(classes.title, classes.videosTitle)}
            variant="h4"
          >
            Videos
          </Typography>
          <Typography variant="body1" className={classes.desc}>
            Check out our collection of videos showcasing how our products are
            being used to make a difference in communities.
          </Typography>

          <div className={classes.showcaseCtr}>
            {showcases
              .filter((showcase) => showcase.category === "video")
              .map((showcase) => (
                <>
                  {showcase.externalLink && (
                    <div key={uid(showcase)}>
                      <ReactPlayer
                        url={showcase.externalLink}
                        width="100%"
                        height="100%"
                      />
                    </div>
                  )}
                </>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/showcases`);
  const showcases = await res.json();

  return {
    props: {
      showcases,
    },
    revalidate: 86400,
  };
}

export default Showcase;
