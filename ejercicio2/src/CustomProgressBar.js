import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, ProgressBar, InputGroup, FormControl } from "react-bootstrap";

const CustomProgressBar = () => {
  const [percentage, setPercentage] = useState(10); // Default percentage value is 10

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    const value = Math.max(0, Math.min(100, e.target.value)); // Ensure value is between 0 and 100
    setPercentage(value);
  };

  return (
    <div style={{ width: "50%", margin: "50px auto", textAlign: "center" }}>
      <h4>Progress bar</h4>
      <ProgressBar now={percentage} label={`${percentage}%`} animated variant="info" />
      <br />
      <InputGroup className="mb-3" style={{ marginTop: "20px" }}>
        <InputGroup.Text>Input Percentage:</InputGroup.Text>
        <FormControl
          type="number"
          min="0"
          max="100"
          value={percentage}
          onChange={handleInputChange}
        />
      </InputGroup>
    </div>
  );
};

export default CustomProgressBar;
