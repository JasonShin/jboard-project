import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Projects from './pages/ProjectsPage';
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Projects}></IndexRoute>
      <Route path="projects" name="projects" component={Projects}></Route>
    </Route>
  </Router>,
app);
