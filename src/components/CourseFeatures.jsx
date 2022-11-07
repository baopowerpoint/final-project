import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useMotion } from "../motion/useMotion";

const CourseFeatures = () => {
  const { textMotion } = useMotion();
  return (
    <motion.div
      variants={textMotion(0.9, 1.5, "linear")}
      initial="hidden"
      animate="visible"
      className="text-center border-[1px] mt-10 border-med pb-10 rounded-lg font-bold"
    >
      <h1 className=" mt-5 text-headline5 font-600 w-1/2 mx-auto">
        Thông tin lớp Đính Kết Online
      </h1>
      <div className="mx-10 mt-5 ">
        <ul className="flex justify-center flex-col">
          <li className="mt-3">
            <div className="flex items-center gap-4">
              <p className="text-body font-700">Hình thức học:</p>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex items-center gap-4 ">
              <BsPatchCheckFill className="text-body flex-none items-center text-dark-nd inline-block " />
              <p className="text-body text-left font-normal">
                Học qua videos bài giảng quay sẵn
              </p>
            </div>
          </li>

          <li className="mt-3">
            <div className="flex items-center gap-4">
              <BsPatchCheckFill className="text-body flex-none items-center text-dark-nd inline-block " />
              <p className="text-body text-left font-normal">
                Linh động thời gian học
              </p>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex  items-center gap-4">
              <BsPatchCheckFill className="text-body flex-none items-center text-dark-nd inline-block " />
              <p className="text-body text-left font-normal">
                Videos bài giảng luôn có sẵn để xem
              </p>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex items-center gap-4">
              <BsPatchCheckFill className="text-body flex-none items-center text-dark-nd inline-block " />
              <p className="text-body text-left font-normal">
                Thoải mái hỏi bài khi chưa thật sự hiểu
              </p>
            </div>
          </li>
        </ul>
        <ul className="flex justify-center flex-col">
          <li className="mt-3 ">
            <div className="flex items-center gap-4">
              <p className="text-body font-700">Nội dung được học:</p>
            </div>
          </li>
          <li className="mt-3 ">
            <div className="flex items-center gap-4">
              <BsPatchCheckFill className="text-body flex-none items-center text-dark-nd inline-block " />
              <p className="text-body font-600 text-left">
                50 videos bài giảng gồm :
              </p>
            </div>
          </li>

          <li className="mt-3">
            <div className="flex items-center gap-4">
              <p className="text-body text-left font-normal">
                - 17 bài kỹ thuật cơ bản -{">"} nâng cao
              </p>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex items-center gap-4">
              <p className="text-body text-left font-normal">
                - 33 bài hướng dẫn thực hành sản phẩm hoàn thiện
              </p>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex items-center gap-4">
              <BsPatchCheckFill className="text-body flex-none items-center text-dark-nd inline-block " />
              <p className="text-body text-left font-normal">
                Hiểu về màu sắc, các nguyên liệu phối màu trên sản phẩm
              </p>
            </div>
          </li>
          <li className="mt-3">
            <div className="flex items-center  gap-4">
              <BsPatchCheckFill className="text-body shrink-0  items-center text-dark-nd inline-block " />
              <p className="text-body text-left font-normal">
                Học được các mẹo khi không biết vẽ vẫn có thể tạo hình
              </p>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CourseFeatures;
