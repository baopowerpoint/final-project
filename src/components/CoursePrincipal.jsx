import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useMotion } from "../motion/useMotion";

const CoursePrincipal = () => {
  const { textMotion } = useMotion();
  return (
    <motion.div
      variants={textMotion(0.9, 1.5, "linear")}
      initial="hidden"
      animate="visible"
      className="text-center border-[1px] mt-10 border-med pb-10 rounded-lg font-bold"
    >
      <h1 className=" mt-5 text-headline5 font-600 w-1/2 mx-auto">
        QUY ĐỊNH CHUNG
      </h1>
      <div className="mx-10 mt-5 ">
        <p className="text-left">
          - HV phải trả bài ít nhất 50 sản phẩm/năm (tối thiểu trung bình
          1-2sp/tuần), trong đó phải có ít nhất 20 sản phẩm đạt đủ tiêu chuẩn
          chất lượng về kỹ thuật và màu sắc. (sau 1 năm HV nào không đạt đủ số
          lượng tối thiểu ở trên sẽ bị out ra khỏi lớp hoặc phải nộp học phí 50%
          để duy trì việc tiếp tục ở lại lớp cho năm kế tiếp).
        </p>
        <p className="text-left">
          - Học viên trả bài qua zalo{" "}
          <span className="font-600">0964608302</span>
        </p>
        <p className="text-left">
          - Chụp ảnh trả bài/hỏi bài : chụp trực diện, góc nghiêng, mặt sau,
          điểm nhấn (nếu có).
        </p>
        <p className="text-left">
          - <span className="text-red font-600">KHÔNG</span> học bỏ bài (nhảy
          cóc) Phần kỹ thuật => sẽ không hiểu được videos hướng dẫn sản phẩm
          hoàn thiện.
        </p>
        <p className="text-left">
          - HV mới hoặc HV học yếu hơn sẽ phải liên tục hỏi bài cho đến khi
          thành thạo.
        </p>
      </div>
    </motion.div>
  );
};

export default CoursePrincipal;
