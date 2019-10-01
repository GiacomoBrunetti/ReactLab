import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
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

export default function FreatureCard(props) {
  const classes = useStyles();

  console.log(props);
  return (
    <Card className={classes.card}>
    <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.petguide.com/wp-content/uploads/2015/01/fat-dog.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}