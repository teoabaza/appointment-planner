import React from "react";

export const Tile = (props) => {

  const objValues = Object.values(props.obj);

  return (
    <div className="tile-container">
      {objValues.map( (item, itemIndex) => (<p key={itemIndex}>{item}</p>))}
    <hr/>
    </div>
  )
};
