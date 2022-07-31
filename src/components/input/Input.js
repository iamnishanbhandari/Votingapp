import React from "react";

export default function Input({
  width,
  startIcon,
  endIcon,
  restStyles,
  props,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fefefe",
        height: 50,
        width,
        borderRadius: 16,
        boxShadow: "0 0 15px -5px #bbb",
        border: "1px solid #ddd",
        padding: "0 20px",
        ...restStyles,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {startIcon}
        <input
          style={{
            margin: "0 8px",
            borderRadius: 0,
            padding: 0,
            maxHeight: "fit-content !important",
            minWidth: 300,
            maxWidth: "fit-content",
            backgroundColor: "transparent",
          }}
          {...props}
        />
      </div>
      {endIcon}
    </div>
  );
}
