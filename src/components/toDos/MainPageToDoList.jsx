import React, {useState} from '../../../node_modules/react';
import HeaderToDos from './HeaderToDos';
import BottomToDos from './BottomToDos';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';
import AddNewToDo from './AddNewToDo';

export const MainPageToDoList = () => {
  const [arrayToDos, setArrayToDos] = useState([]);
  const [showComponent, setShowComponent] = useState(false); 
  const [arrayFound, setArrayFound] = useState([]); 
  const [arrayDone, setArrayDone] = useState([]); 
  const [arrayImportant, setArrayImportant] = useState([]); 

  const getToDo = (nameToDo, descriptionToDo) => {
    setArrayToDos([...arrayToDos, {name: nameToDo, description: descriptionToDo, important: false, done: false, id: uuidv4()}]);
  }

  const searchTitle = value => {
    const found = arrayToDos.filter(el => el.name === value);
    setArrayFound(found);
  }

  const showDone = () => {
    const arrayFoundDone = arrayToDos.filter(el => el.done === true);
    setArrayDone(arrayFoundDone)
  }

  const showImportant = () => {
    const arrayFoundImportant = arrayToDos.filter(el => el.important=== true);
    setArrayImportant(arrayFoundImportant)
  }

  const onButtonClick = () => {
    setShowComponent(true);
  }

  const onButtonClose = () => {
    setShowComponent(false);
  }

  const deleteToDo = id => {
    setArrayToDos([...arrayToDos.filter(el => el.id !== id)]);
  }

  const deleteAllToDo = () => {
    setArrayToDos([]);
  }

  const getImportantToDo = (id, showImportant) => {
    const changedArrayToDos = arrayToDos.map(el => {
      if(el.id === id ) el.important = showImportant;
      return el
    });
    setArrayToDos(changedArrayToDos);
  }

  const doneToDo = (id, done) => {
    const foundDone = arrayToDos.map(el => {
      if(el.id === id) el.done = done
      return el
    }) 
    setArrayToDos(foundDone);
  }

  const returnToDoList = () => {
    setArrayFound([]);
    document.getElementById('formSearch').reset();
  }

  const allToDoList = () => {
    setArrayDone([]);
    setArrayImportant([]);
  }

  return (
    <div>
      <HeaderToDos searchTitle={searchTitle} returnToDoList={returnToDoList} showDone={showDone} allToDoList={allToDoList} showImportant={showImportant}/>

      {((arrayFound.length === 0) && (arrayDone.length === 0) && (arrayImportant.length === 0)) ?  <ToDoList deleteToDo={deleteToDo} getImportantToDo={getImportantToDo} toDos={arrayToDos} doneToDo={doneToDo}/> : null}

      {arrayFound.length !== 0 ? <ToDoList deleteToDo={deleteToDo} getImportantToDo={getImportantToDo} toDos={arrayFound} doneToDo={doneToDo}/> : null}

      {arrayDone.length !== 0 ? <ToDoList deleteToDo={deleteToDo} getImportantToDo={getImportantToDo} toDos={arrayDone} doneToDo={doneToDo}/> : null}

      {arrayImportant.length !== 0 ? <ToDoList deleteToDo={deleteToDo} getImportantToDo={getImportantToDo} toDos={arrayImportant} doneToDo={doneToDo}/> : null}

      <BottomToDos onButtonClick={onButtonClick} deleteAllToDo={deleteAllToDo}/>
      {showComponent ? <AddNewToDo onButtonClose={onButtonClose} getToDo={getToDo} /> : null}
    </div>
  )
}

export default MainPageToDoList;