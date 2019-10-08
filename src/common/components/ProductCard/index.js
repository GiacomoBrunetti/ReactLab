import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

import OrderRow from '../OrderRow';


const useStyles = makeStyles(theme => ({
  listItem: {
    height: '120px',
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    // backgroundColor: 'black',
    // color: 'white',
  },
  prdImage: {
    height: '100px',
    // width: '100px',
  },
  cardHeader: {
    // padding: '16px'
  }
}))

function ProductCard(props) {
  const product = props.product;
  const classes = useStyles();

  const makeApiRequest = () => {
    const orderItem = {
      productId: this.product.id,
      quantity: this.state.quantity,
      unit: this.state.selectedUnit.name
    }
    console.log('[MAKING API REQUEST]: ', orderItem);
  }

  return (
    <ListItem className={classes.listItem} divider>
      <img
        alt="product"
        src={`https://natooraapp.uk.natoora.com${product.image}`}
        className={classes.prdImage}
      />
      <Box flex={1} flexDirection="column">
        <Box flex={1}>
          <ListItemText
            primary={product.name}
            secondary={`${product.origin_initials} | ${product.growing_ethos_initials}`}
          />
        </Box>
        <OrderRow product={product} />
      </Box>
    </ListItem>
  )
}


export default React.memo(ProductCard);