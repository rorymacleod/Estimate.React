import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
    const [tasks, setTasks] = useState(defaultTasks);

    return (
        <div>
            <Table size="sm" hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Best</th>
                        <th>Likely</th>
                        <th>Worst</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map(task => (
                        <TaskListItem key={task.id} task={task} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

const defaultTasks = [
    {
        id: 1,
        name: "Add Redux to the app",
        best: 1,
        likely: 2,
        worst: 4
    },
    {
        id: 2,
        name: "Task list with dummy data",
        best: 0.5,
        likely: 1,
        worst: 2
    },
    {
        id: 3,
        name: "Enter estimates",
        best: 4,
        likely: 12,
        worst: 20
    },
    {
        id: 4,
        name: "Calculate expected estimate",
        best: 0.5,
        likely: 1,
        worst: 3
    },
    {
        id: 5,
        name: "Calculate totals",
        best: 0.5,
        likely: 2,
        worst: 3
    },
    {
        id: 6,
        name: "Calculate standard deviation",
        best: 0.5,
        likely: 0.5,
        worst: 1
    },
    {
        id: 7,
        name: "Calculate confidence",
        best: 1,
        likely: 2,
        worst: 4
    },
    {
        id: 8,
        name: "Add new tasks",
        best: 0.5,
        likely: 1.5,
        worst: 3.0
    },
    {
        id: 9,
        name: "Login with Google account",
        best: 1,
        likely: 2,
        worst: 6
    },
    {
        id: 10,
        name: "Save data to Firebase",
        best: 6,
        likely: 12,
        worst: 24
    },
    {
        id: 11,
        name: "Load data from Firebase",
        best: 1,
        likely: 2,
        worst: 6
    },
    {
        id: 12,
        name: "Delete tasks",
        best: 1,
        likely: 2,
        worst: 3
    }
];
