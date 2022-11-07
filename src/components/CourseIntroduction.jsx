import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMotion } from "../motion/useMotion";
const CourseIntroduction = () => {
  const { textMotion } = useMotion();
  return (
    <motion.div
      variants={textMotion(2.3, 1.5, "linear")}
      initial="hidden"
      animate="visible"
      className="mt-5"
    >
      <p className="text-center uppercase text-headline4 mt-10 my-5">
        Khoá học
      </p>
      <p className="text-center  text-body2 my-5">
        Tham gia khoá học thiết kế, tạo ra những sản phẩm đính kết
      </p>
      <Link to="course">
        <button className="bg-dark text-btn text-light font-400 px-5 py-1 rounded-sm block mx-auto my-5">
          Tìm hiểu thêm
        </button>
      </Link>
    </motion.div>
  );
};

export default CourseIntroduction;
