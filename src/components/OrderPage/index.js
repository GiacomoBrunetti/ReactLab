import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import TabPanel from '../../components/TabPanel';
import Cutoff from '../Cutoff';
import OrderFlag from '../OrderFlag';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },

}))

function OrderPage(props) {
  const { value, index } = props;
  const classes = useStyles();
  return (
    <TabPanel value={value} index={index}>
      <Box className={classes.root}>
        <Cutoff />
        <OrderFlag />
      </Box>
      <Box className={classes.root}>
      </Box>
    </TabPanel>
  )
}

export default React.memo(OrderPage);