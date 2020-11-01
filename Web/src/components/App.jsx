import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import TaskList from "./tasks/TaskList";

export default function App() {

    return (
        <div>
            <Navbar>
                <Navbar.Brand href="/">
                    Estimate
                </Navbar.Brand>
            </Navbar>
            <Container fluid>
                <TaskList />
            </Container>
        </div>
    );
}


