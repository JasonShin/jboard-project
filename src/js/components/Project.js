import React from "react";
import { IndexLink, Link } from "react-router";

export default class Project extends React.Component {
    render() {
        const { text, projectId } = this.props;

        return (
            <li>
                <Link to={"/project/"+projectId} params={{ projectId: projectId }}>{text}</Link>
            </li>
        );
    }
}
