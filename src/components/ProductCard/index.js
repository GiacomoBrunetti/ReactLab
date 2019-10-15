import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ImageContainer from '../ImageContainer';
import OrderRow from '../OrderRow';

import appConfig from '../../bin/config';


const useStyles = makeStyles(theme => ({
  listItem: {
    minHeight: '102px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing(1)
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

  return (
    <ListItem className={classes.listItem} disableGutters>
      <ImageContainer className={classes.prdImage} url={`${appConfig.apiUrl}${product.image}`} />
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