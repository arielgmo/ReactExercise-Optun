import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import ToDoListContent from './ToDoListContent';

const ToDoListCard = () => (
  <Card>
    <CardHeader
      avatar={<AssignmentLateIcon />}
      title="My to do list"
    />
    <CardContent>
      <ToDoListContent />
    </CardContent>
  </Card>
);

export default ToDoListCard;
