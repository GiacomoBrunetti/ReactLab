import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import OrderRow from '../OrderRow';


const useStyles = makeStyles(theme => ({
  listItem: {
    height: '122px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing(1)
  },
  prdImage: {
    height: '120px',
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

  return (
    <ListItem className={classes.listItem} disableGutters>
      <img
        alt="product"
        src={`https://natooraapp.uk.natoora.com${product.image}`}
        className={classes.prdImage}
      />
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


export default React.memo(ProductCard);