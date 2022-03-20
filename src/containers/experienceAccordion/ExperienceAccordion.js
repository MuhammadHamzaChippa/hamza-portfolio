import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { workexperience } from "../../portfolio";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { Fade } from "react-reveal";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}></h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {workexperience.work.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
    // <div className="experience-accord">
    //   <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
    //     <Accordion onChange={({ expanded }) => console.log(expanded)}>
    //       {props.sections.map((section) => {
    //         return (
    //           <Panel
    //             className="accord-panel"
    //             title={section["title"]}
    //             key={section["title"]}
    //           >
    //             {section["experiences"].map((experience) => {
    //               return (
    //                 <ExperienceCard experience={experience} theme={theme} />
    //               );
    //             })}
    //           </Panel>
    //         );
    //       })}
    //     </Accordion>
    //   </ThemeProvider>
    // </div>
  );
}

export default ExperienceAccordion;
