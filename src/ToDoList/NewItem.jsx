import React, { useState } from "react";

const NewItem = ({ list, setList }) => {

    const [newToDo, setNewToDo] = useState("");

    const inputHandler = (e) => {
        setNewToDo(e.target.value);
    }
    const formHandler = (e) => {
        e.preventDefault();
        setList([...list, {
            "text": newToDo,
            "completed": false
        }])
        setNewToDo("")
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" value={newToDo} onChange={inputHandler} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default NewItem;