import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography, IconButton, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tagsContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
  },
  tagsTypo: {
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "16px",
    color: "#0D1829",
  },
  tags: {
    display: "flex",
    gap: theme.spacing(2),
  },
  tagChip: {
    background: "#F0F5F9",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "6px 12px",
    color: "#445668",
    fontWeight: 500,
  },
  chipRoot: {
    padding: "6px 12px",
    borderRadius: "8px",
    background: theme.palette.grey[100],
  },
  chipLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "14px",
    color: theme.palette.grey[600],
  },
}));

const Tags = () => {
  const classes = useStyles();
  return (
    <div className={classes.tagsContainer}>
      <Typography
      variant="subtitle1"
      className={classes.tagsTypo}
      >
        Tags
      </Typography>
      <div className={classes.tags}>
        <Chip
          label="Community"
          classes={{ root: classes.chipRoot, label: classes.chipLabel }}
        />
        <Chip
          label="Disaster Mapping"
          classes={{ root: classes.chipRoot, label: classes.chipLabel }}
        />
      </div>
    </div>
  );
};

export default Tags;
