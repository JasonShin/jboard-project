import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}

export function reloadTodos() {

    dispatcher.dispatch({type: "FETCH_TODOS"});
    setTimeout(() => {
        dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
            {
                id: 11384714,
                text: "new todo 1",
                complete: false,
            },
            {
                id: 12083012930,
                text: "new todo 2",
                complete: false,
            },
        ]})
    }, 1000);
}