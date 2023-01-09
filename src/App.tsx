import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const todoList_1: string = "What to learn?"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false}
    ])

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId))
        console.log(tasks)
    }
    const [filter, setFilter] = useState<FilterValuesType>("all")
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    const getFilterTaskForRender = (tasks: Array<TaskType>, filter: FilterValuesType): Array<TaskType> => {
        if (filter === "active") {
            return tasks.filter(task => task.isDone === false)
        } else if (filter === "completed") {
            return tasks.filter(task => task.isDone === true)
        } else {
            return tasks
        }
    }
    const filteredTasksForRender = getFilterTaskForRender(tasks, filter)
    return (
        <div className="App">
            <TodoList
                title={todoList_1}
                tasks={filteredTasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
