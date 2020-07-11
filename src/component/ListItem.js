import React from 'react';
import './ListItem.css';

const ListItem = ({label, id, active, ...rest}) => {
  return (
    <li id={id} className={"city" + (active ? " active" : "")}>
      <a href="#" {...rest}>{label}</a>
    </li>
  )
};

export default ListItem;
