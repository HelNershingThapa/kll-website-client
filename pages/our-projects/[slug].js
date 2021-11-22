import ReactMarkdown from "react-markdown";
import Head from "next/head";
import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
// import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import Link from '@material-ui/core/Link';
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { Typography, Container, Divider, Chip, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import ProjectPartners from "../../components/our-projects/ProjectPartners";
import Documents from "../../components/our-projects/Documents";

const project = {
  title: "National Housing Reconstruction Programme",
  background:
    "The 7.8 magnitude earthquake of 2015 devastated large swathe of Nepal. The Government of Nepal (GoN) initiated a survey to have a comprehensive housing assessment data. However, the survey had multifold challenges. Not only was there a need to collect a comprehensive information about each record but there was also a need for real-time validation. Creation and operation of a cloud infrastructure to host a large amount of data was also a challenge. Finally, there was also a need to seamlessly transfer the data to relevant government partners for dissemination and use. ",
  tags: ["Earthquake", "Reconstruction", "Digital Survey"],
};

const useStyles = makeStyles((theme) => ({
  imageFill: { position: "relative", width: "100%", height: 620 },
  projectDescription: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 800,
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: theme.spacing(12),
  },
  chipRoot: {
    background: "#E9F3EB",
    padding: "10px 25.5px",
  },
  label: {
    padding: 0,
  },
  chipLabel: {
    fontFamily: "Manrope",
    fontWeight: 600,
    lineHeight: 1,
    color: "#0F5C2B",
    textTransform: "capitalize"
  },
  title: {
    fontWeight: 800,
    lineHeight: "60px",
    color: theme.palette.grey[50],
    width: 692,
    marginTop: theme.spacing(4),
  },
  headerImageOverlay: {
    position: "absolute",
    background: "linear-gradient(180deg, #0D1829 0%, rgba(13, 24, 41, 0) 100%)",
    transform: "matrix(1, 0, 0, -1, 0, 0)",
    bottom: 0,
    padding: theme.spacing(10),
    width: "100%",
    height: "51%",
  },
  content: {
    maxWidth: 800,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(25),
    marginLeft: "auto",
    marginRight: "auto",
    "& ol": {
      paddingLeft: "1.5rem",
    },
    "& ul": {
      paddingLeft: "1.5rem",
    },
  },
  projectLink: {
    fontWeight: 600,
    lineHeight: "20px",
    color: theme.palette.grey[500],
  },
  link: {
    fontWeight: 600,
    lineHeight: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(10),
  },
  header: {
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(10),
  },
  paragraph: {
    color: theme.palette.grey[800],
    marginBottom: '1rem',
  },
  image: {
    padding: theme.spacing(10, 0),
  },
  imgFill: {
    position: "relative",
    width: 800,
    height: 400,
  },
  bullets: {
    marginTop: theme.spacing(5),
  },
  outcomeTitle: {
    fontWeight: 600,
  },
  imagesCtr: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "500px 350px",
    padding: theme.spacing(10, 0),
    gap: theme.spacing(5),
  },
  images: {
    position: "relative",
    gridColumn: "span 1",
  },
  wideImage: {
    position: "relative",
    gridColumn: "1/3",
  },
  partnersCtr: {
    marginTop: theme.spacing(15),
  },
  partnersLogos: {
    width: "80%",
    display: "flex",
    gap: theme.spacing(8),
    flexWrap: "wrap",
    alignItems: "center",
  },

  partnerLogo: {
    maxWidth: 300,
    height: "auto",
  },
  tagsCtr: {
    marginTop: theme.spacing(10),
    display: "flex",
    gap: theme.spacing(3),
    alignItems: "center",
  },
  tagsTypo: {
    fontWeight: 600,
    lineHeight: 1,
  },
  tags: {
    display: "flex",
    gap: theme.spacing(2),
    flexWrap: "wrap",
  },
  tagRoot: {
    background: theme.palette.grey[100],
    padding: "6px 12px",
  },
  tagLabel: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1,
    color: theme.palette.grey[600],
    padding: 0,
  },
  markdownImageFill: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: "relative",
    width: "100%",
    height: "100%",
    "& div": {
      position: "unset !important",
    },
  },
  markdownImage: {
    objectFit: "cover",
    width: "100vw important",
    position: "relative !important",
    height: "unset !important",
  },
}));

function MarkdownParagraph(props) {
  const classes = useStyles();

  return <Typography variant="body1" className={classes.paragraph} >{props.children}</Typography>
}

const MarkdownHeading = (({ ...props }) => {
  const classes = useStyles();

  let variant;
  switch (props.level) {
    case 1:
      variant = "h5";
      break;
    case 2:
      variant = "h6";
      break;
    case 3:
      variant = "subtitle1";
      break;
    case 4:
      variant = "subtitle2";
      break;
    default:
      variant = "h5";
      break;
  }

  return <Typography className={classes.header} gutterBottom variant={variant}>{props.children}</Typography>
});

// const MarkdownListItem = withStyles(styles)(({ classes, ...props }) => {
//   return (
//     <li className={classes.listItem}>
//       <Typography component="span">{props.children}</Typography>
//     </li>
//   );
// });



function MarkdownTable(props) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table size="small" aria-label="a dense table">{props.children}</Table>
    </TableContainer>
  );
}

function MarkdownTableCell(props) {
  return <TableCell><Typography>{props.children}</Typography></TableCell>
}

function MarkdownTableRow(props) {
  return <TableRow>{props.children}</TableRow>
}

function MarkdownTableBody(props) {
  return <TableBody>{props.children}</TableBody>
}

function MarkdownTableHead(props) {
  return <TableHead>{props.children}</TableHead>
}

function MarkdownImage(props) {
  const classes = useStyles();
  const { API_URL } = process.env;

  return (
    <div className={classes.markdownImageFill}>
      <Image
        className={classes.markdownImage}
        src={`${API_URL}${props.src}`}
        layout="fill"
        objectFit="cover"
        alt={props.alt}
      />
    </div>
  );
}

const renderers = {
  heading: MarkdownHeading,
  paragraph: MarkdownParagraph,
  link: Link,
  // listItem: MarkdownListItem,
  image: MarkdownImage,
  table: MarkdownTable,
  tableHead: MarkdownTableHead,
  tableBody: MarkdownTableBody,
  tableRow: MarkdownTableRow,
  tableCell: MarkdownTableCell,
};

function ProjectDetails({ projectDetail }) {
  const classes = useStyles();

  const { API_URL } = process.env;

  console.log("projectDetail", projectDetail);

  return (
    <>
      <Head>
        <title>{`${projectDetail.name} | Impact | Kathmandu Living Labs`}</title>
      </Head>
      <div className={classes.imageFill}>
        <Image
          priority
          src={`${API_URL}${projectDetail.coverImage.image.url}`}
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className={classes.headerImageOverlay} />
        <div className={classes.projectDescription}>
          <Chip
            label={
              <Typography variant="subtitle1" className={classes.chipLabel}>
                {projectDetail.status}
              </Typography>
            }
            classes={{ root: classes.chipRoot, label: classes.label }}
          />
          <Typography variant="h2" className={classes.title}>
            {projectDetail.name}
          </Typography>
        </div>
      </div>

      <Container fixed>
        <div className={classes.content}>
          {projectDetail.projectLink && <><Typography variant="subtitle2" className={classes.projectLink}>
            Project Link
          </Typography>
            <Typography
              variant="body1"
              className={classes.link}
              color="primary"
            >{`https://bit.ly/GH45H`}</Typography></>}

          <ReactMarkdown children={projectDetail.description} escapeHtml={false} renderers={renderers} />

          {projectDetail.partners.length > 0 && <ProjectPartners />}
          {projectDetail.documents.length > 0 && <Documents documents={projectDetail.documents} />}
          {projectDetail.tags.length > 0 && <div className={classes.tagsCtr}>
            <Typography variant="subtitle1" className={classes.tagsTypo}>
              Tags
            </Typography>
            <div className={classes.tags}>
              {projectDetail.tags.map((tag) => (
                <Chip
                  key={uid(tag)}
                  label={tag.tag}
                  classes={{ root: classes.tagRoot, label: classes.tagLabel }}
                />
              ))}
            </div>
          </div>}
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/projects");
  const projects = await res.json();

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/projects?slug=${params.slug}`);
  const projectDetail = await res.json();

  return {
    props: {
      projectDetail: projectDetail[0],
    },
  };
}

export default ProjectDetails;
