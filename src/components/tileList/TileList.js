import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {

  return (
    <div className="TileList">
      {props.data.map((obj, objIndex) => (
        <Tile key={objIndex} obj={obj}/>
      ))}
    </div>
  );
};
