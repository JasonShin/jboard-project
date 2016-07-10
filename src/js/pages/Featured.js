import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Featured extends React.Component {

  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
    console.log("count", TodoStore.listenerCount("change"));
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      });
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {

    const {todos} = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>
    });

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];

    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div class="row">
          <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        </div>
        <div class="row">
          <ul>{TodoComponents}</ul>
        </div>
      </div>
    );
  }
}
