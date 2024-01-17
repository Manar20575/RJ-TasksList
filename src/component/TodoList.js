
import React, { useEffect, useState }from "react"
import CreateTask from "../modals/CreateTask";
import Card from "./Card"
const TodoList  = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    useEffect(()=>{
        //fetch 
        let arr = localStorage.getItem("taskList");
        if(arr){
            // convert to array obj
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
        //pass empety array to stop run and run only when restart page
    }, [])
    //delete task function 
    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1)
        //update local storage
        localStorage.setItem("taskList", JSON.stringify(tempList))
        //update my list of tasks
        setTaskList(tempList)
        //refresh page to appear the changes
        window.location.reload()
    }
    const updateListArray  = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    const toggle = () =>{
        setModal(!modal);
    }
    const saveTask = (taskObj) =>{
        let tempList = taskList;
        tempList.push(taskObj);
        //cuz without when restart it ll disappear and should fetch data from local storage
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(taskList);
        setModal(false);
        }
 return(
  <>
    <div className="title text-center justify-content-center">
        <h3 className="pt-3">Todo List</h3>
        <button className="btn add-task mt-2" onClick={() => setModal(true)}>create task</button>
    </div>
    <div className="tasks">
        {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index ={index} deleteTask = {deleteTask} updateListArray={updateListArray}/>)}
    </div>
    <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>

  </>
 );
}

export default TodoList;
