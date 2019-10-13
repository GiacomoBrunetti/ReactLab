import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../components/ProductCard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
  },
  filling: {
    height: theme.spacing(8)
  }
}))


function ProductList(props) {
  const { products } = props;
  const classes = useStyles();

  const Product = product => (<ProductCard product={product} key={product.id} />);

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