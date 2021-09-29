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
    gridTemplateColumns: "1fr 0.57fr 1.0384fr",
    gridTemplateRows: "620px 500px 500px",
    gridGap: theme.spacing(10),
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",
      gridGap: theme.spacing(6),
    },
  },
  project1: {
    gridColumn: "1 / 3",
    [theme.breakpoints.down("xs")]: {
      gridColumn: "auto",
    },
  },
  project2: {
    gridColumn: "3/4",
    "& h4": {
      width: 489,
    },
    [theme.breakpoints.down("xs")]: {
      gridColumn: "auto",
    },
  },
  project3: {
    gridColumn: "1/2",
    gridRow: "2/4",
    [theme.breakpoints.down("xs")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  project4: {
    gridColumn: "2/4",
    gridRow: "2/3",
    [theme.breakpoints.down("xs")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
  project5: {
    gridColumn: "2/4",
    gridRow: "3/4",
    "& h4": {
      width: 423,
    },
    [theme.breakpoints.down("xs")]: {
      gridColumn: "auto",
      gridRow: "auto",
    },
  },
}));

const ProjectsGrid = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.projects}>
      <div className={classes.project1}>
        <ProjectCard
          name={projects[0].name}
          category={projects[0].category}
          src={projects[0].src}
        />
      </div>
      <div className={classes.project2}>
        <ProjectCard
          name={projects[1].name}
          category={projects[1].category}
          src={projects[1].src}
        />
      </div>
      <div className={classes.project3}>
        <ProjectCard
          name={projects[2].name}
          category={projects[2].category}
          src={projects[2].src}
        />
      </div>
      <div className={classes.project4}>
        <ProjectCard
          name={projects[3].name}
          category={projects[3].category}
          src={projects[3].src}
        />
      </div>
      <div className={classes.project5}>
        <ProjectCard
          name={projects[4].name}
          category={projects[4].category}
          src={projects[4].src}
        />
      </div>
    </div>
  );
};

export default ProjectsGrid;
