import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";
import {isDisabled} from "@testing-library/user-event/dist/utils";


type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")

    let tasksList = props.tasks.length ? props.tasks.map((el: TaskType) => {
        const removeTask = () => props.removeTask(el.id)
        return (
            <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/>
                <span>{el.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    }) : <span>Your tasks list is empty</span>

    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTask()
    /*const onClickHandlerAll = () => props.changeFilter("all")
    const onClickHandlerActive = () => props.changeFilter("active")
    const onClickHandlerCompleted = () => props.changeFilter("completed")*/
    const handlerCreator = (filter: FilterValuesType) =>{
        return ()=> props.changeFilter(filter)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type='text'
                       onKeyDown={onKeyDownHandler}
                       value={title}
                       onChange={onChangeHandler}/>
                <button onClick={() => {if(title===''){isDisabled(null)}
                    else {props.addTask(title)}
                    setTitle("")
                }}>+
                </button>
            </div>
            <ul>{tasksList}</ul>
            <div>
                <button onClick={handlerCreator("all")}>All</button>
                <button onClick={handlerCreator("active")}>Active</button>
                <button onClick={handlerCreator("completed")}>Completed</button>
            </div>
        </div>
    )
}