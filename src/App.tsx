import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";
import {v1} from "uuid";
import {isDisabled} from "@testing-library/user-event/dist/utils";

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const todoList_1: string = "What to learn?"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: false}
    ])

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
        console.log(tasks)
    }

    const addTask =(title: string)=>{
        if (title===''){isDisabled(null)}
        else{const newTask: TaskType = {
            id: v1() ,
            title: title,
            isDone: false
        }
        setTasks([newTask,...tasks])}
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
                addTask={addTask}
            />
        </div>
    );
}

export default App;
