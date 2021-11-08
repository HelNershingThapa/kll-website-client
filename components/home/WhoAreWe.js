import { useRouter } from "next/router";
import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button, Chip } from "@material-ui/core";
import { desktop, tablet } from "../../styles/theme";

const stats = [
  {
    name: "Est",
    value: "2013",
  },
  {
    name: "Projects",
    value: "600",
  },
  {
    name: "People",
    value: "16",
  },
  {
    name: "Partners",
    value: "06",
  },
  {
    name: "Est",
    value: "2013",
  },
  {
    name: "Projects",
    value: "600",
  },
  {
    name: "People",
    value: "16",
  },
  {
    name: "Partners",
    value: "06",
  },
];

var perChunk = 4; // items per chunk

var result = stats.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / perChunk);

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = []; // start a new chunk
  }

  resultArray[chunkIndex].push(item);

  return resultArray;
}, []);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    gap: "108px",
    // alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      gap: theme.spacing(6),
    },
  },
  imgFill: {
    width: 600,
    height: 900,
    [theme.breakpoints.down(1280)]: {
      width: 500,
    },
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  // imageCtr: {
  //   position: "absolute",
  //   left: 0,
  //   top: 0,
  // },
  // imgFill: {
  //   position: "relative",
  //   height: 900,
  //   width: "31.25vw",
  // },
  container: {
    display: "flex",
    padding: 0,
    margin: 0,
    maxWidth: "50.625%",
    // justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      maxWidth: "44.8%",
    },
    [theme.breakpoints.down(desktop)]: {
      maxWidth: "40.2%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      padding: "0",
    },
  },
  imaginaryFill: {
    // width: 468,
  },
  content: {
    maxWidth: 972,
    height: 900,
    display: "flex",
    alignItems: "center",
  },
  contentMock: {
    width: 468,
  },
  title: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.111rem",
      lineHeight: 1.6,
      marginBottom: theme.spacing(2),
    },
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginBottom: theme.spacing(15),
    "& p": {
      fontSize: "1.111rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: theme.palette.grey[800],
    },
    [theme.breakpoints.down(desktop)]: {
      marginBottom: theme.spacing(10),
      "& p": {
        fontSize: "0.8889rem",
        lineHeight: 1.5,
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(5),
      "& p": {
        fontSize: "0.778rem",
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
    },
  },
  tableCtr: {
    marginTop: theme.spacing(8),
    overflowY: "hidden",
  },
  table: {},
  tableCell: {
    padding: 0,
  },
  tableRow: {
    "& td:not(:first-child)": {
      // paddingLeft: "15px",
    },
  },
  stat: {
    display: "flex",
    flexDirection: "column",
  },
  statTitle: {
    color: theme.palette.grey[600],
    marginBottom: theme.spacing(1),
  },
  statValue: {
    lineHeight: 1,
  },
  btnRoot: {
    padding: "14px 32px",
  },
  btnLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.palette.grey[800],
  },
  statTitleTypo: {
    marginBottom: theme.spacing(8),
  },
  statsCtr: {
    display: "grid",
    gridTemplateColumns: "1.1fr 2fr 2fr 1.1fr",
    "& :nth-child(4n-3)": {
      paddingLeft: 0,
      borderLeft: "none",
      borderRight: "none",
      borderBottom: "none",
    },
    "& :nth-child(4n)": {
      paddingRight: 0,
      borderRight: "none",
      borderLeft: "none",
      alignItems: "flex-end",
    },
    "& :nth-child(-n+4)": {
      paddingTop: 0,
      borderTop: "none",
    },
    "& :nth-child(n+4)": {
      paddingBottom: 0,
      borderBottom: "none",
    },
    "& :nth-child(2)": {
      paddingTop: 0,
      borderTop: "none",
      borderBottom: "none",
      borderRight: "none",
      alignItems: "center",
    },
    "& :nth-child(3)": {
      paddingTop: 0,
      borderTop: "none",
      borderBottom: "none",
      alignItems: "center",
    },
    "& :nth-child(6)": {
      paddingBottom: 0,
      borderBottom: "none",
      borderRight: "none",
      alignItems: "center",
    },
    "& :nth-child(7)": {
      paddingBottom: 0,
      borderBottom: "none",
      alignItems: "center",
    },
    // "& :nth-child(2,3)": {
    //   display: 'flex',
    //   justifyContent: "center",
    //   alignItems: "center"
    // },
    // "& :nth-child(4n)": {
    //   paddingRight: 0,
    //   borderRight: "none",
    // },
    // "& :nth-child(n+4)": {
    //   paddingBottom: 0,
    //   borderBottom: "none",
    // },
    [theme.breakpoints.down(desktop)]: {
      gridTemplateColumns: "1.1fr 2fr 1.1fr",
      "& div:first-of-type": {
        borderBottom: "1px solid #CAD5E0",
      },
      "& :nth-child(4n)": {
        paddingRight: 0,
        borderRight: "none",
        borderLeft: "none",
        alignItems: "flex-end",
      },
    },
  },
  stat: {
    // padding: "108px",
    padding: "32px 0",
    border: "1px solid #CAD5E0",
    // display: "grid",
    // placeContent: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(desktop)]: {
      paddingTop: "11px",
      paddingBottom: "21px",
    },
  },
}));

const Partners = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imgFill}>
        <img src="/whoarewe.png" className={classes.image} alt="" />
      </div>
      <Container fixed className={classes.container}>
        <div className={classes.content}>
          <div>
            <Typography variant="h3" className={classes.title}>
              {" "}
              {`Who are we?`}
            </Typography>
            <div className={classes.paragraphs}>
              <Typography variant="body1" component="p">
                Kathmandu Living Labs is a pioneer civic-tech enterprise that
                provides data and technology solutions to businesses,
                governments, development partners, and civil society.{" "}
              </Typography>
              <Typography variant="body1" component="p">
                KLL was established to challenge the status quo of the knowledge
                production paradigm, in which a vast majority of the people in
                the world are excluded. It aims to bridge that gap and bring the
                voices and needs of the people on ground and resolve some of the
                pressing issues using technological innovation and deep
                immersion in communities.
              </Typography>
            </div>
            <div className={classes.kllInNumbers}>
              <Typography variant="h5" className={classes.statTitleTypo}>
                KLL in numbers
              </Typography>
              <div className={classes.statsCtr}>
                {stats.map((stat) => (
                  <div key={uid(stat)} className={classes.stat}>
                    <Typography variant="body1" className={classes.statTitle}>
                      {stat.name}
                    </Typography>
                    <Typography variant="h5" className={classes.statValue}>
                      {stat.value}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outlined"
              classes={{ root: classes.btnRoot, label: classes.btnLabel }}
              onClick={() => router.push("/about-us")}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
