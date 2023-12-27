import * as React from 'react';
import { Masonry } from "masonic";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filesActions, filesSelector } from '../store/filesSlice'
import genItems from '../api/genItems';

function Item({
  data: { height, color, id }
}) {
  return (
    <NavLink to={`/${id}`} style={{
      height: height > 100 ? height : 100,
      background: color,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      color: 'white'
    }}>{id}</NavLink>
  )
}

function List() {
  const files = useSelector(filesSelector)

  const dispatch = useDispatch()

  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch(filesActions.filesAdded(genItems()))
    }, 2000)

    return () => clearInterval(interval);
  }, [dispatch])

  return <div style={{
    margin: '8px 50px'
  }}>
    <Masonry columnCount={4} columnGutter={15} items={files} render={Item} />
  </div>;
}

export default List;
