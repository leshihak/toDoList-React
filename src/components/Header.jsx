import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

export const Header = ({searchTitle, returnToDoList}) => {
  const handleSearchTitle = (event) => {
    event.preventDefault();
    const search = document.getElementById('search-input').value;
    searchTitle(search);
    document.getElementById('formSearch').reset();
  }

  return (
    <div className='header'>
      <header className='header-title'>To Do List</header>
      <div>
        <Button variant="primary" disabled>Filter:</Button>{' '}
        <ButtonGroup toggle>
          <ToggleButton type="radio" name="radio" value="1">All</ToggleButton>
          <ToggleButton type="radio" name="radio" value="2">Done</ToggleButton>
          <ToggleButton type="radio" name="radio" value="3">Important</ToggleButton>
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

export default Header;