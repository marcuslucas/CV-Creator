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
    <form className="section personalInfo">
      <h2>Name</h2>
      <InputGroup
        id="full-name"
        type="text"
        placeholder="Enter your name"
        value={fullName}
        onChange={onChange}
        data-key="fullName"
      />
      <h2>Title</h2>
      <InputGroup
        id="title"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={onChange}
        data-key="title"
      />
      <h2>Email</h2>
      <InputGroup
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={onChange}
        data-key="email"
      />
      <h2>Phone Number</h2>
      <InputGroup
        id="phone-number"
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={onChange}
        data-key="phoneNumber"
      />
      <h2>Address</h2>
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
