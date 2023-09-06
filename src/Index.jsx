import React, { useState } from "react";

import Document from "./components/Document";
import "./style.css";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

const Index = (props) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "John Doe",
    title: "Software Developer",
    email: "john@test.com",
    phoneNumber: "914-123-4567",
    address: "Larch, NY",
  });

  const [education, setEducation] = useState({
    school: "Stony Brook",
    degree: "CS",
    startDate: "2019",
    endDate: "2023",
  });

  const [experience, setExperience] = useState({
    company: "Beacon Hill Inc.",
    positionTitle: "Software Developer",
    startDate: "2014",
    endDate: "2016",
    description: "Software Dev for Frontend",
  });

  const handlePersonalInfoChange = (e) => {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  };

  // const handleEducationChange = (e) => {
  //   const { key } = e.target.dataset;
  //   setEducation({ ...education, [key]: e.target.value });
  // };

  const handleEducationSubmit = (educationData) => {
    setEducation(educationData);
  };

  const handleExperienceSubmit = (experienceData) => {
    setExperience(experienceData);
  };

  const handleReset = () => {
    setEducation(education);
    setExperience(experience);
    setPersonalInfo(personalInfo);
  };

  // const handleExperienceChange = (e) => {
  //   const { key } = e.target.dataset;
  //   setExperience({ ...experience, [key]: e.target.value });
  // };

  return (
    <div className="container">
      <div className="indexCSS">
        <div className="sidebar">
          <button>Reset</button>
          <button onClick={() => handleReset}>Load Defaults</button>
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
            startDate={education.startDate}
            endDate={education.endDate}
          />

          <Experience
            onSubmit={handleExperienceSubmit}
            // onChange={handleExperienceChange}
            company={experience.company}
            positionTitle={experience.positionTitle}
            startDateExperience={experience.startDate}
            endDateExperience={experience.endDate}
          />
        </div>
        <Document
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          title={personalInfo.title}
          address={personalInfo.address}
          school={education.school}
          degree={education.degree}
          startDateEducation={education.startDate}
          endDateEducation={education.endDate}
          company={experience.company}
          positionTitle={experience.positionTitle}
          startDateExperience={experience.startDate}
          endDateExperience={experience.endDate}
          description={experience.description}
        />
      </div>
    </div>
  );
};

export default Index;
