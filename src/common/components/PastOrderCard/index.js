import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: theme.palette.secondary.main,
  },
  top: {
    flexDirection: 'row',
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    flex: 1
  }
}))

function PastOrderCard(props) {
  const { order } = props;

  const classes = useStyles();



  return (
    <ListItem className={classes.root}>
    <ListItemText>{order.order_number}</ListItemText>
    </ListItem>
  )
}

export default React.memo(PastOrderCard);