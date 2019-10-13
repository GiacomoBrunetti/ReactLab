import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  search: {
    paddingTop: '56px'
  },
  prdData: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    // height: '86px',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  prdName: {
    marginBottom: theme.spacing(2)
  },
}));


function SkeletonList() {

  const keywords = useSelector(state => state.searchReducer.keywords);

  const classes = useStyles();

  return (
    <List className={keywords ? classes.search : null}>
      <ListItem disableGutters>
        <Skeleton variant='rect' height={102} width={120} />
        <Box className={classes.prdData}>
          <Skeleton className={classes.prdName} variant='rect' height={50} width={'100%'}/>
          <Skeleton  variant='rect' height={30} width={'100%'}/>
        </Box>
      </ListItem>
      <ListItem disableGutters>
        <Skeleton variant='rect' height={102} width={120} />
        <Box className={classes.prdData}>
          <Skeleton className={classes.prdName} variant='rect' height={50} width={'100%'}/>
          <Skeleton  variant='rect' height={30} width={'100%'}/>
        </Box>
      </ListItem>
      <ListItem disableGutters>
        <Skeleton variant='rect' height={102} width={120} />
        <Box className={classes.prdData}>
          <Skeleton className={classes.prdName} variant='rect' height={50} width={'100%'}/>
          <Skeleton  variant='rect' height={30} width={'100%'}/>
        </Box>
      </ListItem>
      <ListItem disableGutters>
        <Skeleton variant='rect' height={102} width={120} />
        <Box className={classes.prdData}>
          <Skeleton className={classes.prdName} variant='rect' height={50} width={'100%'}/>
          <Skeleton  variant='rect' height={30} width={'100%'}/>
        </Box>
      </ListItem>
      <ListItem disableGutters>
        <Skeleton variant='rect' height={102} width={120} />
        <Box className={classes.prdData}>
          <Skeleton className={classes.prdName} variant='rect' height={50} width={'100%'}/>
          <Skeleton  variant='rect' height={30} width={'100%'}/>
        </Box>
      </ListItem>
      <ListItem disableGutters>
        <Skeleton variant='rect' height={102} width={120} />
        <Box className={classes.prdData}>
          <Skeleton className={classes.prdName} variant='rect' height={50} width={'100%'}/>
          <Skeleton  variant='rect' height={30} width={'100%'}/>
        </Box>
      </ListItem>
      <ListItem disableGutters>
        <Skeleton variant='rect' height={102} width={120} />
        <Box className={classes.prdData}>
          <Skeleton className={classes.prdName} variant='rect' height={50} width={'100%'}/>
          <Skeleton  variant='rect' height={30} width={'100%'}/>
        </Box>
      </ListItem>
    </List>
  )
}

export default React.memo(SkeletonList);