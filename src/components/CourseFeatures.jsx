import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const CourseFeatures = () => {
  return (
    <div className="text-center border-[1px] mt-10 border-med pb-10 rounded-lg font-bold">
      <h1 className=" mt-5 text-headline5 font-600 w-1/2 mx-auto">Ưu điểm</h1>
      <div className="mx-10 mt-5 ">
        <ul className="flex justify-center flex-col">
          <li className="mt-3">
            <div className="flex items-center gap-4">
              <BsPatchCheckFill className="text-body items-center text-dark-nd inline-block " />
              <p className="text-body font-normal">56 video bài giảng</p>
            </div>
          </li>

          <li className="mt-3">
            <div className="flex items-center gap-4">
              <BsPatchCheckFill className="text-body items-center text-dark-nd inline-block " />
              <p className="text-body font-normal">Học ở mọi lúc, mọi nơi</p>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex items-center gap-4">
              <BsPatchCheckFill className="text-body items-center text-dark-nd inline-block " />
              <p className="text-body font-normal">
                Giảng viên tận tình, chu đáo
              </p>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex items-center gap-4">
              <BsPatchCheckFill className="text-body items-center text-dark-nd inline-block " />
              <p className="text-body font-normal">
                Bài giảng dễ hiểu, mạch lạc
              </p>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex items-center  gap-4">
              <BsPatchCheckFill className="text-body shrink-0  items-center text-dark-nd inline-block " />
              <p className="text-body text-left font-normal">
                Được cấp chứng chỉ
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseFeatures;
