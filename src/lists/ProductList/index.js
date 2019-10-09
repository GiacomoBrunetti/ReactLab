import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../common/components/ProductCard';
import TabPanel from '../../common/components/TabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    maxHeight: '81vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  }
}))

const renderProduct = product => (<ProductCard product={product} key={product.id}></ProductCard>);

function ProductList(props) {
  const { value, index, products } = props;
  const classes = useStyles();

  return (
    <TabPanel value={value} index={index}>
      <List className={classes.root}>
        {products.map(renderProduct)}
      </List >
    </TabPanel>
  )
}

export default React.memo(ProductList);