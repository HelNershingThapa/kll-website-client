import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";

import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "32px 24px",
    background: theme.palette.grey[50],
    borderRadius: "12px",
  },
  title: {
    fontFamily: "Manrope",
    fontWeight: 700,
    lineHeight: "32px",
    color: theme.palette.grey[700],
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
  description: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: theme.palette.grey[700],
    marginBottom: theme.spacing(5),
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[600],
  },
  btnRoot: {
    padding: "10px 20px",
  },
  endIcon: {
    marginLeft: theme.spacing(1)
  }
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image src="/icons/osm.png" height={60} width={60} alt="" />
      <Typography
        className={classes.title}
        variant="h6"
      >{`What is OpenStreetMap?`}</Typography>
      <Typography className={classes.description}>
        {`OpenStreetMap (OSM) is a collaborative project to create a free editable
        geographic database of the world. The geodata underlying the maps is
        considered the primary output of the project. The creation and growth of
        OSM has been motivated by restrictions on use or availability of map
        data across much of the world, and the advent of inexpensive portable
        satellite navigation devices.`}
      </Typography>
      <Button
        variant="outlined"
        classes={{ root: classes.btnRoot, label: classes.btnLabel, endIcon:  classes.endIcon }}
        endIcon={
          <i
            style={{ fontSize: "16px", color: "#445668" }}
            className="ri-external-link-line"
          />
        }
      >
        Visit page
      </Button>
    </div>
  );
}
