import { useState, useEffect } from "react";
import clsx from "clsx";
import { uid } from "react-uid";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, Button, Icon } from "@material-ui/core";
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(21),
    color: theme.palette.grey[100],
  },
  title: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: "32px",
    color: "#0D1829",
  },
  subTitle: {
    marginTop: theme.spacing(3),
    color: "#445668",
    marginBottom: theme.spacing(10),
  },
  showcaseCtr: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "420px 120px 160px 260px 208px 492px",
    gap: theme.spacing(6),
    "& div:nth-of-type(1)": {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
    "& div:nth-of-type(2)": {
      gridColumn: "span 6",
      gridRow: "span 3",
    },
    "& div:nth-of-type(3)": {
      gridColumn: "span 3",
      gridRow: "span 1",
    },
    "& div:nth-of-type(4)": {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
    "& div:nth-of-type(5)": {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
    "& div:nth-of-type(6)": {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
    "& div:nth-of-type(7)": {
      gridColumn: "span 6",
      gridRow: "span 2",
    },
    "& div:nth-of-type(8)": {
      gridColumn: "span 3",
    },
    "& div:nth-of-type(9)": {
      gridColumn: "span 6",
    },
    "& div:nth-of-type(10)": {
      gridColumn: "span 3",
    },
    "& div:nth-of-type(11)": {
      gridColumn: "span 3",
    },
    "& div:nth-of-type(2), & div:nth-of-type(7), & div:nth-of-type(9)": {
      "& h5": {
        fontFamily: "Manrope",
        fontSize: "1.7778rem",
        fontWeight: 700,
        lineHeight: 1.25,
        marginBottom: theme.spacing(2),
      },
      "& p": {
        fontSize: "0.8889rem",
        lineHeight: 1.5,
        marginBottom: theme.spacing(8),
      },
    },
    "& div:not(:nth-of-type(2)), & div:not(:nth-of-type(7)), & div:not(:nth-of-type(9)),": {
      "& h5": {
        fontFamily: "Manrope",
        fontSize: "1.111rem",
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: theme.spacing(3),
      },
      "& p": {
        fontSize: "0.8889rem",
        lineHeight: 1.5,
        marginBottom: theme.spacing(6),
      },
    },
  },
  imgFill: {
    position: "relative",
    height: "100%",
    width: "100%",
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
  },
  btnIcon: {
    fontSize: "0.8889rem",
    lineHeight: 1,
  },
  btnLabel: {
    color: "#fff",
  },
}));

function Showcase() {
  const classes = useStyles();

  const [category, setCategory] = useState('none')
  const [showcases, setShowcases] = useState([])
  const [blogCount, setShowcaseCount] = useState(0);
  const { API_URL } = process.env;

  const hasMore = showcases.length < blogCount

  useEffect(() => {
    loadFunc();
  }, [])

  async function loadFunc() {
    const countRes = await fetch(`${API_URL}/showcases/count?${category === 'none' ? '' : `category=${category}`}`);
    const resCount = await countRes.json();
    setShowcaseCount(resCount);

    const res = await fetch(`${API_URL}/showcases?${category === 'none' ? '' : `category=${category}`}`);
    const blogRes = await res.json();
    setShowcases(showcases.concat(blogRes));
  }

  const renderShowcase = (showcase) => {
    switch (showcase.category) {
      case "product":
        if (showcase.youtubeLink) {
          return <ReactPlayer url={showcase.youtubeLink} width="100%" height="100%" />
        }
        return <>{!showcase.youtubeLink && <div className={classes.imgFill}>
          {showcase.thumbnail.url && <Image src={`${API_URL}${showcase.thumbnail.url}`} layout="fill" objectFit="cover" alt="" />}
        </div>
        }</>
        break;
      case "web_app":
        return (
          <div className={classes.blueBg}>
            <Typography component="h5">{showcase.title}</Typography>
            <Typography component="p">{showcase.description}</Typography>
            <Button classes={{ root: classes.btnRoot, label: classes.btnLabel }} className={classes.readButton} variant="contained" endIcon={<i className={clsx("ri-arrow-right-line", classes.btnIcon)} />}>Read Case Study</Button>
          </div>
        )
        break;
      case "mobile_app":
        return (<div className={classes.blueBg}>
          <Typography component="h5">{showcase.title}</Typography>
          <Typography component="p">{showcase.description}</Typography>
          <div>
            <Button classes={{ root: classes.btnRoot, label: classes.btnLabel }} className={classes.readButton} variant="contained" endIcon={<i className={clsx("ri-arrow-right-line", classes.btnIcon)} />}>Read Case Study</Button>
          </div>
        </div>)
      default:
        return
    }
  }

  return (
    <>
      <Head>
        <title>Showcase | Kathmandu Living Labs</title>
      </Head>
      <Container fixed>
        <div className={classes.mainContainer}>
          <Typography className={classes.title} variant="h4">
            Showcase
          </Typography>{" "}
          <Typography className={classes.subTitle} variant="body1">
            Take a look at our best videos, products, visualizations and photos
            all in one place.
          </Typography>
          <div className={classes.showcaseCtr}>
            {showcases.map(showcase => <div key={uid(showcase)}>
              {renderShowcase(showcase)}
              {/* {!showcase.youtubeLink && <div className={classes.imgFill}>
                <Image src={`${API_URL}${showcase.thumbnail.url}`} layout="fill" objectFit="cover" alt="" />
              </div>}
              {showcase.youtubeLink && <ReactPlayer url={showcase.youtubeLink} width="100%" height="100%" />} */}
            </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Showcase;