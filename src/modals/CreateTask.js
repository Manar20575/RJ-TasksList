import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [desc, setDesc] = useState('');
    const handleChange = (e) =>{
        // const name  = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target;
        if(name === "taskName"){
            setTaskName(value);
        }
        else{
            setDesc(value);
        }
    }
    const hsave = () =>{
        let taskObj = {}
        taskObj['Name'] = taskName;
        taskObj['desc'] = desc;
        save(taskObj);
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Task Name</label>
                        <input type = "text" className='form-control' value={taskName} onChange={handleChange} name='taskName'/>
                    </div>
                    <div className='form-group'>
                        <label>Task Disc</label>
                        <textarea rows = "4" className='form-control' value={desc} onChange={handleChange} name='desc'></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={hsave}>
                Create
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;