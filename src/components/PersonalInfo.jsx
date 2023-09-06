import React from "react";
import InputGroup from "./InputGroup";

const PersonalInfo = ({
  onChange,
  fullName,
  email,
  phoneNumber,
  title,
  address,
}) => {
  return (
    <form className="personalInfo">
      <h2>Personal Details</h2>
      <h3>Name</h3>
      <InputGroup
        id="full-name"
        type="text"
        placeholder="Enter your name"
        value={fullName}
        onChange={onChange}
        data-key="fullName"
      />
      <h3>Title</h3>
      <InputGroup
        id="title"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={onChange}
        data-key="title"
      />
      <h3>Email</h3>
      <InputGroup
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={onChange}
        data-key="email"
      />
      <h3>Phone Number</h3>
      <InputGroup
        id="phone-number"
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={onChange}
        data-key="phoneNumber"
      />
      <h3>Address</h3>
      <InputGroup
        id="address"
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={onChange}
        data-key="address"
      />
    </form>
  );
};

export default PersonalInfo;
