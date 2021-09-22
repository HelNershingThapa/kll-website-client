import { useRouter } from "next/router";
import clsx from "clsx";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Button, Chip } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";

const moreProjects = [
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

var result = moreProjects.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / perChunk);

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = []; // start a new chunk
  }

  resultArray[chunkIndex].push(item);

  return resultArray;
}, []);

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    gap: "6rem",
    alignItems: "center",
    position: "relative",
  },
  imageCtr: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  imgFill: { position: "relative", height: 900, width: 600 },
  contentCtr: {
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    width: 972,
    height: 900,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontFamily: "Manrope",
    marginBottom: theme.spacing(6),
  },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginBottom: theme.spacing(15),
    "& p": {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: 1.6,
      color: theme.palette.grey[800],
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
  tableBody: {
    "& tr": {
      "& td:not(:first-child):not(:last-child)": {
        borderLeft: "1px solid #CAD5E0",
        borderRight: "1px solid #CAD5E0",
        textAlign: "center",
      },
      "& td:last-child": {
        textAlign: "right",
        paddingRight: 0,
      },
      "& td:first-child": {
        paddingLeft: 0,
      },
      "& td:not(:first-child)": {
        // paddingLeft: '109px',
      },
    },
    "& tr:first-child": {
      "& td": {
        paddingBottom: theme.spacing(8),
      },
    },
    "& tr:not(:first-child)": {
      "& td:not(:first-child)": {
        // paddingLeft: "15px",
      },
    },
    "& tr:not(:first-child):not(:last-child)": {
      "& td": {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        // display: "grid",
        // placeContent: "center",
      },
    },
    "& tr:last-child": {
      "& td": {
        paddingTop: theme.spacing(8),
        borderBottom: "none",
      },
    },
  },
  stat: {
    display: 'flex',
    flexDirection: 'column'
  },
  name: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    color: theme.palette.grey[600],
    marginBottom: theme.spacing(1),
  },
  value: {
    fontFamily: "Manrope",
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.grey[900],
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
}));

const Partners = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageCtr}>
        <div className={classes.imgFill}>
          <Image src="/whoarewe.png" layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
      <Container maxWidth="lg" className={classes.contentCtr}>
        <div className={classes.content}>
          <div>
            <Typography variant="h3" className={classes.title}>
              {" "}
              {`Who are we?`}
            </Typography>
            <div className={classes.paragraphs}>
              <Typography variant="h6" component="p">
                Kathmandu Living Labs is a pioneer civic-tech enterprise that
                provides data and technology solutions to businesses,
                governments, development partners, and civil society.{" "}
              </Typography>
              <Typography variant="h6" component="p">
                KLL was established to challenge the status quo of the knowledge
                production paradigm, in which a vast majority of the people in
                the world are excluded. It aims to bridge that gap and bring the
                voices and needs of the people on ground and resolve some of the
                pressing issues using technological innovation and deep
                immersion in communities.
              </Typography>
            </div>
            <div className={classes.kllInNumbers}>
              <Typography variant="h5">KLL in numbers</Typography>
              <TableContainer className={classes.tableCtr}>
                <Table
                  className={classes.table}
                  aria-label="simple table"
                  style={{ tableLayout: "fixed" }}
                >
                  <TableBody className={classes.tableBody}>
                    {result.map((row) => (
                      <TableRow key={uid(row)} className={classes.tableRow}>
                        {row.map((stat) => (
                          <TableCell
                            key={uid(stat)}
                            className={classes.tableCell}
                          >
                            <div key={uid(stat)} className={classes.stat}>
                              <Typography
                                variant="body1"
                                className={classes.name}
                                display="inline"
                              >
                                {stat.name}
                              </Typography>
                              <Typography
                                variant="h5"
                                className={classes.value}
                                display="inline"
                              >
                                {stat.value}
                              </Typography>
                            </div>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
