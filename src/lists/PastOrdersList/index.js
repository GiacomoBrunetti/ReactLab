import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import PastOrderCard from '../../components/PastOrderCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    maxHeight: '81vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.primary.main,
  }
}))


function PastBasketList(props) {
  const { value, index, orders } = props;
  const classes = useStyles();

  const renderOrder = order => (<PastOrderCard order={order} key={order.order_number} />)

  return (
      <List className={classes.root}>
        {orders.map(renderOrder)}
      </List >
  )
}

export default React.memo(PastBasketList);