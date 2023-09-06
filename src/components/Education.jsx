import React from "react";
import { useState } from "react";
import InputGroup from "./InputGroup";

const Education = ({ onSubmit }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [educationFormData, setEducationFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const handleFormSubmit = (e) => {
    // console.log(educationFormData);
    e.preventDefault();
    onSubmit(educationFormData);
  };

  const handleInputChange = (e) => {
    const { key } = e.target.dataset;
    setEducationFormData({ ...educationFormData, [key]: e.target.value });
  };

  return (
    <form className="education" onSubmit={handleFormSubmit}>
      <h2>School</h2>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Close" : "Open"}
      </button>
      {isVisible && (
        <div>
          <InputGroup
            id="school"
            type="text"
            placeholder="Enter school / university"
            value={educationFormData.school}
            onChange={handleInputChange}
            data-key="school"
          />
          <h2>Degree</h2>
          <InputGroup
            id="degree"
            type="text"
            placeholder="Enter degree / field of study"
            value={educationFormData.degree}
            onChange={handleInputChange}
            data-key="degree"
          />
          <h2>Start Date</h2>
          <InputGroup
            id="startDate"
            type="text"
            placeholder="Enter Start Date"
            value={educationFormData.startDate}
            onChange={handleInputChange}
            data-key="startDate"
          />
          <h2>End Date</h2>
          <InputGroup
            id="endDate"
            type="text"
            placeholder="Enter End Date"
            value={educationFormData.endDate}
            onChange={handleInputChange}
            data-key="endDate"
          />
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default Education;
