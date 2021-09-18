import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React from "react";
import { useState } from "react";
import "./styles.css";
const PhoneNo = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <PhoneInput
        placeholder="Enter phone number"
        defaultCountry="IN"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default PhoneNo;
