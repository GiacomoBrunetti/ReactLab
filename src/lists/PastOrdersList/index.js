import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import PastOrderCard from '../../common/components/PastOrderCard';
import TabPanel from '../../common/components/TabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    maxHeight: '81vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  }
}))


function PastBasketList(props) {
  const { value, index, orders } = props;
  const classes = useStyles();

  const renderOrder = order => (<PastOrderCard order={order} key={order.order_number} />)

  return (
    <TabPanel value={value} index={index}>
      <List className={classes.root}>
        {orders.map(renderOrder)}
      </List >
    </TabPanel>
  )
}

export default React.memo(PastBasketList);