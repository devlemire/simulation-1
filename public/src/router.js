import React from "react";
import { Switch, Route } from "react-router-dom";

import Shelves from './components/Shelves/Shelves';
import Bins from './components/Bins/Bins';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';

export default (
  <Switch>
    <Route component={ Shelves } path="/" exact />
    <Route component={ Bins } path="/bins/:id" />
    <Route component={ Detail } path="/bin/:id" />
    <Route component={ Create } path="/create/:id" />
  </Switch>
)
