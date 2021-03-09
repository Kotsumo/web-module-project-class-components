import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/Todo'
import TodoList from './components/TodoList'
import ToDoForm from './components/TodoForm'

const taskToDo = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskToDo: taskToDo,
      //itemText: "",
      count: 0,
    };
  }


  toggleItem = (clickedOnId) => {
    this.setState({
      taskToDo: this.state.taskToDo.map((item) => {
        if (item.id === clickedOnId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }else {
          return item;
        }
      }),
    });
  };

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      taskToDo: [...this.state.taskToDo, newItem],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo List!</h1>
          <ToDoForm  addItem={this.addItem}/>
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          taskToDo={this.state.taskToDo}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;