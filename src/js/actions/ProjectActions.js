import dispatcher from "../dispatcher";

export function createProject(text) {
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

export function reloadProjects() {

    dispatcher.dispatch({type: "FETCH_PROJECTS"});
    setTimeout(() => {
        dispatcher.dispatch({type: "RECEIVE_PROJECTS", projects: [
            {
                id: 11384714,
                text: "new project 1",
                complete: false,
            },
            {
                id: 12083012930,
                text: "new project 2",
                complete: false,
            },
        ]})
    }, 1000);
}