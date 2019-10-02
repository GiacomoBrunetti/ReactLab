import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FixedSizeList as List } from 'react-window';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
  item: {
    backgroundColor: 'inherit',
    color: theme.palette.primary.contrastText
  },
  itemSelected: {
    backgroundColor: 'inherit',
    color: theme.palette.primary.light,
  }
}))

const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC'
]

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

function MonthPicker() {

  const classes = useStyles();
  const [width, setWidth] = React.useState(window.innerWidth)
  const [selectedIndex, setSelectedIndex] = React.useState(new Date().getMonth())

  const handleClick = index => {
    setSelectedIndex(index);
  };

  const Item = ({ data, index, style }) => (
    <Button
      className={selectedIndex === index ? classes.selectedItem : classes.item}
      style={style}
      onClick={() => handleClick(index)}
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
    scrollTo(selectedIndex);
  }, [list, selectedIndex]);


  return (
    <List
      height={75}
      itemData={months}
      itemCount={12}
      itemSize={100}
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