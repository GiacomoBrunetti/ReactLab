import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../common/components/SimpleTabs';
import PastOrdersList from '../../common/lists/PastOrdersList';

import orders from '../../seeds/orders';

const useStyles = makeStyles({
  root: {
  },
});

export default function Order() {

  const tabNames = ['BASKET', 'PLACED'];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div flex={1} className={classes.root}>
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <PastOrdersList value={value} index={0} orders={orders} />
      <PastOrdersList value={value} index={1} orders={orders} />
    </div>
  );
}