import React from "react";

const Loading = () => {
  return (
    <div
      className="spinner-border animate-spin inline-block w-5 h-5 border-2 rounded-full"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
