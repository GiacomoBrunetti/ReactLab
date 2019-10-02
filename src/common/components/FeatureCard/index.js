import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import FeatureArticle from '../FeatureArticle';


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
    // backgroundColor: red[500],
  },
}));

function FreatureCard(props) {
  const { content } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderFeature = () => {
    return (
      <FeatureArticle content={content} open={open} handleClose={handleClose} title={content.snippetTitle} />
    );
  }

  const renderCard = () => {
    return (
      <Card className={classes.card}>
        <CardActionArea onClick={handleClickOpen}>
            <CardMedia
              className={classes.media}
              image={content.snippetImageUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {content.snippetTitle}
              </Typography>
              <Typography variant="body2" component="p">
                {content.snippetDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
  }

  return (
    open ? renderFeature() : renderCard()
  )
}


export default React.memo(FreatureCard)