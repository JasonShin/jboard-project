import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class ProjectStore extends EventEmitter {

    projects = [];

    constructor() {
        super();
    }

    createProject(text) {
        this.projects.push({
            id: Date.now(),
            text,
            complete: false
        });

        this.emit("change");
    }

    getProjects() {
        this.projects = action.projects;
        this.emit("change");
    }

    receiveProjects(data) {
        data.forEach((project) => {
            this.projects.push(project);
        });
    }

    getAll() {
        return this.projects;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_PROJECT":
                console.log("invoked create project action handle!!");
                this.createProject(action.text);
                break;
            case "RECEIVE_PROJECTS":
                this.receiveProjects(action.data);
                break;
        }
        console.log('ProjectStore received an action', action);
    }
}

const projectStore = new ProjectStore;
dispatcher.register(projectStore.handleActions.bind(projectStore));

window.projectStore = projectStore;
export default projectStore;