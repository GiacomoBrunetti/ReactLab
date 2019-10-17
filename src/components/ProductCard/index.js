import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ImageContainer from '../ImageContainer';
import OrderRow from '../OrderRow';

import appConfig from '../../bin/config';
import findOrAdd from '../../utils/findOrAdd';

const useStyles = makeStyles(theme => ({
  listItem: {
    minHeight: '102px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
    padding: 0,
  },
  prdImage: {
    height: '100px',
  },
  containerName: {
    paddingLeft: theme.spacing(2)
  },
  subtitle: {
    color: theme.palette.secondary.light
  }
}))

function ProductCard(props) {
  const product = props.product;

  const classes = useStyles();
  let flags = [];

  for (let i = 0; i < 2; i++ ) {
    if (product.stock_label === 'OUT_OF_STOCK') {
      // If it is out of stock you only need to show that flag
      flags = [{ type: 'OUT OF STOCK', style: 'outOfStockFlag', key: i, }]
      break;
    }
    // if (this.props.orderedState.sample) {
    //   findOrAdd(flags, { type: 'SAMPLE', style: 'sampleFlag', key: i, });
    //   continue;
    // }
    if (product.pre_order) {
      findOrAdd(flags, { type: 'PRE-ORDER', style: 'preOrderFlag', key: i, });
      continue;
    }
    // if (customerProduct.on_sale) {
    //   findOrAdd(flags, { type: 'OFFER', style: 'offerFlag', key: i, });
    //   continue;
    // }
    // if (customerProduct.price_drop) {
    //   findOrAdd(flags, { type: 'PRICE DROP', style: 'priceDropFlag', key: i, });
    //   continue;
    // }
    if (product.box_discount) {
      findOrAdd(flags, { type: 'BOX DISCOUNT', style: 'boxDiscountFlag', key: i, });
      continue;
    }
    // if (customerProduct.second_selection) {
    //   findOrAdd(flags, { type: '2ND SEL', style: 'secondSelFlag', key: i, });
    //   continue;
    // }
    if (product.stock_label === 'LOW_STOCK') {
      findOrAdd(flags, { type: 'LOW STOCK', style: 'lowStockFlag', key: i, });
      continue;
    }
  }

  const Image = React.useMemo(() => (<ImageContainer className={classes.prdImage} url={`${appConfig.apiUrl}${product.image}`} flags={flags}/>), [product.image, flags])

  return (
    <ListItem className={classes.listItem} disableGutters>
      {Image}
      <Box flex={1} flexDirection="column">
        <Box className={classes.containerName} flex={1}>
          <Typography variant="subtitle1">{product.name.toUpperCase()}</Typography>
          <Typography className={classes.subtitle} variant="subtitle2">{`${product.origin_initials} | ${product.growing_ethos_initials}`}</Typography>
        </Box>
        <OrderRow product={product} />
      </Box>
    </ListItem>
  )
}


export default React.memo(ProductCard, () => true);