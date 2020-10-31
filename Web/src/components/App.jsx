import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/NavBar";
import TaskList from "./tasks/TaskList";

export default function App() {

    return (
        <div>
            <NavBar>
                <NavBar.Brand href="/">
                    Estimate
                </NavBar.Brand>
            </NavBar>
            <Container fluid>
                <TaskList />
            </Container>
        </div>
    );
}


