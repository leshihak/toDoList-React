import React from '../../../node_modules/react';
import InputGroup from '../../../node_modules/react-bootstrap/InputGroup';
import FormControl from '../../../node_modules/react-bootstrap/FormControl';

export const Description = () => {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>Description of To Do:</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl 
        id='descriptionToDo'
        as="textarea" 
        aria-label="Write description..." 
      />
    </InputGroup>
  )
}

export default Description;