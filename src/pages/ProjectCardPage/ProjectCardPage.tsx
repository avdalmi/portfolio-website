import { ArrowBackIos } from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import { SectionBox } from "../../GlobalStyles/containers/containers";
import { BackButton, HeadingBox } from "./style";

import { ProjectAccordion, ProjectButton } from "../../components";
import { useParams } from "react-router-dom";
import { Project } from "../../types/project";
import { projectData } from "../../data/Project";

function ProjectCardPage() {
  const { id } = useParams<string>();

  const project = projectData.find(
    (project: Project) => project.id === Number(id)
  );

  return (
    <SectionBox style={{ whiteSpace: "pre-wrap" }}>
      <HeadingBox>
        <Link href="/projects">
          <BackButton
            startIcon={<ArrowBackIos sx={{ height: "10px", mr: "-10px" }} />}
          >
            back
          </BackButton>
        </Link>
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
