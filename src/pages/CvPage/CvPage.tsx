import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { CvElements } from "../../data/CV";
import { SectionBox } from "../../GlobalStyles/container/container";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Typography } from "@mui/material";
import { CvItemBox, SchoolIconS, TimelineDotS, WorkIconS } from "./styles";

function CvPage() {
  const getCvItems = () => {
    return CvElements.map((item) => {
      return (
        <CvItemBox key={item.id}>
          <TimelineItem sx={{ m: "1rem 0" }}>
            <TimelineSeparator>
              <TimelineDotS>
                {item.icon === "school" ? <SchoolIconS /> : <WorkIconS />}
              </TimelineDotS>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="h5">{item.location}</Typography>
              <Typography variant="h6">
                {item.date} {item.company}
              </Typography>
              <Typography variant="subtitle1">{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        </CvItemBox>
      );
    });
  };

  return (
    <SectionBox>
      <Timeline
        // style={{ overflow: "auto" }}
        sx={{
          overflow: "auto",
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {" "}
        {getCvItems()}
      </Timeline>
    </SectionBox>
  );
}

export default CvPage;
