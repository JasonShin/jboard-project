import React from "react";
import { IndexLink, Link } from "react-router";

export default class Project extends React.Component {
    render() {

        const {id, projectTitle} = this.props;
        return (
            <div>
                <Link to={"/project/"+id} params={{ projectId: id }}>{projectTitle}</Link>
            </div>
        );
    }
}
