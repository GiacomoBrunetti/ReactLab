import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core';
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
    backgroundColor: red[500],
  },
}));

export default function NewsCard(props) {
  const classes = useStyles();

  console.log(props);
  return (
    <Card className={classes.card} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
      />
      <Box className={classes.cardContent}>
        <CardMedia
          className={classes.media}
          image="https://1.bp.blogspot.com/-XoldFIOD1Mc/TdaiGVvPblI/AAAAAAAAHp0/epBoDqE6h2Y/s400/big_fat_cat_kitty.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}