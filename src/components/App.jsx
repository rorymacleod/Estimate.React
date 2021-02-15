import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import TaskList from "./tasks/TaskList";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function App() {

    library.add(faUser, faDice);

    return (
        <div>
            <Navbar variant="light" bg="light" className="justify-content-between">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon="dice" className="mr-1" />
                    Estimate
                </Navbar.Brand>
                <Button variant="outline-primary" title="Sign in">
                    <FontAwesomeIcon icon="user" />
                </Button>
            </Navbar>
            <Container fluid>
                <TaskList />
            </Container>
        </div>
    );
}


