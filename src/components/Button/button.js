import React from "react";
import "./button.css";

export default function button({label}) {
  return (
    <div className="sample">
      
      <div data-testid="button" className="sampleButton">testing snapshot {label} hii</div>
    </div>
  );
}
button.defaultProps = {
    label:'this is a button'
}