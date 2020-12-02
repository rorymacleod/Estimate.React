import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AppHeader() {
    const history = useHistory();

    function onAccountButtonClick() {
        history.push("/account");
    }

    return (
        <Navbar variant="light" bg="light" className="justify-content-between">
            <Navbar.Brand href="/">
                <FontAwesomeIcon icon="dice" className="mr-1" title="Not guaranteed to be better than rolling dice." />
                Estimate
            </Navbar.Brand>
            <Button variant="outline-primary" title="Account" onClick={onAccountButtonClick}>
                <FontAwesomeIcon icon="user" />
            </Button>
        </Navbar>
    );
}


