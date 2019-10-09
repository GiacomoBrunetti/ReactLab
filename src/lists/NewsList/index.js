import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from '../../common/components/NewsCard';
import TabPanel from '../../common/components/TabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    maxHeight: '81vh',
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