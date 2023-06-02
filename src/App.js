import React, {useEffect, useRef, useState} from "react"
import { nanoid } from "nanoid"
import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButton from "./components/FilterButton"
import usePrevious from "./usePrevious"

// Defined outside coz this is static info
const FILTER_MAP = {
    all: () => true,
    active: (task) => task.completed === false,
    completed: (task) => task.completed === true,
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

export default function App(props) {
    const [tasks, setTasks] = useState(props.tasks)
    const [filter, setFilter] = useState("all")
    const listHeadingRef = useRef(null)

    function addTask(name) {
        const newTask = {id: `todo-${nanoid()}`, name, completed: false}
        setTasks([...tasks, newTask])
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task) => {
            return (task.id === id ? { ...task, completed: !task.completed} : task) 
        })
        setTasks(updatedTasks)
    }

    function editTask(id, newTaskName) {
        const editedTaskList = tasks.map((task) => {
            return (task.id === id ? { ...task, name: newTaskName} : task)
        })
        setTasks(editedTaskList)
    }

    function deleteTask(id) {
        console.log(id)
        const updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedTasks)
    }

    const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
        <Todo 
            id={task.id} 
            name={task.name} 
            completed={task.completed} 
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
        />
    ))

    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton 
            key={name} 
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ))

    const tasksNoun = taskList.length === 1 ? "task" : "tasks"
    const headingText = `${taskList.length} ${tasksNoun}`
    
    const prevTaskLength = usePrevious(tasks.length)

    useEffect(() => {
        if (tasks.length < prevTaskLength) 
            listHeadingRef.current.focus()
    }, [prevTaskLength])

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTask={addTask}/>
            <div className="filters btn-group stack-exception">
                {filterList}
            </div>
            <h2 
                id="list-heading" tabIndex="-1" ref={listHeadingRef}>
                {headingText}
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {taskList}
            </ul>
        </div>
    )
}
