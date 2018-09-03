import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import { toggleSelectToDo } from '../actions/toDoActions';

const cardContentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
};

const gridStyle = {
  marginTop: '20px',
};

const getToDoList = (toDoList, toggleSelect) => {
  return toDoList.map(toDo => (
    <Card
      key={toDo.toDoName}
      style={toDo.selected ? { border: '1px solid red', marginTop: '10px' } : { marginTop: '10px' }}
      onClick={() => toggleSelect(toDo.toDoName)}
    >
      <CardContent
        style={cardContentStyle}
      >
        {toDo.toDoName}
      </CardContent>
    </Card>
  ));
};

const getFilteredList = (selectedList, toDoList) => {
  if (selectedList === 'TODO') {
    return toDoList.filter((toDo) => {
      if (toDo.done === false) {
        return true;
      }
      return false;
    });
  }
  if (selectedList === 'DONE') {
    return toDoList.filter((toDo) => {
      if (toDo.done === true) {
        return true;
      }
      return false;
    });
  }
  return toDoList;
};

const ToDoListView = (props) => {
  const {
    selectedList,
    toDoReducer,
    toggleSelect
  } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={gridStyle}
    >
      <Grid item xs={12}>
        {getToDoList(getFilteredList(selectedList, toDoReducer), toggleSelect)}
      </Grid>
      <Grid item xs={10}>
        {/* {getButtons()} */}
      </Grid>
    </Grid>
  );
};

export default connect(
  ({ toDoReducer }) => ({
    toDoReducer,
  }),
  {
    toggleSelect: toggleSelectToDo,
    // doSelectedToDos,
    // undoSelectedToDos,
    // removeSelectedToDos,
  },
)(ToDoListView);
