import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMotion } from "../motion/useMotion";
const CourseInfo = ({ isPurchased }) => {
  const { textMotion } = useMotion();
  return (
    <motion.div
      variants={textMotion(0.7, 1.5, "linear")}
      initial="hidden"
      animate="visible"
      className="text-center border-[1px] border-med rounded-lg mt-10"
    >
      <h1 className="text-headline4 font-bold text-center my-5">
        Khoá học Đính Kết Online
      </h1>
      <div className="flex items-center justify-center gap-5">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/profileImg%2F248681365_3000577810185113_6734203646219205847_n.jpg?alt=media&token=532db6b4-aa4a-40b0-90cd-f1e2412b4ed7"
          alt="instructor"
          className="w-20 h-20 rounded-full"
        />
        <div className="text-left my-5">
          <p className="text-light-rd">Giảng viên</p>
          <p className=" text-headline5">Bùi Thị Minh Hiền</p>
        </div>
      </div>
      <div className="flex mb-5 text-heading6 items-center justify-center gap-4">
        <MdAccessTimeFilled />
        <p> 2h30p</p>
      </div>
      {isPurchased && (
        <div>
          <div
            className=" rounded-lg bg-[#92e6a7] py-5 px-6 text-headline6 w-2/3 mx-auto text-[#1a7431] mb-3"
            role="alert"
          >
            Bạn đã thanh toán khoá học !
          </div>
          <Link to="/courses/learning/0">
            <button className="bg-blue px-5 py-1 my-5 rounded-lg text-heading6 text-light">
              Học ngay
            </button>
          </Link>
        </div>
      )}
      {!isPurchased && (
        <div>
          <div
            className=" rounded-lg bg-[#e63946] py-5 px-6 text-headline6 w-2/3 mx-auto text-[#ffa69e] mb-3"
            role="alert"
          >
            Bạn chưa thanh toán khoá học !
          </div>
          <Link to="/courses/contact-payment">
            <button className="bg-blue px-5 py-1 my-5 rounded-lg text-heading6 text-light">
              Liên hệ ngay
            </button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default CourseInfo;
