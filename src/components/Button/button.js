import React from "react";
import "./button.css";

export default function button({label}) {
  return (
    <div className="sample">
      
      <div data-testid="button" className="sampleButton"> {label} </div>
    </div>
  );
}
button.defaultProps = {
    label:'this is a button'
}