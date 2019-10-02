import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../components/ProductCard';
import TabPanel from '../../components/TabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    maxHeight: '81vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  }
}))


function ProductList (props) {
  const { value, index, products } = props;
  const classes = useStyles();

  const renderProduct = product => (<ProductCard product={product} key={product.name}></ProductCard>)

  return (
    <TabPanel value={value} index={index}>
      <List className={classes.root}>
        {products.map(renderProduct)}
      </List >
    </TabPanel>
  )
}

export default React.memo(ProductList);