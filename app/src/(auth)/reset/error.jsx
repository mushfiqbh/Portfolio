"use client";
import React from "react";

const ErrorBoundary = ({ error, reset }) => {
  return (
    <div>
      {error.message}
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
// error file not work with layout.js so move this to parent of layout