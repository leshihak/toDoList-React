import React, {useState} from 'react';
import Header from './Header';
import Bottom from './Bottom';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';
import AddNewToDo from './AddNewToDo';

export const Main = () => {
  const [arrayToDos, setArrayToDos] = useState([]);
  const [showComponent, setShowComponent] = useState(false); 
  let [arrayFound, setArrayFound] = useState([]); 

  const getToDo = (nameToDo, descriptionToDo) => {
    setArrayToDos([...arrayToDos, {name: nameToDo, description: descriptionToDo, important: false, done: false, id: uuidv4()}]);
  }

  const searchTitle = (value) => {
    const found = arrayToDos.filter(el => el.name === value);
    console.log(found);
    setArrayFound(found);
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
    const foundImportant = arrayToDos.map(el => {
      if(el.id === id) el.important = true
      else el.important = false
      return el
    }) 
    console.log(foundImportant) 
  }

  // const doneToDo = (name, description, id, done) => {
  //   console.log(name, description, id, done);

  //   // if(done === false) alert('no')
  //   // else alert('yes')
    
  //   // const checkbox = document.getElementById('checkbox');
    
  //   // const foundDone = arrayToDos.map(el => {
  //   //   console.log(el);
  //   //   if(el.id === id) {
  //   //     alert('yes')
  //   //     el.done = true
  //   //   }
  //   //   else {
  //   //     alert('no')
  //   //     el.done = false
  //   //   }
      
      
  //   //   return el
  //   // }) 
  //   // console.log(foundDone) 
  // }

  const returnToDoList = () => {
    setArrayFound([]);
  }
  
  return (
    <div className='container'>
      <Header searchTitle={searchTitle} returnToDoList={returnToDoList}/>

      {arrayFound.length !== 0 ? 
      <ToDoList deleteToDo={deleteToDo} getImportantToDo={getImportantToDo} toDos={arrayFound}/> :
      <ToDoList deleteToDo={deleteToDo} getImportantToDo={getImportantToDo} toDos={arrayToDos}/>}

      <Bottom onButtonClick={onButtonClick} deleteAllToDo={deleteAllToDo}/>
      {showComponent ? <AddNewToDo onButtonClose={onButtonClose} getToDo={getToDo} /> : null}
    </div>
  )
}

export default Main;