import React from "react";

import Todo from "../components/Todo";


export default class Todos extends React.Component {
    render() {
        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;

        const Todos = [
            "Buy milk",
            "buy shit",
            "but crap"
        ].map((title, i) => <Todo key={i} title={title}/> );

        return (
            <div>
                <h1>Todos</h1>
                article: {article}, date: {date}, filter: {filter}
                <div class="row">
                    <ul> {Todos} </ul>
                </div>
            </div>
        );
    }
}
