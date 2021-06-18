import React, { useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Update = ({id,name}) => {
    const [newTask, setNewTask] = useState(name)
    const dispatch = useDispatch()
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateFun = () => {
    if(newTask.trim())
      dispatch({ type: "update", payload: { id:id, newTask:newTask } })
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
Edit      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
              <Form.Control type="text" value={newTask} onChange={((e) => setNewTask(e.target.value))}
              placeholder="Edit.."/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
                  <Button onClick={updateFun} variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Update
