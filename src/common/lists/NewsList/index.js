import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from '../../components/NewsCard';
import TabPanel from '../../components/TabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '48px',
    overflow: 'scroll',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text,
  }
}))

function NewsList(props) {
  const { value, index, news } = props;
  const classes = useStyles();

  const renderNews = (news, index) => (<NewsCard news={news} key={`${index}`} />)

  return (
    <TabPanel value={value} index={index}>
      <List className={classes.root}>
        {news.map(renderNews)}
      </List >
    </TabPanel>
  )
}

export default React.memo(NewsList);