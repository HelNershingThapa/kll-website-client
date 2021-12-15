import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Cities’ COVID-19 Mitigation Planning",
    category: "Disaster Response",
    src: "/project-1.png",
  },
  {
    name: "National Housing Reconstruction Programme",
    category: "Disaster Response",
    src: "/project-2.png",
  },
  {
    name: "Regional TechCamp on Good Governance 2020",
    category: "Governance",
    src: "/project-3.png",
  },
  {
    name: "Earthquake Data Portal",
    category: "Disaster Preparedness",
    src: "/project-4.png",
  },
  {
    name: "Prepare Pokhara - 2C (Secondary Cities) Project",
    category: "Mapping",
    src: "/project-5.png",
  },
];

const useStyles = makeStyles((theme) => ({
  projects: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "620px 500px 500px",
    gridGap: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      gridTemplateRows: "465px 375px 375px",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",
      gridGap: theme.spacing(6),
    },
  },
  project1: {
    gridColumn: "span 7",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
    },
  },
  project2: {
    gridColumn: "span 5",
    "& h4": {
      maxWidth: 489,
    },
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
    },
  },
  project3: {
    gridColumn: "span 5",
    gridRow: "2/4",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  project4: {
    gridColumn: "span 7",
    gridRow: "2/3",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  project5: {
    gridColumn: "span 7",
    gridRow: "3/4",
    "& h4": {
      maxWidth: 423,
    },
    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
}));

const ProjectsGrid = ({ projects }) => {
  const classes = useStyles();

  return (
    <div className={classes.projects}>
      <div className={classes.project1}>
        <ProjectCard
          name={projects[0].name}
          category={projects[0].category}
          src={projects[0].coverImage.image.url}
          slug={projects[0].slug}
          coverImagePosition={projects[0].coverImagePosition}
        />
      </div>
      <div className={classes.project2}>
        <ProjectCard
          name={projects[1].name}
          category={projects[1].category}
          src={projects[1].coverImage.image.url}
          coverImagePosition={projects[1].coverImagePosition}
          slug={projects[1].slug}
        />
      </div>
      <div className={classes.project3}>
        <ProjectCard
          name={projects[2].name}
          category={projects[2].category}
          coverImagePosition={projects[2].coverImagePosition}
          src={projects[2].coverImage.image.url}
          slug={projects[2].slug}
        />
      </div>
      <div className={classes.project4}>
        <ProjectCard
          name={projects[3].name}
          category={projects[3].category}
          coverImagePosition={projects[3].coverImagePosition}
          src={projects[3].coverImage.image.url}
          slug={projects[3].slug}
        />
      </div>
      <div className={classes.project5}>
        <ProjectCard
          name={projects[4].name}
          category={projects[4].category}
          coverImagePosition={projects[4].coverImagePosition}
          src={projects[4].coverImage.image.url}
          slug={projects[4].slug}
        />
      </div>
    </div>
  );
};

export default ProjectsGrid;
