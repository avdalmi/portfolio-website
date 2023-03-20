import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { AccordionS, ExpandIcon } from "../../components/Accordion/style";
import { SectionBox } from "../../GlobalStyles";
import { SkillItem, SkillLink } from "./style";

import { useState } from "react";
import { skills } from "../../data/Project";

interface Skill {
  name?: string;
  link?: string;
}

function SkillsPage() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleExpansion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <SectionBox>
      <AccordionS
        expanded={expanded === "panel1"}
        onChange={handleExpansion("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h5">languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {skills.languages.map((skill: Skill, index) => {
            return (
              <Typography variant="subtitle1" key={index}>
                {skill.name}
              </Typography>
            );
          })}
        </AccordionDetails>
      </AccordionS>

      <AccordionS
        expanded={expanded === "panel2"}
        onChange={handleExpansion("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h5">front end</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {skills.frontend.map((skill: Skill, index) => {
            return (
              <Typography variant="subtitle1" key={index}>
                {skill.name}
              </Typography>
            );
          })}
        </AccordionDetails>
      </AccordionS>

      <AccordionS
        expanded={expanded === "panel3"}
        onChange={handleExpansion("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h5">back end</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {skills.backend.map((skill: Skill, index) => {
            return (
              <Typography variant="subtitle1" key={index}>
                {skill.name}
              </Typography>
            );
          })}
        </AccordionDetails>
      </AccordionS>

      <AccordionS
        expanded={expanded === "panel4"}
        onChange={handleExpansion("panel4")}
      >
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h5">validations & testing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {skills.validation.map((skill: Skill, index) => {
            return (
              <Typography variant="subtitle1" key={index}>
                {skill.name}
              </Typography>
            );
          })}
        </AccordionDetails>
      </AccordionS>

      <AccordionS
        expanded={expanded === "panel5"}
        onChange={handleExpansion("panel5")}
      >
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h5">certificates</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {skills.certificates.map((skill: Skill, index) => {
            return (
              <SkillLink key={index} href={skill.link} target="_blank">
                <SkillItem variant="subtitle1">{skill.name}</SkillItem>
              </SkillLink>
            );
          })}
        </AccordionDetails>
      </AccordionS>
    </SectionBox>
  );
}

export default SkillsPage;
