import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faDice } from '@fortawesome/free-solid-svg-icons'
import AppHeader from "./app-header/AppHeader";
import TaskList from "./tasks/TaskList";
import Account from "./account/Account";

export default function App() {
    library.add(faUser, faDice);

    return (
        <Router>
            <AppHeader />
            <Container fluid>
                <Switch>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/" exact>
                        <TaskList />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}


