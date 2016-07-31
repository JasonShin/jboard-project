import * as ProjectActions from '../actions/ProjectActions';

export default class ProjectAPI {
    constructor() {

    }

    getProjectData() {
        var data = JSON.parse(localStorage.getItem('project'));
        ProjectActions.receiveProjects(data);
    }
}