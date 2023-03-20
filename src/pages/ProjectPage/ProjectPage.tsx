import { Typography } from "@mui/material";
import { projectData } from "../../data/Project";
import { SectionBox } from "../../GlobalStyles";
import { ProjectNavBox, ProjectNavLink, ProjectNavTitle } from "./style";

function ProjectPage() {
  return (
    <SectionBox sx={{ textAlign: "right" }}>
      {projectData.map((project) => {
        return (
          <ProjectNavBox key={project.id}>
            <ProjectNavLink href={`/projects/${project.id}`}>
              <ProjectNavTitle variant="h2">{project.title}</ProjectNavTitle>
            </ProjectNavLink>
            <Typography variant="h5">{project.type}</Typography>
          </ProjectNavBox>
        );
      })}
    </SectionBox>
  );
}

export default ProjectPage;
