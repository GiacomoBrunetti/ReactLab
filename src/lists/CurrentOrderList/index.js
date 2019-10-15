import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../components/ProductCard';

import containerHeight from '../../utils/containerHeigth';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
    height: containerHeight-112,
    overflow: 'scroll'
  },
  filling: {
    height: theme.spacing(8)
  }
}))

const Product = product => (<ProductCard product={product} key={product.id} />);

function ProductList(props) {
  const { products } = props;
  const classes = useStyles();

  return (
    <List
      width={window.innerWidth}
      className={classes.root}
      disablePadding
    >
      {products.map(Product)}
      <div className={classes.filling}></div>
    </List >
  )
}

export default React.memo(ProductList);