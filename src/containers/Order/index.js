import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import SimpleTabs from '../../components/SimpleTabs';
import PastOrdersList from '../../lists/PastOrdersList';
import OrderPage from '../../components/OrderPage';

import orders from '../../seeds/orders';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '56px',
    backgroundColor: theme.palette.primary.main
  },
  container: {
    paddingTop: '48px'
  }
}));

export default function Order() {

  const tabNames = ['BASKET', 'PLACED'];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper flex={1} className={classes.root}>
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <div className={classes.container}>
        <OrderPage value={value} index={0} />
        <PastOrdersList value={value} index={1} orders={orders} />
      </div>
    </Paper>
  );
}