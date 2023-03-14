import React from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../../data/Project";

function ProjectCardPage() {
  const { id } = useParams<string>();

  const findProject = projectData.find((project) => project.id === Number(id));
  return <div>ProjectCardPage</div>;
}

export default ProjectCardPage;
