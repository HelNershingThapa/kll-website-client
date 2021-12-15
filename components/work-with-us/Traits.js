import { uid } from "react-uid";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  traits: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: theme.spacing(5),
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "11px",
    },
  },
  trait: {
    background: "grey",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "32px 14px",
    alignItems: "center",
    background: "#F0F5F9",
    [theme.breakpoints.down("xs")]: {
      padding: "24px 10px",
    },
  },
  traitLogoFill: {
    position: "relative",
    height: 100,
    width: 100,
    [theme.breakpoints.down(992)]: {
      height: 80,
      width: 80,
    },
    [theme.breakpoints.down("xs")]: {
      height: 60,
      width: 60,
    },
  },
  traitTitle: {
    fontFamily: "Manrope",
    fontWeight: 700,
    color: theme.palette.grey[700],
  },
}));

function Traits({ traits }) {
  const router = useRouter();
  const classes = useStyles();
  const { API_URL } = process.env;

  return (
    <div className={classes.traits}>
      {traits.map((trait) => (
        <div key={uid(trait)} className={classes.trait}>
          <div className={classes.traitLogoFill}>
            <Image
              src={`${API_URL}${trait.icon.url}`}
              layout="fill"
              objectFit="cover"
              sizes="100px"
              alt="KLL traits logo"
            />
          </div>
          <Typography align="center" className={classes.traitTitle}>
            {trait.title}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export default Traits;
