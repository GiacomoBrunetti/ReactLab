import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';

import SimpleTabs from '../../components/SimpleTabs';
import PastOrdersList from '../../lists/PastOrdersList';
import OrderPage from '../../components/OrderPage';
import BottomNavigator from '../../components/BottomNavigator';
import containerHeight from '../../utils/containerHeigth';


import orders from '../../seeds/orders';

const useStyles = makeStyles(theme => ({
  root: {
    // paddingTop: '56px',
    backgroundColor: theme.palette.primary.main
  },
  container: {
    // paddingTop: '48px'
  },
  tabs: {
    position: 'absolute',
    top: 0,
    right:0
  },
  swipe: {
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling,
  }
}));

export default function Order() {

  const tabNames = ['CURRENT', 'PLACED'];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);
  const handleSwipeChange = newValue => setValue(newValue);

  return (
    <Paper flex={1} className={classes.root}>
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <SwipeableViews
        containerStyle={{height: containerHeight}}
        className={classes.swipe}
        enableMouseEvents
        index={value}
        onChangeIndex={handleSwipeChange}
      >
        <OrderPage value={value} index={0} />
        <PastOrdersList value={value} index={1} orders={orders} />
      </SwipeableViews>
    </Paper>
  );
}