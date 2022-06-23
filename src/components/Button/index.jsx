import React from "react";

import "./style.css";

export default function Button({ type, onClick, children }) {
  return (
    <button onClick={onClick} className="button" type={type}>
      {children}
    </button>
  );
}
