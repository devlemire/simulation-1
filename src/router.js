import React from "react";
import { Switch, Route } from "react-router-dom";

import Shelf from './components/Shelf/Shelf';
import Bin from './components/Bin/Bin';
import Detail from './components/Detail/Detail';

export default (
  <Switch>
    <Route component={ Shelf } path="/" exact />
    <Route component={ Bin } path="/bins" />
    <Route component={ Detail } path="/bin/:id" />
  </Switch>
)
