import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { useMotion } from "../motion/useMotion";
import { motion } from "framer-motion";
function Collection() {
  const { documents: post } = useCollection("posts");
  const [category, setCategory] = useState("");
  const { imageMotion } = useMotion();
  return (
    <div className="mx-5">
      <div className="max-w-[800px] mx-auto text-center md:flex justify-between mt-10">
        <div className="category  h-fit">
          <p className="text-headline6 font-500 ">Danh mục</p>
          <ul className="mt-5 flex gap-4 md:flex-col justify-center sticky top-0 left-0">
            <li className>
              <Link
                to="/products/dinhket"
                className="text-body2 focus:underline  decoration-1 font-300"
              >
                Đính kết
              </Link>
            </li>
            <li className>
              <Link
                to="/products/hoavai"
                className="text-body2 focus:underline decoration-1 font-300"
              >
                Hoa vải
              </Link>
            </li>
            <li className>
              <Link
                to="/products/huyhieu"
                className="text-body2 focus:underline decoration-1 font-300"
              >
                Huy hiệu
              </Link>
            </li>
            <li className>
              <Link
                to="/products/doda"
                className="text-body2 focus:underline decoration-1 font-300"
              >
                Đồ da
              </Link>
            </li>
          </ul>
        </div>
        <div className="basis-10/12">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/minh-hien-web.appspot.com/o/production%20Collection%2Flogin%20background.jpg?alt=media&token=42df3223-029a-4c9d-8887-ab1086c21c7d"
            className="w-full h-[200px] object-cover object-top"
            alt=""
          />
          <div className="flex justify-center items-center">
            <p className="text-caption font-300 my-5">Hiển thị 11/11 kết quả</p>
          </div>
          <div className="grid grid-cols-3  gap-5">
            {post &&
              post.map((post, idx) => (
                <motion.div
                  variants={imageMotion((idx + 12) * 0.1, 0.5, "linear")}
                  initial="hidden"
                  animate="visible"
                  key={post.id}
                  className="w-fit h-fit shadow-sm"
                >
                  <img src={post.imgUrl} alt="" className="w-full h-full " />
                  <div className="text-center m-5">
                    <p className="text-body2">{post.title}</p>
                    <p className="font-500 text-body1 ">{post.price}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
