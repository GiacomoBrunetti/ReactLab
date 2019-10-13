import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../components/SimpleTabs';
import SkeletonList from '../../lists/SkeletonList';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import ProductList from '../../lists/ProductList';

import containerHeight from '../../utils/containerHeigth';

import products from '../../seeds/products';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
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



function Shop() {

  const tabNames = ['FREQ', 'OFFER', 'EARLY', 'PEAK', 'LATE'];
  const classes = useStyles();
  const { freqProducts, offerProducts, earlyProducts, peakProducts, lateProducts } = products;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);
  const handleSwipeChange = (newValue, oldValue) => {
    setValue(newValue)
  };


  return (
    <Paper className={classes.root}>
      <SimpleTabs className={classes.tabs} tabNames={tabNames} handleChange={handleChange} value={value}/>
        <SwipeableViews
          className={classes.swipe}
          containerStyle={{
            height: containerHeight,
            WebkitOverflowScrolling: 'touch'
          }}
          enableMouseEvents
          index={value}
          onChangeIndex={handleSwipeChange}>
          <ProductList value={value} products={freqProducts}/>
          <ProductList value={value}  products={offerProducts}/>
          <ProductList value={value}  products={earlyProducts}/>
          <ProductList value={value}  products={peakProducts}/>
          <ProductList value={value}  products={lateProducts}/>
        </SwipeableViews>
    </Paper>
  );
}

export default React.memo(Shop);