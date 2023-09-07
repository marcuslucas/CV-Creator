import React from "react";

const Resume = ({
  fullName,
  email,
  phoneNumber,
  title,
  address,
  school,
  degree,
  eduStart,
  eduEnd,
  company,
  positionTitle,
  expStart,
  expEnd,
  description,
}) => {
  return (
    <div className="resume">
      <div className="resumePersonal">
        <div className="resumeTitle">
          <h1 className="resumeText">{fullName}</h1>
          <h2 className="resumeText">{title}</h2>
        </div>
        <div className="resumeContact">
          <h3 className="resumeText">{email}</h3>
          <h3 className="resumeText">{phoneNumber}</h3>
          <h3 className="resumeText">{address}</h3>
        </div>
      </div>
      <div className="resumeEdu">
        <h1>Education</h1>
        <h2>{school}</h2>
        <h2>{degree}</h2>
        <h2>{`${eduStart}-${eduEnd}`}</h2>
      </div>
      <div className="resumeExp">
        <h1>Experience</h1>
        <h2>{company}</h2>
        <h2>{positionTitle}</h2>
        <h2>{`${expStart}-${expEnd}`}</h2>
        {/* <h2>{description}</h2> */}
      </div>
    </div>
  );
};

export default Resume;
