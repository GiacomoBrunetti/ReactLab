import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CurrentOrderList from '../../lists/CurrentOrderList';
import Cutoff from '../Cutoff';
import OrderFlag from '../OrderFlag';


import products from '../../seeds/products';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flexFlow: 'column',
    backgroundColor: theme.palette.primary.main,
    position: 'relative'
  },
  header: {
    // position: 'fixed',
    height: theme.spacing(12)
  },
  items: {
    flexGrow: 1,
    backgroundColor: 'red'
  }
}))

function OrderPage() {
  const classes = useStyles();

  const basketProducts = products['offerProducts'];

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Cutoff />
        <OrderFlag />
      </Box>
      <CurrentOrderList products={basketProducts} />
      </Box>
  )
}

export default React.memo(OrderPage);