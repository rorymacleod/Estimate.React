import React from "react";
import _ from "lodash";

export default function TaskListItem(props) {
    const task = props.task;
    const selected = props.selected;

    function handleRowClick(e) {
        e.task = task;
        _.invoke(props, "onClick", e);
    }

    return (
        <tr className={selected ? "table-primary" : null} onClick={handleRowClick}>
            <td>{task.name}</td>
            <td>{task.best}</td>
            <td>{task.likely}</td>
            <td>{task.worst}</td>
        </tr>
    );
}