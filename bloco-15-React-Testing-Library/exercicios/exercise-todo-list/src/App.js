import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      btnStatus: true,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(e) {
    const { target } = e
    this.setState({
      btnStatus: false,
      selectedTask: target.innerHTML,
    })
  }

  removeTodo() {
    const {listTodo, selectedTask} = this.state;
    this.setState({
      listTodo: listTodo.filter((todo) => todo !== selectedTask),
      btnStatus: true,
    })
  }

  render() {
    const { listTodo, btnStatus } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} btnStatus={btnStatus} removeTodo={this.removeTodo} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1} >
                  <Item content={todo} selectTodo={this.selectTodo}/>
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
