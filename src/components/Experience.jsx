import React from "react";
import InputGroup from "./InputGroup";
import { useState } from "react";

const Experience = ({ onSubmit }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [experienceFormData, setExperienceFormData] = useState({
    company: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(experienceFormData);
  };

  const handleInputChange = (e) => {
    const { key } = e.target.dataset;
    setExperienceFormData({ ...experienceFormData, [key]: e.target.value });
  };

  return (
    <form className="experience" onSubmit={handleFormSubmit}>
      <h2>Company</h2>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Close" : "Open"}
      </button>
      {isVisible && (
        <div>
          <InputGroup
            id="company"
            type="text"
            placeholder="Enter company name"
            value={experienceFormData.company}
            onChange={handleInputChange}
            data-key="company"
          />
          <h2>Position Title</h2>
          <InputGroup
            id="positionTitle"
            type="text"
            placeholder="Enter Position Title"
            value={experienceFormData.positionTitle}
            onChange={handleInputChange}
            data-key="positionTitle"
          />
          <h2>Start Date</h2>
          <InputGroup
            id="startDateExperience"
            type="text"
            placeholder="Enter Start Date"
            value={experienceFormData.startDateExperience}
            onChange={handleInputChange}
            data-key="startDateExperience"
          />
          <h2>End Date</h2>
          <InputGroup
            id="endDateExperience"
            type="text"
            placeholder="Enter End Date"
            value={experienceFormData.endDateExperience}
            onChange={handleInputChange}
            data-key="endDateExperience"
          />
          <InputGroup
            id="description"
            type="textarea"
            placeholder="Enter job description"
            value={experienceFormData.description}
            onChange={handleInputChange}
            data-key="description"
          />
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default Experience;
