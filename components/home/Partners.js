import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(25),
  },
  title: {
    fontFamily: "Manrope",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "18px",
    color: theme.palette.grey[900],
    marginBottom: theme.spacing(10)
  },
}));

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

const Partners = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.container}>
        <Typography variant="body1" align="center" className={classes.title}>
          We’ve partnered with
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {[...range(1, 11)].map((partner) => (
            <div>
              <img src={`/project-partner-${partner}.png`} style={{mixBlendMode: 'luminosity'}}/>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Partners;
