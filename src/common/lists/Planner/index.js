import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import TabPanel from '../../components/TabPanel';
import PlannerItem from '../../components/PlannerItem';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'scroll',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
    paddingTop: '48px'
  },
  listItem: {
    paddingTop: '48px'
  },
  header: {
    alignContent: 'space-between',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.light,
    position: 'fixed',
    zIndex: '8'
  },
  name: {
    flex: 5
  },
  origin: {
    flex: 2,
  },
  until: {
    flex: 3
  }
}))


function PlannerList(props) {
  const { value, index, products } = props;
  const classes = useStyles();

  const renderProduct = product => (<PlannerItem product={product} key={`${product.id}`} />);

  return (
    <TabPanel className={classes.listItem} value={value} index={index}>
      <ListItem className={classes.header}>
        <Typography className={classes.name}>PRODUCT</Typography>
        <Typography className={classes.origin}>ORIGIN</Typography>
        <Typography className={classes.until}>UNTIL</Typography>
      </ListItem>
      <List className={classes.root}>
        {products.map(renderProduct)}
      </List >
    </TabPanel>
  )
}

export default React.memo(PlannerList);