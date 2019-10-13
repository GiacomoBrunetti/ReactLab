import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/SearchRounded';
import CloseIcon from '@material-ui/icons/CloseRounded';
import LeftDrawer from '../../components/Drawer';

import { triggerSetKeywords, triggerClearSearch } from '../../redux/actions/search';

const useStyles = makeStyles(theme => ({
  grow: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    // position: 'fixed'
  },
  searchNatoora: {
    width: '100%'
  },
  searchIcon: {
    opacity: '.5'
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
  const search = useSelector(state => state.searchReducer.keywords);

  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearching = event => {
    const value = event.target.value;
    dispatch(triggerSetKeywords(value));
  };

  const clearSearch = () => dispatch(triggerClearSearch());

  const renderTopBar = (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.topBar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.searchNatoora}>
          <InputBase
            fullWidth
            placeholder="Search Natoora"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearching}
            value={search}
            endAdornment={!search ? <SearchIcon className={classes.searchIcon}/> : <CloseIcon onClick={clearSearch}/>}
          />
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
      <LeftDrawer open={open} handleOpen={handleOpen} handleClose={handleClose}/>
    </div>
  );
}


export default React.memo(PrimarySearchAppBar);