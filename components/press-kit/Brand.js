import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Chip, Typography, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const colorModels = [
  {
    model: "hex",
    value: "#185ADB",
  },
  {
    model: "rgb",
    value: "(24, 19, 219, 100%)",
  },
  {
    model: "hsl",
    value: "(220, 80, 48, 100%)",
  },
  {
    model: "hsb",
    value: "(220, 80, 48, 100%)",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    }
  },
  accentColorCtr: {
    flex: 1,
    background: theme.palette.primary.main,
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      padding: "24px",
    }
  },
  title: {
    fontFamily: "Manrope",
    fontSize: "3.333rem",
    fontWeight: 800,
    lineHeight: 1,
    color: theme.palette.blue[400],
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7778rem",
      lineHeight: 1.25,
    }
  },
  colorDetails: {
    width: 416,
    padding: "80px 32px",
    background: theme.palette.grey[100],
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "40px 24px",
    }
  },
  colorBlob: {
    height: 60,
    width: 60,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "16px",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    }
  },
  colorTitle: {
    fontFamily: "Manrope",
    fontWeight: 800,
    lineHeight: "24px",
    color: theme.palette.grey[800],
  },
  models: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(8),
    }
  },
  model: {
    display: "flex",
    justifyContent: "space-between",
  },
  modelTitle: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color: theme.palette.grey[700],
  },
  modelValue: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    color: theme.palette.grey[700],
  },
  downloadBtn: {
    marginTop: theme.spacing(10),
  },
  endIcon: {
    fontSize: "16px !important",
  },
  palette: {
    display: "flex",
  },
  spacer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(100),
    }
  },
}));

const Brand = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.container}>
      <div className={classes.accentColorCtr}>
        <div className={classes.spacer}>
          <Typography className={classes.title}>The KLL Brand</Typography>
          <div className={classes.palette}>
            {Object.keys(theme.palette.blue).map((color, index) => (
              <>
                {color !== "main" && (
                  <div
                    key={uid(color)}
                    style={{
                      width: 48,
                      height: 48,
                      background: theme.palette.blue[color],
                      borderRadius: "50%",
                      position: `${index === 0 ? "relative" : "absolute"}`,
                      transform: `${index !== 0 ? `translate(${index * 50}%, 0px)` : ""
                        }`,
                    }}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.colorDetails}>
        <div className={classes.colorBlob} />
        <Typography variant="h5" className={classes.colorTitle}>
          Primary Blue
        </Typography>
        <div className={classes.models}>
          {colorModels.map((model) => (
            <div key={uid(model)} className={classes.model}>
              <Typography className={classes.modelTitle}>
                {model.model}
              </Typography>
              <Typography className={classes.modelValue}>
                {model.value}
              </Typography>
            </div>
          ))}
        </div>
        <Button
          fullWidth
          className={classes.downloadBtn}
          variant="contained"
          color="primary"
          endIcon={
            <i className={clsx("ri-download-line", classes.endIcon)} />
          }
        >
          Download Media Kit
        </Button>
      </div>
    </div>
  );
};

export default Brand;
