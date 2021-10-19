import { uid } from "react-uid";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, CircularProgress } from "@material-ui/core";
import CoverageCard from "./CoverageCard";

const useStyles = makeStyles((theme) => ({
  moreCoveragesCtr: {
    background: "#F0F5F9",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(12),
    },
  },
  moreCoveragesTitle: {
    lineHeight: 1,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1.5556,
      marginBottom: theme.spacing(3),
    },
  },
  coversGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "40px",
    columnGap: "13px",
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr 1fr",
      },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
}));

export default function MoreCoverages() {
  const classes = useStyles();

  return (
    <div className={classes.moreCoveragesCtr}>
      <Container fixed>
        <Typography variant="h5" className={classes.moreCoveragesTitle}>
          More Coverages
        </Typography>
        <div className={classes.coversGrid}>
          {["", "", "", "", ""].map((cover) => (
            <CoverageCard key={uid(cover)} />
          ))}
        </div>
        <div
          style={{
            display: "grid",
            placeContent: "center",
            marginTop: "44px",
          }}
        >
          <CircularProgress
            color="secondary"
            style={{ color: "#61758A" }}
            size={24}
          />
        </div>
      </Container>
    </div>
  );
}
