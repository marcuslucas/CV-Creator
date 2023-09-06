import React from "react";

const Document = ({
  fullName,
  email,
  phoneNumber,
  title,
  address,
  school,
  degree,
  startDateEducation,
  endDateEducation,
  company,
  positionTitle,
  startDateExperience,
  endDateExperience,
  description,
}) => {
  return (
    <div className="document">
      <div className="personalDocSection">
        <h1>{fullName}</h1>
        <h2>{title}</h2>
        <h3>{email}</h3>
        <h3>{phoneNumber}</h3>
        <h3>{address}</h3>
      </div>
      <div className="educationDocSection">
        <h1>Education</h1>
        <h2>{school}</h2>
        <h2>{degree}</h2>
        <h2>{`${startDateEducation}-${endDateEducation}`}</h2>
      </div>
      <div className="experienceDocSection">
        <h1>Experience</h1>
        <h2>{company}</h2>
        <h2>{positionTitle}</h2>
        <h2>{`${startDateExperience}-${endDateExperience}`}</h2>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default Document;
