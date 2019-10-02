import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FullScreenDialog from '../FullScreenDialog';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'scroll',
  },
  image: {
    width: '100%',
    minHeight: '300px' /** Paolo please give some of your magic */
  }
}))

function FeatureArticle(props) {
  const { content, open, handleClose } = props;

  const classes = useStyles();

  const renderArticleContent = (content) => {
    const articleContent = [];
    content = content.article_content;
    const titlesLen = content.titles.length;
    const bodiesLen = content.bodies.length;
    const imageUrlsLen = content.imageUrls.length;
    const y = Math.max(titlesLen, bodiesLen, imageUrlsLen);
    for (let i=0; i<y; i++) {
      const currentTitle = content.titles[i];
      const currentBody = content.bodies[i];
      const currentImage = content.imageUrls[i];
      articleContent.push(
        <div key={`content-${i}`}>
          {(!!currentImage) && (<CardMedia component='img' image={currentImage} className={classes.image}/>)}
          {(!!currentBody || !!currentTitle) && (
            <CardContent>
              <Typography variant="h4" color="primary">
                {currentTitle}
              </Typography>
              <Typography color="primary" style={{whiteSpace: 'pre-wrap'}}>
                {currentBody}
              </Typography>
            </CardContent>
          )}
        </div>
      )
    }
    return articleContent;
  }

  return(
    <FullScreenDialog open={open} handleClose={handleClose} title={content.snippetTitle}>
      <Card className={classes.root}>
        {renderArticleContent(content)}
      </Card>
    </FullScreenDialog>

  )
}

export default React.memo(FeatureArticle);