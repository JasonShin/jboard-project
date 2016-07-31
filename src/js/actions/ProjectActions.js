import dispatcher from "../dispatcher";

export function createProject(text) {
    console.log("create project action dispatching!");
    dispatcher.dispatch({
        type: "CREATE_PROJECT",
        text
    });
}

export function deleteProject(id) {
    dispatcher.dispatch({
        type: "DELETE_PROJECT",
        id
    });
}
export function receiveProjects(data) {
    dispatcher.dispatch({
        type: "RECEIVE_PROJECTS",
        data
    });
}
