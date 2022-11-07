import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";

const CourseBundled = () => {
  const [part1, setPart1] = useState(null);
  const [part2, setPart2] = useState(null);
  const [part3, setPart3] = useState(null);
  const { documents } = useCollection("dinhket");

  useEffect(() => {
    if (documents) {
      console.log(documents);
      setPart1(
        documents
          .sort((a, b) => a.id - b.id)
          .filter((lecture) => lecture.part == 1)
      );
      setPart2(
        documents
          .sort((a, b) => a.id - b.id)
          .filter((lecture) => lecture.part == 2)
      );
      setPart3(
        documents
          .sort((a, b) => a.id - b.id)
          .filter((lecture) => lecture.part == 3)
      );
    }
  }, [documents]);

  return (
    <div className=" overflow-y-scroll h-[70vh]  ">
      <div className="  border-l-0 border-r-0 rounded-none bg-light2  ">
        <h2 className=" mb-0">
          <button
            className="
      
      flex
      items-center
      w-full
      py-4
      font-600
      px-5
      text-base text-dark2 text-left
      bg-light
      border-0"
          >
            I - GIỚI THIỆU CHUNG
          </button>
        </h2>
        <div>
          <div className="s py-4 px-5">
            {part1 &&
              part1.map((item) => (
                <Link
                  key={item.id}
                  to={`/courses/learning/${item.id}`}
                  className="bg-slate-100
                  flex focus:bg-sky-300 items-center my-2 p-3"
                >
                  <MdOutlineOndemandVideo className=" mr-1" />
                  <p className="">{item.title}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="  border-l-0 border-r-0 rounded-none bg-light2  ">
        <h2 className=" mb-0">
          <button
            className="
      
      flex
      items-center
      w-full
      py-4
      font-600
      px-5
      text-base text-dark2 text-left
      bg-light
      border-0"
          >
            II - KỸ THUẬT
          </button>
        </h2>
        <div>
          <div className=" py-4 px-5">
            {part2 &&
              part2.map((item, index) => (
                <Link
                  key={item.id}
                  to={`/courses/learning/${item.id}`}
                  className="bg-slate-100
                  flex focus:bg-sky-300 items-center my-2 p-3"
                >
                  <MdOutlineOndemandVideo className=" mr-1" />
                  <p className="">
                    Bài {item.param}: {item.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="  border-l-0 border-r-0 rounded-none bg-light2  ">
        <h2 className=" mb-0">
          <button
            className="
      
      flex
      items-center
      w-full
      py-4
      font-600
      px-5
      text-base text-dark2 text-left
      bg-light
      border-0"
          >
            III - SẢN PHẨM HOÀN THIỆN (CƠ BẢN)
          </button>
        </h2>
        <div>
          <div className=" py-4 px-5">
            {part3 &&
              part3.map((item, index) => (
                <Link
                  key={item.id}
                  to={`/courses/learning/${item.id}`}
                  className="bg-slate-100
                  flex focus:bg-sky-300 items-center my-2 p-3"
                >
                  <MdOutlineOndemandVideo className=" mr-1" />
                  <p className="">
                    Bài {item.param}: {item.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBundled;
