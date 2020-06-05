import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

export const ToDoList = ({toDos, deleteToDo, getImportantToDo, doneToDo}) => {
  const renderToDos = () => {
    return toDos.map(toDo => {
      return (
        <div className='toDo' key={toDo.id}>
          <input type="checkbox" name="" className="checkbox" id='checkbox' onClick={() => handleDoneToDo(toDo.name, toDo.description, toDo.id, toDo.done)}/>

          {showImportantBoolean ? 
          <img className='important-star'src="https://image.flaticon.com/icons/svg/1828/1828884.svg" onClick={() => onButton(toDo.id, false)} alt="" />
          :
          <img className='important-star'src="https://image.flaticon.com/icons/svg/1828/1828970.svg" onClick={() => {
            onButton(toDo.id, true);
            showImportant()
          }} 
          alt=""/>}
          
          <div style={{width: '50%'}}>
            <div className='toDoTitle'>{toDo.name}</div>
            <div className='description'>{toDo.description}</div>
          </div>
          <Button variant="outline-danger" onClick={() => handleDeleteToDo(toDo.id)}>Remove</Button>{' '}
        </div>
      )
    })
  }

  const [showImportantBoolean, setShowImportantBoolean] = useState(false);

  const showImportant = () => {
    setShowImportantBoolean(true);
  }

  const onButton = (id, showImportant) => {
    getImportantToDo(id, showImportant);
  }

  const handleDoneToDo = (name, description, id, done) => {
    doneToDo(name, description, id, done);
  }

  const handleDeleteToDo = id => {
    deleteToDo(id);
  }

  return (
    <div className='toDoListDiv'>
      {renderToDos()}
    </div>
  )
}

export default ToDoList;
