import React from "react";
import { motion } from "framer-motion";
import { useMotion } from "../motion/useMotion";
const CourseHeader = ({ isPurchased }) => {
  const { textMotion } = useMotion();
  return (
    <motion.div
      variants={textMotion(0.5, 1.5, "linear")}
      initial="hidden"
      animate="visible"
      className="p-12 h-[400px] text-center relative overflow-hidden bg-no-repeat bg-hero-pattern bg-cover rounded-lg"
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-light">
            <h2 className="font-600 uppercase text-4xl mb-4">
              Khoá học đính kết của MINH HIEN ACCESSORIES
            </h2>
            <h4 className="font-semibold text-xl mb-6">
              Khởi nghiệp thật dễ dàng!
            </h4>
            {!isPurchased && (
              <a
                className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Báo giá
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseHeader;
