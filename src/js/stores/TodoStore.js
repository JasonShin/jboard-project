import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 11384714,
                text: "shiasfasfaft",
                complete: false,
            },
            {
                id: 12083012930,
                text: "crap",
                complete: false,
            }
        ];
    }

    createTodo(text) {
        this.todos.push({
            id: Date.now(),
            text,
            complete: false,
        });

        this.emit("change");
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO":
                this.createTodo(action.text);
                break;
            case "RECEIVE_TODOS":
                this.todos = action.todos;
                this.emit("change");
                break;
        }
        console.log('TodoStore received an action', action);
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;
//window.todoStore = todoStore;
export default todoStore;