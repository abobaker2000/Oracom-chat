import React from "react";

export function Loader() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <span className="loading loading-ring w-16"></span>
    </div>
  );
}
