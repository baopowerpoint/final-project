import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineOndemandVideo } from "react-icons/md";

const CourseBundled = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item  border-l-0 border-r-0 rounded-none bg-light2  ">
        <h2 className="accordion-header mb-0" id="flush-headingOne">
          <button
            className="accordion-button
      relative
      flex
      items-center
      w-full
      py-4
      font-600
      px-5
      text-base text-dark2 text-left
      bg-light
      border-0
      rounded-none
      transition
      focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            I - GIỚI THIỆU NGUYÊN VẬT LIỆU
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse border-0 collapse show"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            <Link
              to={`/courses/1`}
              className="bg-slate-100
                  flex focus:bg-sky-300 items-center my-2 p-3"
            >
              <MdOutlineOndemandVideo className=" mr-1" />
              <p className="">Bài 1</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBundled;
