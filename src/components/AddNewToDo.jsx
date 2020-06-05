import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Description from './Description';

export const AddNewToDo = ({getToDo, onButtonClose}) => {  
  const [showDescription, setShowDescription] = useState(false);

  const onButtonSwitch = () => {
    const customSwitch = document.getElementById('custom-switch');
    customSwitch.checked ? setShowDescription(true) : setShowDescription(false); 
  }

  const handleGetToDo = () => {
    const nameToDo = document.getElementById('nameToDo').value;
    const descriptionToDo = document.getElementById('descriptionToDo');
    getToDo(nameToDo, descriptionToDo ? descriptionToDo.value : null);
    onButtonClose();
  }

  return (
    <div className='addNewToDo'>
      <Modal.Dialog>
        <div className='toDoModalForm'>
          <Modal.Header>
            <Modal.Title>Create a new To Do</Modal.Title>
          </Modal.Header>

          <div className='toDoForm'>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Name of To Do:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id='nameToDo'
                aria-label="Write your To Do..."
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>

            {showDescription ? <Description /> : null}
            
            <Form className='toDoFormCheck'>
              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Show description"
                onClick={() => onButtonSwitch()}
              />
            </Form>
          </div>
          

          <Modal.Footer>
            <Button variant="secondary" onClick={onButtonClose}>Close</Button>
            <Button variant="primary" onClick={handleGetToDo}>Save To Do</Button>
          </Modal.Footer>
        </div>
        
      </Modal.Dialog>

      <div className='opacityDiv'></div>
    </div>
  )
}

export default AddNewToDo;