import React, {useState} from "react"
import { nanoid } from "nanoid"
import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButton from "./components/FilterButton"

export default function App(props) {
    const [tasks, setTasks] = useState(props.tasks)

    function addTask(name) {
        const newTask = {id: `todo-${nanoid()}`, name, completed: false}
        setTasks([...tasks, newTask])
    }

    function toggleTaskCompleted(id) {
        console.log(tasks[0])
    }

    const taskList = tasks.map((task) => {
        return <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}
                     toggleTaskCompleted={toggleTaskCompleted}
                />
    })

    const buttonList = props.buttons.map((button) => {
        return <FilterButton id={button.id} name={button.name}/>
    })

    const tasksNoun = taskList.length === 1 ? "task" : "tasks"
    const headingText = `${taskList.length} ${tasksNoun} remaining`

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTask={addTask}/>
            <div className="filters btn-group stack-exception">
                {buttonList}
                {/*<FilterButton />*/}
                {/*<FilterButton />*/}
                {/*<FilterButton />*/}
            </div>
            <h2 id="list-heading">{headingText}</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {taskList}
            </ul>
        </div>
    )
}
