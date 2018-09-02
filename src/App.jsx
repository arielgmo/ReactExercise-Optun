import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ToDoList from './components/ToDoList';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" />
        <Route path="/todo-list" component={ToDoList} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
