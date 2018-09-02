import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ToDoList from './Components/ToDoList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" />
          <Route path="/todo-list" component={ToDoList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
