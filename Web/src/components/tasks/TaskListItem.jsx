import React from "react";

export default function TaskListItem(props) {
    const task = props.task;

    return (
        <tr>
            <td>{task.name}</td>
            <td>{task.best}</td>
            <td>{task.likely}</td>
            <td>{task.worst}</td>
        </tr>
    );
}