import React from "react";
const PageLoading = () => {
  return (
    <div className="flex justify-center my-3 items-center">
      <div
        className="spinner-border text-blue animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default PageLoading;
