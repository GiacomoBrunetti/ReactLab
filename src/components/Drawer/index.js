import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LeftArrowIcon from '@material-ui/icons/KeyboardArrowLeftRounded';

const useStyles = makeStyles(theme => ({
  grow: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  topBar: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(1)
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    alignContent: 'space-between',
    flexDirection: 'column',
  },
  drawerBody: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: '300px',
    width: '80vw',
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3)
  },
  drawerItem: {
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
    marginBottom: theme.spacing(1)
  },
  button: {
    color: theme.palette.primary.contrastText
  }
}));

function LeftDrawer(props) {
  const { open, handleOpen, handleClose } = props;
  const classes = useStyles();

  const handleLogout = () => console.log('logout');

  const IconBtn = (
    <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="close drawer"
    onClick={handleClose}
  >
    <LeftArrowIcon />
  </IconButton>
  )

  return (
    <SwipeableDrawer
      id='primary-menu'
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      className={classes.drawer}
    >
    <AppBar position="static">
      <Toolbar className={classes.topBar}>
        {IconBtn}
        <Box>
          <Typography>
            Giacomo Brunetti
          </Typography>
          <Typography>
            giacomo@natoora.com
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
    <Box className={classes.drawerBody}>
      <Typography>
        GENERAL
      </Typography>
      <MenuItem className={classes.drawerItem}>Notifications</MenuItem>
      <MenuItem className={classes.drawerItem}>Legal</MenuItem>
      <Button
        variant='outlined'
        onClick={handleLogout}
        className={classes.button}
      >
      LOGOUT
      </Button>
    </Box>
    </SwipeableDrawer>
  );
};

export default React.memo(LeftDrawer);