import React from '../../../node_modules/react';
import Button from '../../../node_modules/react-bootstrap/Button';


export const BottomToDos = ({onButtonClick, deleteAllToDo}) => {
  return (
    <div className='bottom-buttons'>
      <Button variant="primary" onClick={onButtonClick}>Create new To Do</Button>{' '}
      <Button variant="dark" onClick={deleteAllToDo}>Delete all To Do</Button>{' '}
    </div>
  );
}

export default BottomToDos;