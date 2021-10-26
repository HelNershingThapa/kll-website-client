import { useRouter } from 'next/router'
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Container, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
      gridTemplateColumns: "1fr"
    }
  },
  imgFill: {
    position: "relative",
    width: "100%",
    height: 440,
  },
  title: {
    fontWeight: 800,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(3),
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginBottom: theme.spacing(6),
  },
  paragraph: {
    fontWeight: 400,
    color: theme.palette.grey[700],
  },
  actionButtons: {
    display: "flex",
    gap: theme.spacing(4),
  },
  btnRoot: {
    padding: "10px 20px",
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[50],
  },
  btnResourcesLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[600],
  },
}));

function JoinOsmMovement() {
    const router = useRouter()
  const classes = useStyles();

  return (
    <Container fixed className={classes.container}>
      <div className={classes.imgFill}>
        <Image
          src="/join-osm-movement.png"
          layout="fill"
          objectFit="cover"
          alt="Join the OSM Movement"
        />
      </div>
      <div>
        <Typography
          variant="h3"
          className={classes.title}
        >{`Join the OSM Movement`}</Typography>
        <div className={classes.paragraphs}>
          <Typography variant="subtitle1" className={classes.paragraph}>
            {`When we began, Nepal was virtually blank on most maps. Today, a
          growing community has put our houses, neighborhoods and our gallis on
          OpenStreetMap. It is now possible to get around Kathmandu with a
          completely offline digital map, and the open map digital
          infrastructure is serving government, app developers, and businesses.`}
          </Typography>
          <Typography variant="subtitle1" className={classes.paragraph}>
            {`After the 2015 earthquakes, the map was used extensively to provide
          support to the disaster response. Nepal’s mapping community is
          recognized as pioneers in the world today.`}
          </Typography>
        </div>
        <div className={classes.actionButtons}>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.btnRoot, label: classes.btnLabel }}
          >
            Join OSM
          </Button>
          <Button
            variant="outlined"
            classes={{
              root: classes.btnRoot,
              label: classes.btnResourcesLabel,
            }}
            onClick={() => router.push('/resources')}
          >
            View Resources
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default JoinOsmMovement;
