import { uid } from "react-uid";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Chip, Typography } from "@material-ui/core";
import Brand from "components/press-kit/Brand";
import Logos from "components/press-kit/Logos";
import Images from "components/press-kit/Images";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(30),
  },
  pageTitle: {
    lineHeight: "40px",
    color: theme.palette.grey[900],
  },
  pageDescription: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),
    maxWidth: 820,
    fontWeight: 400,
    lineHeight: 1.5556,
    color: theme.palette.grey[600],
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.444rem",
      marginTop: theme.spacing(1),
    }
  },
}));

const PressKit = ({ data }) => {
  const classes = useStyles();

  const { header, gallery, images } = data;  

  return (
    <>
      <Head>
        <title>Press Kit | Kathmandu Living Labs</title>
      </Head>
      <Container fixed className={classes.container}>
        <div className={classes.root}>
          <Typography variant="h4" className={classes.pageTitle}>
            {header.title}
          </Typography>
          <Typography className={classes.pageDescription}>
            {header.description}
          </Typography>
        </div>
        <Brand />
        <Logos />
        <Images gallery={gallery} images={images} />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/press-kit`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 84600,
  };
}


export default PressKit;
