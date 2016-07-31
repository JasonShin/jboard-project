import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Projects from './pages/ProjectsPage';
import Project from './pages/SingleProjectPage';
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

//Development Data
import ProjectAPI from './utils/ProjectAPI';
import DevData from './data/DevData';

const data = new DevData();
const projectAPI = new ProjectAPI();

projectAPI.getProjectData();

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Projects}></IndexRoute>
        <Route path="projects" name="projects" component={Projects}></Route>
        <Route path="project/:projectId" name="project" component={Project}></Route>
    </Route>
  </Router>,
app);
