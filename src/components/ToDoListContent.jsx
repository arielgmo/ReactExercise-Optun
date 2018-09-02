import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const containerStyle = {

};

export default class ToDoListContent extends Component {
  state = {
    selectedList: 'TODO',
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
        style={containerStyle}
      >
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
