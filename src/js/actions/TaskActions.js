import dispatcher from "../dispatcher";

export function createTask(projectId) {
    dispatcher.dispatch({
        type: "CREATE_TASK",
        projectId
    });
}