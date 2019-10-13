import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import PlannerItem from '../../components/PlannerItem';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
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
    <List className={classes.root}>
      {products.map(renderProduct)}
      <div className={classes.filling}></div>
    </List >
  )
}

export default React.memo(PlannerList);