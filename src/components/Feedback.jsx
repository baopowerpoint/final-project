import React from "react";
import { motion } from "framer-motion";
import { useMotion } from "../motion/useMotion";
const Feedback = () => {
  const { textMotion } = useMotion();
  return (
    <motion.div
      variants={textMotion(2.5, 2, "linear")}
      initial="hidden"
      animate="visible"
      className="mt-20"
    >
      <p className="text-headline4 font-600 text-center">Feedback</p>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              Đây quả thực là một khoá học mà em tìm kiếm bấy lâu, giảng viên
              tận tâm, khoá học bài bản và được hướng dẫn một cách tỉ mỉ, kiên
              nhẫn.
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/profileImg%2F275756706_676288373722802_4686859432688388489_n.jpg?alt=media&token=04ee8f69-c5d6-4c76-aba8-1cf51f28fbe7"
                className="rounded-full w-24 h-24 object-cover shadow-lg"
                alt="smaple "
              />
            </div>
            <p className="text-gray-500">- Hà Thị Anh Thư</p>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              Khoá học đính kết này đã giúp em tạo ra được những sản phẩm cực kì
              đẹp mắt, không chỉ làm quà tặng cho người thân mà nó còn là nguồn
              thu nhập chính của em từ việc bán những sản phẩm đính kết.
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/profileImg%2F304194436_392836086262692_411104444805930599_n.jpg?alt=media&token=934b5617-6314-40e4-9b2e-3f662a42064f"
                className="rounded-full w-24 h-24 object-cover shadow-lg"
                alt="smaple "
              />
            </div>
            <p className="text-gray-500">- Quỳnh Trang</p>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              Cảm ơn Minh Hien Accessories, mặc dù lần đầu tiên biết đến lĩnh
              vực này nhưng qua những bài giảng , em đã rèn được cho mình sự tỉ
              mỉ cũng như là tư duy về thiết kế.
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/profileImg%2F119968334_1569385663234304_3552084784259538720_n.jpg?alt=media&token=b5e3adde-98b9-499e-a59f-af7ef88f1090"
                className="rounded-full w-24 h-24 object-cover shadow-lg"
                alt="smaple "
              />
            </div>
            <p className="text-gray-500">- Hương Sen</p>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Feedback;
