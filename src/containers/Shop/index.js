import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../components/SimpleTabs';
import ProductList from '../../lists/ProductList';
import Paper from '@material-ui/core/Paper';

import products from '../../seeds/products';




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

  const handleChange = (event, newValue) => {
    console.log(tabNames[newValue]);
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <ProductList style={{padding:0}} value={value} index={0} products={freqProducts}/>
      <ProductList style={{padding:0}} value={value} index={1} products={offerProducts}/>
      <ProductList style={{padding:0}} value={value} index={2} products={earlyProducts}/>
      <ProductList style={{padding:0}} value={value} index={3} products={peakProducts}/>
      <ProductList style={{padding:0}} value={value} index={4} products={lateProducts}/>
    </Paper>
  );
}

export default React.memo(Shop);