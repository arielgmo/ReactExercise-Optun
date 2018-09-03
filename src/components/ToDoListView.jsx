import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Button from '@material-ui/core/Button';
import {
  toggleSelectToDo,
  doSelectedToDos,
  undoSelectedToDos,
  removeSelectedToDos,
} from '../actions/toDoActions';

const cardContentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
};

const gridStyle = {
  marginTop: '20px',
};

const buttonStyle = {
  width: '90%',
  fontSize: '14px',
};

const getToDoList = (toDoList, toggleSelect) => {
  if (toDoList !== null) {
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
  }
  return <div />;
};

const getFilteredList = (filterMode, toDoList) => {
  if (toDoList !== null) {
    if (filterMode === 'TODO') {
      return toDoList.filter((toDo) => {
        if (toDo.done === false) {
          return true;
        }
        return false;
      });
    }
    if (filterMode === 'DONE') {
      return toDoList.filter((toDo) => {
        if (toDo.done === true) {
          return true;
        }
        return false;
      });
    }
    return toDoList;
  }
  return {};
};

const getSelectedToDosList = toDoList => toDoList.map((toDo) => {
  if (toDo.selected === true) {
    return toDo.toDoName;
  }
  return null;
});

const ToDoListView = (props) => {
  const {
    selectedList,
    toDoReducer,
    toggleSelect,
    onDoSelectedToDos,
    onUndoSelectedToDos,
    onRemoveSelectedToDos,
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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={gridStyle}
        >
          <Grid item xs={4}>
            <Button
              style={buttonStyle}
              onClick={() => onDoSelectedToDos(
                getSelectedToDosList(getFilteredList(selectedList, toDoReducer)),
              )}
            >
              Do Selected ToDos
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              style={buttonStyle}
              onClick={() => onUndoSelectedToDos(
                getSelectedToDosList(getFilteredList(selectedList, toDoReducer)),
              )}
            >
              Undo Selected ToDos
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              style={buttonStyle}
              onClick={() => onRemoveSelectedToDos(
                getSelectedToDosList(getFilteredList(selectedList, toDoReducer)),
              )}
            >
              Remove Selected ToDos
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

ToDoListView.propTypes = {
  selectedList: PropTypes.string,
  toDoReducer: PropTypes.arrayOf(
    PropTypes.shape({
      toDoName: PropTypes.string,
      done: PropTypes.bool,
      selected: PropTypes.bool,
    }),
  ),
  toggleSelect: PropTypes.func,
  onDoSelectedToDos: PropTypes.func,
  onUndoSelectedToDos: PropTypes.func,
  onRemoveSelectedToDos: PropTypes.func,
};

ToDoListView.defaultProps = {
  selectedList: 'TODO',
  toDoReducer: [],
  toggleSelect: () => {},
  onDoSelectedToDos: () => {},
  onUndoSelectedToDos: () => {},
  onRemoveSelectedToDos: () => {},
};

export default connect(
  ({ toDoReducer }) => ({
    toDoReducer,
  }),
  {
    toggleSelect: toggleSelectToDo,
    onDoSelectedToDos: doSelectedToDos,
    onUndoSelectedToDos: undoSelectedToDos,
    onRemoveSelectedToDos: removeSelectedToDos,
  },
)(ToDoListView);
