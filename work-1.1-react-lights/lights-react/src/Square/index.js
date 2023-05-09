import React, { useState } from "react";

export default function Square({ color }) {
  const [currentColor, setCurrentColor] = useState("white");

  function onClick() {
    if (currentColor === "white") {
      setCurrentColor(color)
    } else {
      setCurrentColor("white")
    }
  }

  return (
    <div className="square"
      style={{ background: currentColor }}
      onClick={onClick}
    >
      
    </div>
  )
};