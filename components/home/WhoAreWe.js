import { useRouter } from "next/router";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { desktop, tablet } from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1440px 1fr",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1080px 1fr",
    },
    [theme.breakpoints.down(desktop)]: {
      gridTemplateColumns: "1fr 932px 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "708px",
      justifyContent: "center",
    },
    [theme.breakpoints.down(tablet)]: {
      gridTemplateColumns: "540px",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "100%",
      padding: "0px 16px",
    },
  },
  container: {
    display: "flex",
    gap: theme.spacing(27),
    padding: 0,
    margin: 0,
    gridColumn: "1 / 3",
    [theme.breakpoints.down(desktop)]: {
      gap: theme.spacing(20),
    },
    [theme.breakpoints.down("sm")]: {
      gridColumn: "1 / -1",
      flexDirection: "column",
      gap: theme.spacing(5),
      paddingTop: theme.spacing(15),
    },
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(0),
      paddingTop: 0,
    },
  },
  imgFill: {
    position: "relative",
    width: 600,
    height: "100%",
    flexShrink: "0",
    [theme.breakpoints.down(desktop)]: {
      width: 470,
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "80vw",
      marginLeft: "calc(-50vw + 50% - 9px)",
      overflow: "hidden",
    },
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  content: {
    // maxWidth: 972,
    // height: 900,
    display: "flex",
    alignItems: "center",
    padding: "70px 0px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "24px",
      paddingBottom: "40px",
    },
  },
  title: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down(desktop)]: {
      fontSize: "1.7778rem",
      lineHeight: 1.25,
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.111rem",
      lineHeight: 1.6,
      marginBottom: theme.spacing(2),
    },
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "1.111rem",
    marginBottom: theme.spacing(15),
    "& p": {
      fontSize: "1.111rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: theme.palette.grey[800],
    },
    [theme.breakpoints.down(desktop)]: {
      marginBottom: theme.spacing(10),
      gap: "0.8889rem",
      "& p": {
        fontSize: "0.8889rem",
        lineHeight: 1.5,
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(5),
      gap: "0.7778rem",
      "& p": {
        fontSize: "0.7778rem",
        lineHeight: 1.428,
      },
    },
  },
  kllInNumbers: {
    background: theme.palette.grey[100],
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(15),
    padding: theme.spacing(8),
    "& h5": {
      fontFamily: "Manrope",
      fontWeight: 700,
      lineHeight: "24px",
      color: theme.palette.grey[900],
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(6),
      padding: theme.spacing(5),
    },
  },
  statTitle: {
    color: theme.palette.grey[600],
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: 1.5556,
    },
  },
  statValue: {
    lineHeight: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.333rem",
      lineHeight: 1,
    },
  },
  statTitleTypo: {
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(5),
    },
  },
  statsCtr: {
    display: "grid",
    background: "#CAD5E0",
    gap: "1px",
    gridTemplateColumns: "1.1fr 2fr 2fr 1.1fr",
    "& div:nth-child(-n+4)": {
      paddingTop: 0,
    },
    "& div:nth-child(n+4)": {
      paddingBottom: 0,
    },
    "& div:nth-child(4), & div:nth-child(8)": {
      display: "grid",
      justifyContent: "flex-end",
    },
    "& div:nth-child(2), & :nth-child(3), & :nth-child(6), & :nth-child(7)": {
      display: "grid",
      placeContent: "center",
    },
    [theme.breakpoints.down(desktop)]: {
      gridTemplateColumns: "1.1fr 1.5fr 1.1fr",
      "& div:nth-child(4)": {
        paddingTop: "11px",
      },
      "& div:nth-child(6)": {
        paddingBottom: 0,
        alignContent: "flex-start",
      },
      "& div:nth-child(4), & div:nth-child(5)": {
        paddingBottom: "21px",
      },
      "& div:nth-child(4), & div:nth-child(7),": {
        display: "grid",
        placeContent: "flex-start",
      },
      "& div:nth-child(5), & div:nth-child(8),": {
        display: "grid",
        placeContent: "center",
      },
      "& :nth-child(n+7)": {
        paddingBottom: 0,
      },
    },
  },
  stat: {
    padding: "32px 0",
    background: theme.palette.grey[100],
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(desktop)]: {
      paddingTop: "11px",
      paddingBottom: "21px",
    },
  },
  extraDiv: {
    position: "absolute",
    background: theme.palette.grey[100],
  },
  btnRoot: {
    padding: "14px 32px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "auto",
    },
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[800],
  },
}));

function MarkdownParagraph(props) {
  const classes = useStyles();

  return (
    <Typography variant="body1" component="p">
      {props.children}
    </Typography>
  );
}

const renderers = {
  paragraph: MarkdownParagraph,
};

const Partners = ({ data }) => {
  const router = useRouter();
  const classes = useStyles();
  const { API_URL } = process.env;
  const { IMAGE_URL } = process.env;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.imgFill}>
          <Image
            src={`${data.image.url}`}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={classes.content}>
          <div>
            <Typography variant="h3" className={classes.title}>
              {data.title}
            </Typography>
            <div className={classes.paragraphs}>
              {/* eslint-disable-next-line react/no-children-prop */}
              <ReactMarkdown children={data.text} renderers={renderers} />
            </div>
            {/* <div className={classes.kllInNumbers}>
              <Typography variant="h5" className={classes.statTitleTypo}>
                KLL in numbers
              </Typography>
              <div className={classes.statsCtr}>
                {stats.map((stat, index) => (
                  <>
                    <div key={uid(stat)} className={classes.stat}>
                      <Typography variant="body1" className={classes.statTitle}>
                        {stat.name}
                      </Typography>
                      <Typography variant="h5" className={classes.statValue}>
                        {stat.value}
                      </Typography>
                    </div>
                  </>
                ))}
              </div>
            </div> */}
            <Button
              variant="outlined"
              classes={{ root: classes.btnRoot, label: classes.btnLabel }}
              onClick={() => router.push("/about-us")}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
