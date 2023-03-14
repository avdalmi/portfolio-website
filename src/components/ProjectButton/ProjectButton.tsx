import { GitHub, OpenInNew } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";
import { ButtonBox, LinkButton } from "./style";

interface ProjectLinks {
  project?: {
    frontendLink?: string;
    backendLink?: string;
    demoLink?: string;
  };
}
function ProjectButton(project?: ProjectLinks) {
  const backendLink = project?.project?.backendLink;
  const frontendLink = project?.project?.frontendLink;
  const demoLink = project?.project?.demoLink;
  return (
    <ButtonBox>
      {frontendLink && (
        <Link
          sx={{ textDecoration: "none" }}
          href={frontendLink}
          target="_blank"
        >
          <LinkButton startIcon={<GitHub />}>front end</LinkButton>
        </Link>
      )}
      {backendLink && (
        <Link
          sx={{ textDecoration: "none" }}
          href={backendLink}
          target="_blank"
        >
          <LinkButton startIcon={<GitHub />}>back end</LinkButton>
        </Link>
      )}
      {demoLink && (
        <Link sx={{ textDecoration: "none" }} href={demoLink} target="_blank">
          <LinkButton startIcon={<OpenInNew />}>live demo</LinkButton>
        </Link>
      )}
    </ButtonBox>
  );
}

export default ProjectButton;
