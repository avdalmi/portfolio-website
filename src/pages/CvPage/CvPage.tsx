import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { CvElements } from "../../data/CV";
import { SectionCont } from "../../GlobalStyles/container/container";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Typography } from "@mui/material";

import { School, WorkOutline } from "@mui/icons-material";

function CvPage() {
  const getCvItems = () => {
    return CvElements.map((item) => {
      return (
        <TimelineItem key={item.id} sx={{ m: "1rem 0" }}>
          <TimelineSeparator>
            <TimelineDot>
              {item.icon === "school" ? <School /> : <WorkOutline />}
            </TimelineDot>
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
      );
    });
  };

  return (
    <SectionCont>
      <Timeline
        style={{ overflow: "auto" }}
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {" "}
        {getCvItems()}
      </Timeline>
    </SectionCont>
  );
}

export default CvPage;
