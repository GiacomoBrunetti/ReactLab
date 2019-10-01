import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../common/components/SimpleTabs';
import NewsList from '../../common/lists/NewsList';
import FeatureList from '../../common/lists/FeatureList';


import today from '../../seeds/today';



const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // backgroundColor: 'black',
    // color: 'white',
  },
});



export default function Today() {

  const tabNames = ['NEWS', 'FEATURES'];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const news = today['FastCard'];
  const features = today['LongFormArticle'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div flex={1} className={classes.root}>
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <NewsList value={value} index={0} news={news}/>
      <FeatureList value={value} index={1} features={features} />
    </div>
  );
}