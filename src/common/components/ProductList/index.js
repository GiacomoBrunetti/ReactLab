import React from 'react';
import {
  List
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../ProductCard';

const useStyles = makeStyles(theme => ({
  padding0: {
    padding: 0,
    maxHeight: '80vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.primary,
    color: theme.palette.text,
    textTransform: 'uppercase'
  }
}))


export default function ProductList (props) {
  const { TabPanel, value, index, products } = props;
  const classes = useStyles();

  const renderProduct = product => (<ProductCard className={classes.padding0} product={product} key={product.id}></ProductCard>)

  return (
    <TabPanel className={classes.padding0} value={value} index={index}>
      <List style={{padding: 0}}>
        {products.map(renderProduct)}
      </List >
    </TabPanel>
  )
}