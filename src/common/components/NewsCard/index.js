import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light
  },
  cardContent: {
    marginLeft: '64px',
    marginRight: '32px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
}));

export default function NewsCard(props) {
  const classes = useStyles();

  const { news } = props;
  return (
    <Card className={classes.card} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={news.avatarImageUrl} />
        }
        title={news.copy}
      />
      <Box className={classes.cardContent}>
        <CardMedia
          className={classes.media}
          image={news.mainImageUrl}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {news.location}
          </Typography>
          <Typography variant="body2" component="p">
            {news.created_at}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}