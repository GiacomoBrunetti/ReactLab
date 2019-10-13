import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FeatureCard from '../../components/FeatureCard';
import TabPanel from '../../components/TabPanel';

const useStyles = makeStyles(theme => ({
  padding0: {
    // overflow: 'scroll',
    backgroundColor: theme.palette.primary,
    color: theme.palette.text,
    textTransform: 'uppercase',
    // paddingTop: '48px',
  },
  filling: {
    height: theme.spacing(8)
  }
}))

function FeatureList(props) {
  const { features } = props;
  const classes = useStyles();

  const renderFeatures = feat => (<FeatureCard content={feat} key={`${feat.id}`} />)

  return (
      <List className={classes.padding0} disablePadding >
        {features.map(renderFeatures)}
        <div className={classes.filling}></div>
      </List >
  )
}

export default React.memo(FeatureList);