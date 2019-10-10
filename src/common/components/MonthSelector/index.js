import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FixedSizeList as List } from 'react-window';
import zIndex from '@material-ui/core/styles/zIndex';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    paddingTop: '70px',
    position: 'fixed !important',
    zIndex: '99'
  },
  item: {
    backgroundColor: 'inherit',
    color: theme.palette.secondary.light
  },
  itemSelected: {
    backgroundColor: 'inherit',
    color: theme.palette.primary.light,
  },
}))

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

function MonthPicker(props) {
  const { months, selectedMonth, onMonthSelect } = props;
  const classes = useStyles();
  const [width, setWidth] = React.useState(window.innerWidth)
  // const [selectedIndex, setSelectedIndex] = React.useState(new Date().getMonth())

  const Item = ({ data, index, style }) => (
    <Button
      className={selectedMonth === index ? classes.itemSelected : classes.item}
      style={style}
      onClick={() => onMonthSelect(index)}
    >
      {data[index]}
    </Button>
  );

  React.useLayoutEffect(() => {
    function handleResize() {
      return setWidth(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const list = React.createRef();

  React.useEffect(() => {
    function scrollTo(index) {
      list.current.scrollToItem(index, 'center')
    }
    scrollTo(selectedMonth);
  }, [list, selectedMonth]);


  return (
    <List
      itemData={months}
      itemCount={12}
      itemSize={width/3}
      layout="horizontal"
      width={width}
      className={classes.root}
      ref={list}
    >
      {Item}
    </List>
  );
};

export default React.memo(MonthPicker);