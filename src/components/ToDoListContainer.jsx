import React from 'react';
import Grid from '@material-ui/core/Grid';
import ToDoListCard from './ToDoListCard';

const containerStyle = {
  marginTop: '20px',
};

const ToDoListContainer = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={containerStyle}
  >
    <Grid item xs={8}>
      <ToDoListCard />
    </Grid>
  </Grid>
);

export default ToDoListContainer;
