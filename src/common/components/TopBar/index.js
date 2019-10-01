import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import LeftArrowIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    top: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  drawer: {
    backgroundColor: 'black',
  },
  drawerItem: {
    maxWidth: '300px',
    width: '80vw'
  }
}));

function PrimarySearchAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <SwipeableDrawer
      id={menuId}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      className={classes.drawer}
    >
    <AppBar position="static">
      <Toolbar >
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={handleClose}
        >
          <LeftArrowIcon />
        </IconButton>
        <Typography >
        Giacomo Brunetti
        </Typography>
      </Toolbar>
    </AppBar>
    <MenuItem className={classes.drawerItem}>Profile</MenuItem>
    <MenuItem >My account</MenuItem>
    </SwipeableDrawer>
  );

  const renderTopBar = (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>
        <div>
          <InputBase
            placeholder="Search Natoora"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchIcon />
          <div className={classes.searchIcon}>
          </div>
        </div>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  )

  return (
    <div className={classes.grow}>
      {renderTopBar}
      {renderMenu}
    </div>
  );
}


export default React.memo(PrimarySearchAppBar);