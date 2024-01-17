/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const EditTask = ({modal, toggle, updateTask, taskObj}) => {
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

    useEffect(()=>{
        setTaskName(taskObj.Name)
        setDesc(taskObj.desc)
    }, [])
    const handleUpdate = (e) =>{
        e.preventDefault()
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['desc'] = desc
        updateTask(tempObj)
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
            <Button color="primary" onClick={handleUpdate}>
                Update
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTask;