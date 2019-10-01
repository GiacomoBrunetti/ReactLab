import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from '../../components/NewsCard';
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

export default function NewsList(props) {
  const { value, index, news } = props;
  const classes = useStyles();

  const renderNews = (news, index) => (<NewsCard news={news} key={`${index}`} />)

  return (
    <TabPanel className={classes.padding0} value={value} index={index}>
      <List style={{padding: 0}}>
        {news.map(renderNews)}
      </List >
    </TabPanel>
  )
}