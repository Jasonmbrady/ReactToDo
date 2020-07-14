import React, { useState } from "react";
import ListDisplay from "./ListDisplay";
import "./ToDoStyle.css"
import NewItem from "./NewItem";

const ToDoList = () => {
    const [list, setList] = useState([
        {
            "text": "Sample Item",
            "isComplete": true
        },
        {
            "text": "Another Sample",
            "isComplete": true
        }
    ])

    const deleteHandler = (idx) => {
        let newList = list.filter((val, index) => index !== idx)
        setList(newList);

    }

    const clickHandler = (idx) => {
        let toggle = list[idx];
        toggle.isComplete = !toggle.isComplete;
        setList([...list.slice(0, idx), toggle].concat(list.slice(idx + 1)))
    }
    return (
        <div>
            <ListDisplay list={list} deleteHandler={deleteHandler} clickHandler={clickHandler} />
            <NewItem list={list} setList={setList} />
        </div>
    );
}

export default ToDoList;