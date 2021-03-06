import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../ProductCard';
import NatooraLogo from '../../assets/natoora_logo.jpg';


const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    marginBottom: theme.spacing(1)
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
    backgroundSize: 'contain'
  },
}));

function NewsCard(props) {
  const classes = useStyles();

  const { news } = props;
  const renderProducts = () => {
    news.product_codes.map(code => {})
  }
  return (
    <Card className={classes.card} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={NatooraLogo} />
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

export default React.memo(NewsCard);