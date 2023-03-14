import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { AccordionS } from "./style";
import databaseJapaneasy from "../../assets/japaneasy/database.png";
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

interface ReadMe {
  readMe?: {
    userStories?: string[];
    wireframes?: string;
    database?: string;
  };
}

function ProjectAccordion(project: Project) {
  //   console.log("tech", tech);
  //   console.log("readme", tech);
  return (
    <div style={{ margin: "1rem 0" }}>
      <Box>
        {project?.tech?.backend && (
          <AccordionS>
            <AccordionSummary expandIcon={<ExpandMore />}>
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
          <AccordionS>
            <AccordionSummary expandIcon={<ExpandMore />}>
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
          <AccordionS>
            <AccordionSummary expandIcon={<ExpandMore />}>
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
          <AccordionS>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h5">database tables</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflow: "auto" }}>
              {/* <img src={project?.readMe?.database} alt="bla" /> */}
              <img
                style={{ width: "100%" }}
                src={project?.readMe?.database}
                alt="database structure of project"
              />
            </AccordionDetails>
          </AccordionS>
        )}
      </Box>
    </div>
  );
}

export default ProjectAccordion;
