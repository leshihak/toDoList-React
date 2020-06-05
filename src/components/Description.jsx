import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

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