import React from 'react';
import {useDrag} from "react-dnd";

function Ingredients({ url, id, type, price, ingredient_type, builderId }) {
  // console.log("pricee  "+price)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id, type: type, price: price, ingredient_type , builderId},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={url}
      width="100%"
      style={{ border: isDragging ? "5px solid green" : "0px" }}
    />
  );
}

export default Ingredients;