import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  last: {
    height: '56px',
    backgroundColor: theme.palette.primary.main,
  }
}));

function ListWithFilling(props) {
  const classes = useStyles();
  return (
    <List className={classes.root} disablePadding>
      {props.children}
      <div className={classes.last}></div>
    </List>
  )
}

export default React.memo(ListWithFilling);