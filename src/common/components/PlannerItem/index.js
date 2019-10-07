import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import TabPanel from '../../components/TabPanel';


const useStyles = makeStyles(theme => ({
  root: {
    // flexDirection: 'row',
    alignContent: 'space-between',
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

function PlannerItem(props) {
  const { product } = props;
  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <Typography className={classes.name}>{product.name}</Typography>
      <Typography className={classes.origin}>{product.origin}</Typography>
      <Typography className={classes.until}>{product.available_until}</Typography>
    </ListItem>
  )
}

export default React.memo(PlannerItem);