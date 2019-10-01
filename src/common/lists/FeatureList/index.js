import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FeatureCard from '../../components/FeatureCard';
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

export default function FeatureList(props) {
  const { value, index, features } = props;
  const classes = useStyles();

  const renderFeatures = (feat, index) => (<FeatureCard content={feat} key={`${index}`} />)

  return (
    <TabPanel className={classes.padding0} value={value} index={index}>
      <List style={{padding: 0}}>
        {features.map(renderFeatures)}
      </List >
    </TabPanel>
  )
}