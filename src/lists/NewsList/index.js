import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from '../../components/NewsCard';
import TabPanel from '../../components/TabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text,
  },
  filling: {
    height: theme.spacing(8)
  }
}))

function NewsList(props) {
  const { news } = props;
  const classes = useStyles();

  const renderNews = news => (<NewsCard news={news} key={`${news.id}`} />)

  return (
      <List className={classes.root} disablePadding>
        {news.map(renderNews)}
        <div className={classes.filling}></div>
      </List>
  )
}

export default React.memo(NewsList);