import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../components/SimpleTabs';
import SkeletonList from '../../lists/SkeletonList';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';

import products from '../../seeds/products';
// import SkeletonList from '../../lists/SkeletonList';



const ProductList = React.lazy(() => import('../../lists/ProductList'));

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // backgroundColor: 'black',
    // color: 'white',
    paddingTop: '56px',
  },
});



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
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <React.Suspense fallback={<SkeletonList />}>
        <SwipeableViews enableMouseEvents index={value} onChangeIndex={handleSwipeChange}>
          <ProductList value={value} products={freqProducts}/>
          <ProductList value={value}  products={offerProducts}/>
          <ProductList value={value}  products={earlyProducts}/>
          <ProductList value={value}  products={peakProducts}/>
          <ProductList value={value}  products={lateProducts}/>
        </SwipeableViews>
      </React.Suspense>
    </Paper>
  );
}

export default React.memo(Shop);