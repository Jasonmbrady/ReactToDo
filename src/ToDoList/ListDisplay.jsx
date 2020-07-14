import React from "react";

const ListDisplay = ({ list, deleteHandler, clickHandler }) => {

    const listSort = (item, idx) => {
        if (item.isComplete) {
            return (
                <div key={idx} className="completeItem" >
                    <h1 onClick={(e) => clickHandler(idx)}>{item.text}</h1>
                    <button onClick={(e) => deleteHandler(idx)}>Delete</button>
                </div>
            )
        } else {
            return (
                <div key={idx} className="listItem">
                    <h1 onClick={(e) => clickHandler(idx)}>{item.text}</h1>
                </div>
            )

        }
    }

    return (
        <div>
            {
                list.map(listSort)
            }
        </div>
    );
}

export default ListDisplay;