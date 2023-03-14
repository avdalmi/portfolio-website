import { Link, Typography } from "@mui/material";
import React from "react";
import { projectData } from "../../data/Project";
import { SectionCont } from "../../GlobalStyles/container/container";

function ProjectPage() {
  return (
    <SectionCont
    // sx={ { backgroundColor: "thistle" } }
    >
      {projectData.map((project) => {
        return (
          <div key={project.id}>
            <Link href={`/projecs/${project.id}`}>
              <Typography variant="h2">{project.title}</Typography>
            </Link>
            <Typography variant="h4">{project.stack}</Typography>
            <Typography variant="h5">{project.location}</Typography>
          </div>
        );
      })}
    </SectionCont>
  );
}

export default ProjectPage;
