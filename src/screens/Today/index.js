import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../components/SimpleTabs';
import NewsList from '../../lists/NewsList';
import FeatureList from '../../lists/FeatureList';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';

import containerHeigh from '../../utils/containerHeigth';


import today from '../../seeds/today';
import containerHeight from '../../utils/containerHeigth';






const useStyles = makeStyles({
  root: {
    position: 'relative'
  },
  tabs: {
    position: 'absolute',
    top: 0,
    right:0
  },
  swipe: {
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling,
    // paddingBottom: theme.spacing(7)
  }
});



function Today() {

  const tabNames = ['NEWS', 'FEATURES'];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const news = today['FastCard'];
  const features = today['LongFormArticle'];

  const handleChange = (event, newValue) => setValue(newValue);
  const handleSwipeChange = newValue => setValue(newValue);

  return (
    <Paper className={classes.root}>
      <SimpleTabs className={classes.tabs} tabNames={tabNames} handleChange={handleChange} value={value}/>
      <SwipeableViews containerStyle={{height: containerHeight}} className={classes.swipe} enableMouseEvents index={value} onChangeIndex={handleSwipeChange}>
        <NewsList value={value} index={0} news={news}/>
        <FeatureList value={value} index={1} features={features} />
      </SwipeableViews>
    </Paper>
  );
}

export default React.memo(Today);