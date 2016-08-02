import React from "react";
import { IndexLink, Link } from "react-router";

export default class Project extends React.Component {

    _container; //Single project container

    componentDidMount() {
        //Associate draggable to current component wrapper
        $(this._container).draggable({
            stop: function(){
                console.log("finished dragging!");
            }
        });
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
