import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



function SkeletonList() {
  return (
    <List>
      <ListItem>
      <Skeleton variant='rect' height={102} width={100} />
      <Skeleton variant='rect' height={102} width={100} />
      <Skeleton variant='rect' height={102} width={100} />
      <Skeleton variant='rect' height={102} width={100} />
      <Skeleton variant='rect' height={102} width={100} />
      <Skeleton variant='rect' height={102} width={100} />
      </ListItem>
    </List>
  )
}

export default React.memo(SkeletonList);