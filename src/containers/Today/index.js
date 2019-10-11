import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../components/SimpleTabs';
import NewsList from '../../lists/NewsList';
import FeatureList from '../../lists/FeatureList';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';

import today from '../../seeds/today';






const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // backgroundColor: 'black',
    // color: 'white',
    paddingTop: '56px',
  },
});



function Today() {

  const tabNames = ['NEWS', 'FEATURES'];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const news = today['FastCard'];
  const features = today['LongFormArticle'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSwipeChange = (newValue, oldValue) => {
    setValue(newValue)
  };

  return (
    <Paper flexgrow={1} className={classes.root}>
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <SwipeableViews enableMouseEvents index={value} onChangeIndex={handleSwipeChange}>
        <NewsList value={value} index={0} news={news}/>
        <FeatureList value={value} index={1} features={features} />
      </SwipeableViews>
    </Paper>
  );
}

export default React.memo(Today);