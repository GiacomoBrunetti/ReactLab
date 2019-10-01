import React from 'react';
import {
  List
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../components/ProductCard';
import TabPanel from '../../components/TabPanel';

const useStyles = makeStyles(theme => ({
  padding0: {
    padding: 0,
    maxHeight: '81vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.primary,
    color: theme.palette.text,
    textTransform: 'uppercase'
  }
}))


export default function ProductList (props) {
  const { value, index, products } = props;
  const classes = useStyles();

  const renderProduct = product => (<ProductCard className={classes.padding0} product={product} key={product.name}></ProductCard>)

  return (
    <TabPanel className={classes.padding0} value={value} index={index}>
      <List style={{padding: 0}}>
        {products.map(renderProduct)}
      </List >
    </TabPanel>
  )
}