import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Contacts from './pages/Contacts';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/contacts" component={Contacts} />
                <Route path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    );
}