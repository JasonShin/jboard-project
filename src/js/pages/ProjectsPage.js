import React from "react";

import Project from '../components/Project';
import ProjectStore from '../stores/ProjectStore';
import * as ProjectActions from '../actions/ProjectActions';

export default class ProjectsPage extends React.Component {

    constructor() {
        super();
        this.getProjects = this.getProjects.bind(this);
        this.state = {
            projects: ProjectStore.getAll()
        }

    }

    //Bind events when component is mount
    componentWillMount() {
        ProjectStore.on("change", this.getProjects);
    }

    //Unbound them safely
    componentWillUnmount() {
        ProjectStore.removeListener("change", this.getProjects);
    }

    //Event callback for getting all projects
    getProjects() {
        console.log("getting project from store! method");
        ProjectStore.on("change", () => {
            this.setState({
                projects: ProjectStore.getAll()
            });
        });
    }

    //Render
    render() {

        const {projects} = this.state;

        const TodoComponents = projects.map((project) => {
            return <Project key={project.id} {...project}/>
        });

        return (
            <div class="row">
                <h1>Projects!</h1>
                {TodoComponents}
            </div>
        );
    }
}
