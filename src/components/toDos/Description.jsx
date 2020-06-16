import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export const Description = ({ handleChange }) => {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>Description of To Do:</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        onChange={handleChange}
        id="descriptionToDo"
        name="descriptionToDo"
        as="textarea"
        aria-label="Write description..."
      />
    </InputGroup>
  );
};

export default Description;
