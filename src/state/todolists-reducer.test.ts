import {addTodolistAC, removeTodolistAC, TodolistsReducer} from './todolists-reducer';
import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from '../App';

test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = TodolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(startState.length).toBe(1);
    expect(startState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    //const endState = TodolistsReducer(startState, { type: 'ADD-TODOLIST', title: newTodolistTitle})
    const endState = TodolistsReducer(startState, addTodolistAC(newTodolistTitle))

    expect(startState.length).toBe(3);
    expect(startState[2].title).toBe(newTodolistTitle);
});
