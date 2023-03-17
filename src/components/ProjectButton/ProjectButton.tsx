import { Code, OpenInNew, YouTube } from "@mui/icons-material";
import { Link } from "@mui/material";
import { ButtonBox, LinkButton } from "./style";

interface ProjectLinks {
  project?: {
    frontendLink?: string;
    backendLink?: string;
    demoLink?: string;
    youtubeLink?: string;
  };
}
function ProjectButton(project?: ProjectLinks) {
  const backendLink = project?.project?.backendLink;
  const frontendLink = project?.project?.frontendLink;
  const demoLink = project?.project?.demoLink;
  const youtubeLink = project?.project?.youtubeLink;
  return (
    <ButtonBox>
      {frontendLink && (
        <Link
          sx={{ textDecoration: "none" }}
          href={frontendLink}
          target="_blank"
        >
          <LinkButton startIcon={<Code />}>front end</LinkButton>
        </Link>
      )}
      {backendLink && (
        <Link
          sx={{ textDecoration: "none" }}
          href={backendLink}
          target="_blank"
        >
          <LinkButton startIcon={<Code />}>back end</LinkButton>
        </Link>
      )}
      {demoLink && (
        <Link sx={{ textDecoration: "none" }} href={demoLink} target="_blank">
          <LinkButton startIcon={<OpenInNew />}>live demo</LinkButton>
        </Link>
      )}
      {youtubeLink && (
        <Link
          sx={{ textDecoration: "none" }}
          href={youtubeLink}
          target="_blank"
        >
          <LinkButton startIcon={<YouTube />}>YouTube</LinkButton>
        </Link>
      )}
    </ButtonBox>
  );
}

export default ProjectButton;
