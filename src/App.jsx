import React, { useState } from "react";
import exampleData from "./example-data";
import Resume from "./components/Resume";
import "./styles/style.css";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);

  const [education, setEducation] = useState(exampleData.sections.education[0]);

  const [experience, setExperience] = useState(
    exampleData.sections.experiences[0]
  );

  const handlePersonalInfoChange = (e) => {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  };

  const handleEducationSubmit = (educationData) => {
    setEducation(educationData);
  };

  const handleExperienceSubmit = (experienceData) => {
    setExperience(experienceData);
  };

  const handleDefault = () => {
    console.log("load default");
    setPersonalInfo(exampleData.personalInfo);
    setEducation(exampleData.sections.education[0]);
    setExperience(exampleData.sections.experiences[0]);
  };

  const handleReset = () => {
    setPersonalInfo({});
    setEducation({});
    setExperience({});
  };

  return (
    <div className="container">
      <Header />
      <div className="indexCSS">
        <div className="sidebar">
          <div className="forms">
            <PersonalInfo
              onChange={handlePersonalInfoChange}
              fullName={personalInfo.fullName}
              title={personalInfo.title}
              address={personalInfo.address}
              email={personalInfo.email}
              phoneNumber={personalInfo.phoneNumber}
            />

            <Education
              onSubmit={handleEducationSubmit}
              // onChange={handleEducationChange}
              school={education.school}
              degree={education.degree}
              eduStart={education.eduStart}
              eduEnd={education.eduEnd}
            />

            <Experience
              onSubmit={handleExperienceSubmit}
              // onChange={handleExperienceChange}
              company={experience.company}
              positionTitle={experience.positionTitle}
              expStart={experience.expStart}
              expEnd={experience.expEnd}
            />
          </div>
          <div className="buttons">
            <button className="button" onClick={handleReset}>
              Reset
            </button>
            <button className="button" onClick={handleDefault}>
              Load Defaults
            </button>
          </div>
        </div>
        <Resume
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          title={personalInfo.title}
          address={personalInfo.address}
          school={education.school}
          degree={education.degree}
          eduStart={education.eduStart}
          eduEnd={education.eduEnd}
          company={experience.company}
          positionTitle={experience.positionTitle}
          expStart={experience.expStart}
          expEnd={experience.expEnd}
          description={experience.description}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
