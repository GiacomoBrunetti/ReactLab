import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import OrderRow from '../OrderRow';


const useStyles = makeStyles(theme => ({
  listItem: {
    height: '120px',
    marginBottom: theme.spacing(.5),
    backgroundColor: theme.palette.secondary.main,
  },
  prdImage: {
    height: '110px',
  },
}))

function ProductCard(props) {
  const product = props.product;
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem} disableGutters>
      <img
        alt="product"
        src={`https://natooraapp.uk.natoora.com${product.image}`}
        className={classes.prdImage}
      />
      <Box flex={1} flexDirection="column">
        <Box flex={1}>
          <Typography >{product.name.toUpperCase()}</Typography>
          <Typography >{`${product.origin_initials} | ${product.growing_ethos_initials}`}</Typography>
        </Box>
        <OrderRow product={product} />
      </Box>
    </ListItem>
  )
}


export default React.memo(ProductCard);