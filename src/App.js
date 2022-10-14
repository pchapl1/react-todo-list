import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./App.css";

const App = () => {

  const [toDoList, setToDoList] = useState([

      {
        title: "Implement ToDo List",
        priority: "High",
        isComplete: false,
        description: "Implement the todo list application",
        creationDate: new Date().toString(),
        completedDate: null
      }

  ])

  const handleAddToDo = (newToDo) => {
    setToDoList([...toDoList, newToDo])

  }

  const handleUpdateToDo = (toDo) => {

    // copy the to do list
    const toDoListCopy = [...toDoList]

    // find the to do item in the copy
    // console.log(toDoListCopy)

  }


	return (
		<div className="App-header">
      <ToDoForm  handleAddToDo = {handleAddToDo}/>
      <ToDoListContainer toDoList = {toDoList} handleUpdateToDo={handleUpdateToDo} />
		</div>
	);
}


const ToDoListContainer = (props) => {

  return (
    <div className="toDoListContainer">
      <h1>ToDo List</h1>
      {props.toDoList.map((toDo, index)=>{
        return <ToDoListItem handleUpdateToDo={props.handleUpdateToDo} toDo={toDo} key={index}/>
      })}

    </div>
  )
}

const ToDoListItem = (props) => {
  console.log(props.index)
  const chooseToDo = ()=>{

  }

  return (
    <div  className="toDoListItem" key={props.index}>
      <h2>{props.toDo.title}</h2>
      <p>Priority: {props.toDo.priority}</p>
      <p>Creation Date: {props.toDo.creationDate}</p>
      {props.toDo.completedDate && 
        <p>Completed Date: {props.toDo.completedDate}</p>
      }
      <p>Description: {props.toDo.description}</p>
      <Button onClick={chooseToDo}>Complete To Do</Button>
    </div>
  )
}

const ToDoForm = (props) => {

  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("")
  const [description, setDescription] = useState("")


  const handleTitle = (e)=> {
    setTitle(e.target.value)
  }

  const handlePriority = (e) => {
    setPriority(e.target.value)
  }

  const handleDescription = (e) => {
    console.log(e.target.value)
    setDescription(e.target.value)
  }

  const createNewToDo = ()=> {
    
    const newToDo = {
      title,
      priority,
      description,
      isComplete: false,
      creationDate: new Date().toString(),
      completionDate: null
    }


    props.handleAddToDo(newToDo)

  }


  return (
    <div className="toDoForm">
      <h3>Add new ToDo item</h3>
      <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Title: </Form.Label>
        <Form.Control name="title" type="text" onChange={handleTitle} placeholder="Enter Title" />
        <Form.Label>Priority: </Form.Label>
        <Form.Select name="priority"  onChange={handlePriority} placeholder="Enter Priority">
          <option value=""></option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Form.Select>
        <Form.Label>Description: </Form.Label>
        <Form.Control type="text" name="description" onChange={handleDescription} placeholder="Enter Description" />
        <Button onClick={createNewToDo}>Submit</Button>
      </Form.Group>
      </Form>

    </div>
  )
}

export default App;
