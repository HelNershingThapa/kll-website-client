import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(25),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
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
    rowGap: theme.spacing(8),
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      columnGap: theme.spacing(3),
      rowGap: theme.spacing(3),
      justifyContent: "center",
    },
  },
  imageFill: {
    position: "relative",
    width: "auto",
    height: "80px",
    "& div": {
      position: "unset !important",
    },
  },
  image: {
    objectFit: "cover",
    width: "unset !important",
    position: "relative !important",
    height: "80px !important",
    mixBlendMode: "luminosity",
    "&:hover": {
      mixBlendMode: "normal",
    },
  },
  // partnerLogo: {
  //   mixBlendMode: "luminosity",
  //   maxHeight: "80px",
  //   "&:hover": {
  //     mixBlendMode: "normal",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     maxHeight: "40px",
  //   },
  // },
}));

const Partners = ({ partners }) => {
  const classes = useStyles();
  const { API_URL } = process.env;

  return (
    <Container fixed>
      <div className={classes.container}>
        <Typography variant="body1" align="center" className={classes.title}>
          We have partnered with
        </Typography>
        <div className={classes.partners}>
          {partners.map((partner) => (
            <div key={uid(partner)} className={classes.imageFill}>
              <Image
                className={classes.image}
                src={`${API_URL}${partner.partnerLogo.url}`}
                layout="fill"
                objectFit="content"
                sizes="200px"
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
