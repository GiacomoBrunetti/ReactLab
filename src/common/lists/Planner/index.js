import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from '../../components/TabPanel';

const useStyles = makeStyles(theme => ({
  padding0: {
    padding: 0,
    maxHeight: '81vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.primary,
    color: theme.palette.text,
    textTransform: 'uppercase'
  }
}))

function PlannerItem(props) {
  const { product } = props;
  return (
    <ListItem>
      {product.name}
    </ListItem>
  )
}

const PlannerListItem = React.memo(PlannerItem);

function PlannerList(props) {
  const { value, index, products } = props;
  const classes = useStyles();

  const renderProducts = (product, index) => (<PlannerListItem product={product} key={`${index}`} />)

  return (
    <TabPanel className={classes.padding0} value={value} index={index}>
      <List className={classes.padding0} style={{padding: 0}}>
        {products.map(renderProducts)}
      </List >
    </TabPanel>
  )
}

export default React.memo(PlannerList);