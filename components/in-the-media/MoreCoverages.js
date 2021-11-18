import { uid } from "react-uid";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, CircularProgress } from "@material-ui/core";
import CoverageCard from "./CoverageCard";
import { desktop, tablet } from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
  moreCoveragesCtr: {
    background: "#F0F5F9",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(13),
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
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "15px",
    rowGap: theme.spacing(12),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down(tablet)]: {
      gridTemplateColumns: "1fr",
      rowGap: theme.spacing(8),
      marginTop: theme.spacing(4),
    },
  },
}));

export default function MoreCoverages({ coverages }) {
  const classes = useStyles();

  return (
    <div className={classes.moreCoveragesCtr}>
      <Container fixed>
        <Typography variant="h5" className={classes.moreCoveragesTitle}>
          More Coverages
        </Typography>
        <div className={classes.coversGrid}>
          {coverages.map((coverage) => (
            <CoverageCard key={uid(coverage)} coverage={coverage} />
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
