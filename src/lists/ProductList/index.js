import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../components/ProductCard';
import TabPanel from '../../components/TabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '48px',
    backgroundColor: theme.palette.primary.main,
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