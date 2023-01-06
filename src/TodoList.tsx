import React from "react";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const TodoList = (props: TodoListPropsType) => {
    /*let tasksList;
    if (props.tasks.length === 0) {
        tasksList = <span>Your tasks list is empty</span>
    } else {
        tasksList = props.tasks.map((el: TaskType) => {
            return (
                <li>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                </li>
            )
        })
    }*/
    let tasksList = props.tasks.length ? props.tasks.map((el: TaskType) => {
        return (
            <li>
                <input type="checkbox" checked={el.isDone}/>
                <span>{el.title}</span>
            </li>
        )
    }) : <span>Your tasks list is empty</span>
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>{tasksList}</ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}