import React from "react";

import Project from '../components/Project';
import ProjectStore from '../stores/ProjectStore';
import * as ProjectActions from '../actions/ProjectActions';

import '../../css/global.scss';

export default class ProjectsPage extends React.Component {

    state = {
        projects: ProjectStore.getAll(),
        projectName: null
    };

    constructor() {
        super();
        this.getProjects = this.getProjects.bind(this);
    }

    //Invoked after component mounted
    componentDidMount() {
        console.log("component did mount");
        ProjectStore.on("change", this.getProjects);
    }

    //Invoked before component mounted
    componentWillMount() {
        console.log("component will mount");
        //ProjectStore.on("change", this.getProjects);
    }

    //Unbound them safely
    componentWillUnmount() {
        ProjectStore.removeListener("change", this.getProjects);
    }

    //Event callback for getting all projects
    getProjects() {
        console.log("getting project from store! method");

        this.setState({
            projects: ProjectStore.getAll()
        });
    }

    handleProjectNameChange(event) {
        console.log("updating");
        this.setState({projectName: event.target.value});

    }

    onCreateClick() {
        console.log("create clicked");
        ProjectActions.createProject(this.state.projectName);
    }


    //Render
    render() {

        const {projects} = this.state;

        const ProjectComponents = projects.map((project) => {
            return <Project key={project.id} {...project}/>
        });

        return (
            <div id="ProjectsContainer" class="row">
                <label>{this.state.projectName}</label><br />
                <input type="text" onChange={this.handleProjectNameChange.bind(this)} />
                <input type="submit" onClick={this.onCreateClick.bind(this)} />
                <h1>Projects!</h1>
                {ProjectComponents}
            </div>
        );
    }

}
