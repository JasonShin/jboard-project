import React from "react";

export default class Project extends React.Component {
    render() {
        const { text } = this.props;

        return (
            <li>{text}</li>
        );
    }
}
