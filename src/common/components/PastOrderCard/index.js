import React from 'react';
import { shallowEqual, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

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
  const doValue = useSelector(state => state.do_value)

  return (
    <ListItem className={classes.root}>
    <Button className={classes.root}>
      <div className={classes.top}>
        <Typography>{order.order_number}</Typography>
        <Typography>{`${order.delivery_date}  ${order.delivery_slot}`}</Typography>
        <Typography>{`${doValue}`}</Typography>
      </div>
    </Button>
    </ListItem>
  )
}

export default React.memo(PastOrderCard);