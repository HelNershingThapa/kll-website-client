import { useRouter } from "next/router";
import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";
import ProjectsGrid from "components/our-projects/ProjectsGrid";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(30),
    paddingBottom: theme.spacing(30),
    background: theme.palette.grey[900],
  },
  title: {
    color: theme.palette.grey[50],
    marginBottom: theme.spacing(4),
  },
  descCtr: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  description: {
    lineHeight: 1.6,
    fontWeight: 400,
    color: theme.palette.grey[300],
    width: 633,
  },
  btnRoot: {
    padding: "14px 32px",
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[300],
  },
}));

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

const Partners = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <Typography variant="h3" className={classes.title}>
          Our Work
        </Typography>
        <div className={classes.descCtr}>
          <Typography variant="h6" className={classes.description}>
            {`We’ve worked on some amazing projects with our partners. Check out
          some of our featured work below`}
          </Typography>
          <Button
            variant="outlined"
            classes={{ root: classes.btnRoot, label: classes.btnLabel }}
            onClick={() => router.push("/our-projects")}
          >{`Check Out All Our Work`}</Button>
        </div>
        <ProjectsGrid />
      </Container>
    </div>
  );
};

export default Partners;
