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
  project1: {
    gridArea: "project1",
  },
  project2: {
    gridArea: "project2",
  },
  project3: {
    gridArea: "project3",
  },
  project4: {
    gridArea: "project4",
  },
  project5: {
    gridArea: "project5",
  },
  projects: {
    display: "grid",
    // gridTemplateColumns: "860px 540px",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: theme.spacing(10),
    marginTop: theme.spacing(15),
    gridTemplateAreas: `"project1 project1 project2"
    "project3 project4 project4"
    "project3 project5 project5"`,
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
