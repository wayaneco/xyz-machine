import React from "react";

import "./style.css";

export default function InputFIeld({
  label,
  value,
  onChange,
  id,
  placeholder,
  error,
  clearError,
}) {
  return (
    <div className="form-field">
      <label className="title" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          clearError(id);
          onChange((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
          }));
        }}
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
}
