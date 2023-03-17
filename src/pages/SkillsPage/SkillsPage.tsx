import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { AccordionS, ExpandIcon } from "../../components/Accordion/style";
import { SectionBox } from "../../GlobalStyles";
import { skills } from "../../data/Project";
import { SkillItem, SkillLink } from "./style";
import { useState } from "react";

interface Skills {
  name?: string;
  type?: string;
  imageUrl?: string;
  webUrl?: string;
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
          {skills.map((skill: Skills, index) => {
            if (skill.type === "language") {
              return (
                <SkillLink key={index} href={skill.webUrl} target="_blank">
                  <SkillItem variant="subtitle1">{skill.name}</SkillItem>
                </SkillLink>
              );
            }
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
          {skills.map((skill, index) => {
            if (skill.type === "frontend") {
              return (
                <SkillLink key={index} href={skill.webUrl} target="_blank">
                  <SkillItem variant="subtitle1">{skill.name}</SkillItem>
                </SkillLink>
              );
            }
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
          {skills.map((skill, index) => {
            if (skill.type === "backend") {
              return (
                <SkillLink key={index} href={skill.webUrl} target="_blank">
                  <SkillItem variant="subtitle1">{skill.name}</SkillItem>
                </SkillLink>
              );
            }
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
          {skills.map((skill, index) => {
            if (skill.type === "validation") {
              return (
                <SkillLink key={index} href={skill.webUrl} target="_blank">
                  <SkillItem variant="subtitle1">{skill.name}</SkillItem>
                </SkillLink>
              );
            }
          })}
        </AccordionDetails>
      </AccordionS>
    </SectionBox>
  );
}

export default SkillsPage;
