import React , {useState} from 'react';
import EditTask from '../modals/EditTask'
const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const[modal, setModal] = useState(false);

    // colors array to control color of items
    const colors = [
        {
            primaryColor:"#941474",
            secoundaryColor:"#94147470"
        },
        {
            primaryColor:"#9b063c",
            secoundaryColor:"#9b063d70"
        },
        {
            primaryColor:"#bd12c0",
            secoundaryColor:"#bd12c070"
        },
    ]
    const hanleDelete =() =>{
        deleteTask(index)
    }
    const toggle = () => {
        setModal(!modal)
    }
    const updateTask = (obj) =>{
        updateListArray(obj, index)
    }
    return (
        <div class="task-item ttb-effect">
            <hr className='m-0 mb-3' style={{"background-color":colors[index%3].primaryColor}}/>
            <span class="task-title text-left m-3 " style={{"background-color":colors[index%3].secoundaryColor}}>{taskObj.Name}</span>
            <p className='m-3 p-2'>{taskObj.desc}</p>
            <div className='icons'>
            <i class="fa-regular fa-pen-to-square m-1" style={{"color":colors[index%3].primaryColor, "cursor": "pointer"}} onClick={() => setModal(true)}></i>
            <i class="fa-solid fa-trash m-1" style={{"color":colors[index%3].primaryColor, "cursor": "pointer"}} onClick={hanleDelete}></i>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;