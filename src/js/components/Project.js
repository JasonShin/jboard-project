import React from "react";
import ProjectStore from '../stores/ProjectStore';
import * as ProjectActions from '../actions/ProjectActions';
import { IndexLink, Link } from "react-router";

export default class Project extends React.Component {

    _container; //Single project container

    componentDidMount() {
        //Associate draggable to current component wrapper
        const {xAxis, yAxis} = this.props.coordinates;
        this.setDraggable();
        this.positionContainer(xAxis, yAxis);
    }

    setDraggable() {
        $(this._container).draggable({
            stop: function(){
                console.log("finished dragging!");
            }
        });
    }

    positionContainer(x, y) {
        $(this._container).css({
            left: x,
            top: y
        })
    }

    setPositionState(x, y) {

    }

    render() {

        const {id, projectTitle} = this.props;

        return (
            <div class="singleProject" ref={(c) => this._container = c}>
                <Link to={"/project/"+id} params={{ projectId: id }}>{projectTitle}</Link>
            </div>
        );
    }
}
