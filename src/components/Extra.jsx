import React from "react";
import Card from "./Card";

function Extra(props) {
  return (
    <Card name={props.name} description={props.description} img={props.img} />
  );
}

export default Extra;
