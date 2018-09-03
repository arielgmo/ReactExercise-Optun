import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addNewTodo } from '../actions/toDoActions';

const textFieldStyle = {
  marginTop: '0',
  marginBottom: '30px',
  marginRight: '10px',
  width: '80%',
};

class ToDoListContent extends Component {
  static propTypes = {
    onAddNewTodo: PropTypes.func,
  };

  static defaultProps = {
    onAddNewTodo: () => {},
  };

  state = {
    selectedList: 'TODO',
    addTodoValue: '',
  }

  getButtons = () => (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={3}>
        <Button variant="outlined" color="secondary" onClick={() => this.changeSelectedList('TODO')}>
          To Do
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="outlined" color="primary" onClick={() => this.changeSelectedList('DONE')}>
          Done
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="outlined" onClick={() => this.changeSelectedList('ALL')}>
          All
        </Button>
      </Grid>
    </Grid>
  );

  changeSelectedList = value => this.setState(prevState => ({ ...prevState, selectedList: value }));

  changeNewToDo = value => this.setState(prevState => ({ ...prevState, addTodoValue: value }));

  addNewToDo = () => {
    const { onAddNewTodo } = this.props;
    const { addTodoValue } = this.state;
    onAddNewTodo(addTodoValue);
  }

  getToDoList = () => {
    const { selectedList } = this.state;
    if (selectedList === 'TODO') {
      return (
        <p>TO DO</p>
      );
    }
    if (selectedList === 'DONE') {
      return (
        <p>DONE</p>
      );
    }
    return <p>ALL</p>;
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <TextField
            id="Add To Do"
            label="Add To Do"
            placeholder="Add To Do"
            onChange={event => this.changeNewToDo(event.target.value)}
            margin="normal"
            style={textFieldStyle}
          />
          <Button variant="outlined" onClick={this.addNewToDo}>
            ADD
          </Button>
        </Grid>
        <Grid item xs={10}>
          {this.getButtons()}
        </Grid>
        <Grid item xs={12}>
          {this.getToDoList()}
        </Grid>
      </Grid>
    );
  }
}

export default connect(null, { onAddNewTodo: addNewTodo })(ToDoListContent);
