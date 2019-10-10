import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/SearchRounded';
import CloseIcon from '@material-ui/icons/CloseRounded';
import LeftDrawer from '../../components/Drawer';

const useStyles = makeStyles(theme => ({
  grow: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    position: 'fixed'
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
  const [searchText, setSearchText] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearching = event => {
    const search = event.target.value;
    setSearchText(search);
  };

  const productSearch = () => {
    if (searchText.length > 2) {
      console.log('[SEARCHING...]', searchText)
    }
  }

  const clearSearch = () => setSearchText('');

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
            endAdornment={!searchText ? <SearchIcon className={classes.searchIcon}/> : <CloseIcon onClick={clearSearch}/>}
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