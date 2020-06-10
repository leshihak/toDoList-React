import React from '../../../node_modules/react';
import Button from '../../../node_modules/react-bootstrap/Button';
import ButtonGroup from '../../../node_modules/react-bootstrap/ButtonGroup';
import ToggleButton from '../../../node_modules/react-bootstrap/ToggleButton';
import FormControl from '../../../node_modules/react-bootstrap/FormControl';
import Form from '../../../node_modules/react-bootstrap/Form';

export const HeaderToDos = ({searchTitle, returnToDoList, showDone, allToDoList, showImportant}) => {
  const handleSearchTitle = (event) => {
    event.preventDefault();
    const search = document.getElementById('search-input').value;
    searchTitle(search);
    document.getElementById('formSearch').reset();
  }

  return (
    <div className='headerToDos'>
      <div>
        <Button variant="primary" disabled>Filter:</Button>{' '}
        <ButtonGroup toggle>
          <ToggleButton type="radio" name="radio" value="1" onClick={allToDoList}>All</ToggleButton>
          <ToggleButton type="radio" name="radio" value="2" onClick={showDone}>Done</ToggleButton>
          <ToggleButton type="radio" name="radio" value="3" onClick={showImportant}>Important</ToggleButton>
        </ButtonGroup>
      </div>
      <Form inline className='search' id='formSearch'>
        <FormControl type="text" placeholder="Search..." className=" mr-sm-2" id='search-input'/>
        <Button type="submit" onClick={handleSearchTitle}>Search</Button>
        <Button variant="dark" className='reset' onClick={returnToDoList}>Reset</Button>{' '}
      </Form>
    </div>
  )
}

export default HeaderToDos;