import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class TaskStore extends EventEmitter {
    tasks = [
        {
            id: 921839123,
            name: "testing task1"
        },
        {
            id: 9183921,
            name: "testing task2"
        }
    ]

    constructor() {
        super();
    }

    createTask() {
        this.tasks.push({
            id: Date.now(),
            name: "hehehe! new one!"
        });
        this.emit('change');
    }

    getTasks() {
        return this.tasks;
    }

    reloadTasks(projectId) {
        this.tasks = action.tasks;
        this.emit('change');
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TASK":
                this.createTask();
                break;
        }
    }

}

const taskStore = new TaskStore;
dispatcher.register(taskStore.handleActions.bind(taskStore));

export default taskStore;