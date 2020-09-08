import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/newcontact" component={NewContact} />
                <Route path="/editcontact/:id" component={EditContact} />
            </Switch>
        </BrowserRouter>
    );
}