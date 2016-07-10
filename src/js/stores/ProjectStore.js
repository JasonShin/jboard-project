import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class ProjectStore extends EventEmitter {
    constructor() {
        super();
        //This is just an example
        this.projects = [
            {
                id: 11384714,
                text: "zzzfaft",
                complete: false,
            },
            {
                id: 12083012930,
                text: "crap",
                complete: false,
            }
        ];
    }

    createProject(text) {
        this.projects.push({
            id: Date.now(),
            text,
            complete: false,
        });

        this.emit("change");
    }

    getAll() {
        return this.projects;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_PROJECT":
                this.createProject(action.text);
                break;
            case "RECEIVE_PROJECT":
                this.projects = action.projects;
                this.emit("change");
                break;
        }
        console.log('ProjectStore received an action', action);
    }
}

const projectStore = new ProjectStore;
dispatcher.register(projectStore.handleActions.bind(projectStore));

window.projectStore = projectStore;
export default projectStore;