import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProjectAccordion from "../../components/Accordion/Accordion";
import ProjectButton from "../../components/ProjectButton/ProjectButton";
import { projectData } from "../../data/Project";
import { SectionBox } from "../../GlobalStyles/container/container";
import { Project } from "../../types/project";
import { HeadingBox } from "./style";

function ProjectCardPage() {
  const { id } = useParams<string>();

  const project = projectData.find(
    (project: Project) => project.id === Number(id)
  );

  return (
    <SectionBox style={{ whiteSpace: "pre-wrap" }}>
      <HeadingBox>
        <Typography variant="h2">{project?.title}</Typography>
        <Typography variant="h4">{project?.type} project</Typography>
        <Typography variant="h5">{project?.location}</Typography>
        <Typography variant="h5" sx={{ mb: "1rem" }}>
          {project?.date}
        </Typography>
      </HeadingBox>
      <Typography variant="subtitle1">{project?.description}</Typography>
      <ProjectButton project={project?.links} />
      <ProjectAccordion tech={project?.tech} readMe={project?.readMe} />
    </SectionBox>
  );
}

export default ProjectCardPage;
