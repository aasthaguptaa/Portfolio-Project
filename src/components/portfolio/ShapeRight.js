import React from "react";
import "./ShapeRight.scss";

const ShapeLeft = (props) => {
  return (
    <>
    <div className="right_container">
      <div className="shape_right">{props.name}</div>
      </div>
    </>
  );
};

export default ShapeLeft;
