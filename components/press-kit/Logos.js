import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Chip, Typography, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const logos = [
  {
    title: "Default Logo",
    description: "The primary logo for Kathmandu Living Labs",
    pngLink: "",
    svgLink: "",
    img: "/kll-logos/kll-logo-default.svg",
  },
  {
    title: "Dark Logo",
    description: "Our main logo in black and white format.",
    img: "/kll-logos/kll-logo-dark.svg",
    pngLink: "",
    svgLink: "",
  },
  {
    title: "Light Logo",
    description: "Our main logo in dark settings. Ideal for dark environments.",
    img: "/kll-logos/kll-logo-light.svg",
    pngLink: "",
    svgLink: "",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(8),
    }
  },
  title: {
    color: theme.palette.grey[900],
  },
  subTitle: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: theme.palette.grey[600],
    maxWidth: 468,
    marginTop: theme.spacing(2),
  },
  logoFill: {
    position: "relative",
    width: 80,
    height: 80,
  },
  logos: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'flex-end',
    marginTop: theme.spacing(6),
    flexWrap: 'wrap',
    gap: theme.spacing(6),
  },
  logo: {
    display: "flex",
    gap: theme.spacing(6),
  },
  descriptionCtr: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  logoTitle: {
    fontWeight: 600,
    lineHeight: "18px",
    color: theme.palette.grey[800],
  },
  logoDescription: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: theme.palette.grey[600],
    width: 248,
  },
  downloadLinks: {
    display: "flex",
    gap: theme.spacing(4),
    color: theme.palette.primary.main,
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginTop: "3px",
    }
  },
  pointer: {
    cursor: 'pointer'
  }
}));

const Logos = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Kathmandu Living Labs Logo
      </Typography>
      <Typography variant="h5" className={classes.subTitle}>
        You can download the various versions of our logo in different formats
        down below.
      </Typography>
      <div className={classes.logos}>
        {logos.map((logo, index) => (
          <div key={uid(logo, index)} className={classes.logo}>
            <div
              style={{
                background: `${logo.title === "Light Logo" && theme.palette.grey[900]
                  }`,
                padding: `${logo.title === "Light Logo" && '20px'
                  }`,
                borderRadius: `${logo.title === "Light Logo" && '12px'
                  }`,
                height: `${logo.title === "Light Logo" && '120px'
                  }`,
              }}
            >
              <div className={classes.logoFill}>
                <Image src={logo.img} layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className={classes.descriptionCtr} style={{
              marginTop: `${logo.title === "Light Logo" && '20px'
                }`,
            }}>
              <Typography variant="" className={classes.logoTitle}>
                {logo.title}
              </Typography>
              <Typography variant="" className={classes.logoDescription}>
                {logo.description}
              </Typography>
              <div className={classes.downloadLinks}>
                <div className={classes.pointer}>
                  <i className="ri-download-line" style={{ fontSize: 14 }} />
                  <Typography display="inline" style={{ marginLeft: "4.5px" }}>
                    .png
                  </Typography>
                </div>
                <div className={classes.pointer}>
                  <i className="ri-download-line" style={{ fontSize: 14 }} />
                  <Typography display="inline" style={{ marginLeft: "4.5px" }}>
                    .svg
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
