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
    marginBottom: theme.spacing(10),
  },
  partners: {
    display: "flex",
    columnGap: "3rem",
    rowGap: "40px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
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
        <div className={classes.partners}>
          {[...range(1, 11)].map((partner) => (
            <div key={uid(partner)}>
              <img
                src={`/project-partner-${partner}.png`}
                style={{ mixBlendMode: "luminosity" }}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Partners;