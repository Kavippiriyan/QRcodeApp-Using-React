import React, { Fragment, useState } from "react";




const TodoApp: React.FC = () => {

    const array = ["1", "2", "3"]
    return (
        <div >
            <h1>Welcome</h1>
            <h2>Task</h2>
            <input type="" placeholder="Enter anything"></input>
            <button type="submit">Submit</button>
            <ul>
                {array.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;