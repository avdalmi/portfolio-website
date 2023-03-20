import {
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { AccordionS, ExpandIcon } from "./style";

import { useState } from "react";

interface Project {
  tech?: {
    frontend?: string[];
    backend?: string[];
  };
  readMe?: {
    userStories?: string[];
    wireframes?: string;
    database?: string;
  };
}

function ProjectAccordion(project: Project) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleExpansion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box sx={{ m: "1rem 0" }}>
      <Box>
        {project?.tech?.backend && (
          <AccordionS
            expanded={expanded === "panel1"}
            onChange={handleExpansion("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography variant="h5">back end stack</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {project?.tech?.backend?.map((item) => {
                return (
                  <Typography variant="subtitle1" key={item}>
                    {item}
                  </Typography>
                );
              })}
            </AccordionDetails>
          </AccordionS>
        )}
      </Box>
      <Box>
        {project?.tech?.frontend && (
          <AccordionS
            expanded={expanded === "panel2"}
            onChange={handleExpansion("panel2")}
          >
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography variant="h5">front end stack</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {project?.tech?.frontend?.map((item) => {
                return (
                  <Typography variant="subtitle1" key={item}>
                    {item}
                  </Typography>
                );
              })}
            </AccordionDetails>
          </AccordionS>
        )}
      </Box>
      <Box>
        {project?.readMe?.userStories && (
          <AccordionS
            expanded={expanded === "panel3"}
            onChange={handleExpansion("panel3")}
          >
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography variant="h5">user stories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {project?.readMe?.userStories?.map((story) => {
                  return (
                    <ListItem key={story}>
                      <Typography variant="subtitle1">{story}</Typography>
                    </ListItem>
                  );
                })}
              </List>
            </AccordionDetails>
          </AccordionS>
        )}
      </Box>
      <Box>
        {project?.readMe?.database && (
          <AccordionS
            expanded={expanded === "panel4"}
            onChange={handleExpansion("panel4")}
          >
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography variant="h5">database tables</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflow: "auto" }}>
              <a
                href={project?.readMe?.database}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project?.readMe?.database}
                  alt="database table for project"
                />
              </a>
            </AccordionDetails>
          </AccordionS>
        )}
      </Box>
      <Box>
        {project?.readMe?.wireframes && (
          <AccordionS
            expanded={expanded === "panel5"}
            onChange={handleExpansion("panel5")}
          >
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography variant="h5">wireframes</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflow: "auto" }}>
              <a
                href={project?.readMe?.wireframes}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project?.readMe?.wireframes}
                  alt="wireframes for project"
                />
              </a>
            </AccordionDetails>
          </AccordionS>
        )}
      </Box>
    </Box>
  );
}

export default ProjectAccordion;
