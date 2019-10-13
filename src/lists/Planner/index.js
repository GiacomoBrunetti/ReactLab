import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import PlannerItem from '../../components/PlannerItem';

const useStyles = makeStyles(theme => ({
  root: {
    // overflow: 'scroll',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
    // paddingTop: '48px'
  },
  listItem: {
    // paddingTop: '48px'
  },
  header: {
    alignContent: 'space-between',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.light,
    // position: 'fixed',
    // zIndex: '8'
  },
  name: {
    flex: 5
  },
  origin: {
    flex: 2,
  },
  until: {
    flex: 3
  },
  filling: {
    height: theme.spacing(8)
  }
}))


function PlannerList(props) {
  const { products } = props;
  const classes = useStyles();

  const renderProduct = product => (<PlannerItem product={product} key={`${product.id}`} />);

  return (
    <Box className={classes.listItem}>
      <ListItem className={classes.header}>
        <Typography className={classes.name}>PRODUCT</Typography>
        <Typography className={classes.origin}>ORIGIN</Typography>
        <Typography className={classes.until}>UNTIL</Typography>
      </ListItem>
      <List className={classes.root}>
        {products.map(renderProduct)}
        <div className={classes.filling}></div>
      </List >
    </Box>
  )
}

export default React.memo(PlannerList);