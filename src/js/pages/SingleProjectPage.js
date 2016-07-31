import React from "react";

import TaskStore from '../stores/TaskStore';
import ProjectStore from '../stores/ProjectStore';
import * as TaskActions from '../actions/TaskActions';
import * as ProjectActions from '../actions/ProjectActions';

//Components
import CommandPanel from '../components/layout/CommandPanel';

/**
 * Responsibilities:
 * Project Dashboard
 * 1)
 */
export default class ProjectPage extends React.Component {

    state = {
        tasks: TaskStore.getTasks(),
        currentTaskName: '',
    };

    constructor() {
        super();
    }

    componentDidMount() {
        TaskStore.on('change', this.onGetTasks.bind(this));
    }

    componentWillUnmount() {
        TaskStore.removeListener('change');
    }

    onGetTasks() {
        this.setState({
            tasks: TaskStore.getTasks()
        });
    }

    onCurrentTaskNameChange(event) {
        this.setState({
            currentTaskName: event.target.value
        });
    }

    onCurrentTaskCreate() {
        TaskActions.createTask(123);
    }

    //Render
    render() {

        const {projectId} = this.props.params;

        return (
            <div id="ProjectsContainer" class="row">
                {this.state.currentTaskName}
                <input type="text" name="taskName" value={this.state.currentTaskName} onChange={this.onCurrentTaskNameChange.bind(this)}  />
                <button onClick={this.onCurrentTaskCreate.bind(this)}>Create!</button>
                <br />
                Hey you are viewing {projectId}<br />
                {this.state.tasks.length}
                <CommandPanel></CommandPanel>
            </div>
        );
    }

}
