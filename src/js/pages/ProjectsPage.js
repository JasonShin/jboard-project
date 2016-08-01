import React from "react";

import Project from '../components/Project';
import ProjectStore from '../stores/ProjectStore';
import * as ProjectActions from '../actions/ProjectActions';


export default class ProjectsPage extends React.Component {

    state = {
        projects: ProjectStore.getAll()
    };

    constructor() {
        super();
        this.getProjects = this.getProjects.bind(this);
    }

    //Invoked after component mounted
    componentDidMount() {
        ProjectStore.on("change", this.getProjects);


    }
    //Unbound them safely
    componentWillUnmount() {
        ProjectStore.removeListener("change", this.getProjects);
    }

    //Event callback for getting all projects
    getProjects() {
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

    createProjectComponents() {
        return projects.map((project) => {
            return (<Project  />);
        });
    }

    //Render
    render() {

        const {projects} = this.state;

        const ProjectComponents = projects.map((project) => {
            return <Project key={project.id} {...project}/>
        });

        return (
            <div id="ProjectsContainer" class="row">
                <h1>Projects!</h1>

                <div class="ProjectsDraggableContainer">
                    {ProjectComponents}
                </div>
            </div>
        );
    }

}
