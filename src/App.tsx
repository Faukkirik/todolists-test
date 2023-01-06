import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

function App() {
    const todoList_1: string = "What to learn?"
    const todoList_2: string = "What to bue?"
    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false}
    ]
    const tasks_2: Array<TaskType> = [
        {id: 1, title: "fish", isDone: true},
        {id: 2, title: "yo", isDone: false},
        {id: 3, title: "lol", isDone: true}
    ]
    return (
        <div className="App">
            <TodoList title={todoList_1} tasks={tasks_1}/>
            <TodoList title={todoList_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
