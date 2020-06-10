import React from '../../../node_modules/react';
import InputGroup from '../../../node_modules/react-bootstrap/InputGroup';
import FormControl from '../../../node_modules/react-bootstrap/FormControl';

export const Description = ({handleChange}) => {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>Description of To Do:</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl 
        onChange={handleChange}
        id='descriptionToDo'
        name='descriptionToDo'
        as="textarea" 
        aria-label="Write description..." 
      />
    </InputGroup>
  )
}

export default Description;