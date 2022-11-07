import React from "react";
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="bg-blue text-caption font-400 my-3 transition-all duration-200 ease-linear text-light text-center p-0.5 leading-none rounded-l-full"
        style={{ width: `${progress}%` }}
      >
        {progress}
      </div>
    </div>
  );
};

export default ProgressBar;
