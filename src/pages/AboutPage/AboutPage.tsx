import { Typography } from "@mui/material";
import { SectionBox } from "../../GlobalStyles/container/container";
import { AboutCont } from "./styles";

function AboutPage() {
  return (
    <SectionBox sx={{ display: "flex" }}>
      <AboutCont>
        <Typography variant="subtitle1" sx={{ textAlign: "justify" }}>
          {" "}
          Born and raised in Czech Republic Dutch and Japanese parents, I moved
          to Amsterdam in 2014 to study hospitality management at Hotelschool
          The Hague.
          <br />
          <br />
          After graduating from Hotelschool The Hague I worked different jobs in
          the hospitality industry as a manager, which allowed me to travel and
          live around the world. But when COVID-19 forced me to stay inside I
          finally had some time to re-evaluate my career. <br />
          <br />
          During the pandemic I tried many different online courses, and in the
          summer of 2021 I started the full-stack developer path on Codecademy
          and instantly fell in love with programming, to the point where I had
          to peel myself from my laptop to go to sleep. <br />
          <br />
          After a few weeks I decided to enroll myself into Codaisseur where I
          spent 10 intense weeks studying.
          <br />
          <br />
          After graduating I started working for Building Tech Heroes as a
          software developer during their experimental start-up phase.
        </Typography>
      </AboutCont>
    </SectionBox>
  );
}

export default AboutPage;
