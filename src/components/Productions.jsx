import React, { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import PageLoading from "./PageLoading";
import { motion } from "framer-motion";
import { useMotion } from "../motion/useMotion";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Productions = () => {
  const { documents } = useCollection("posts");
  const [filteredProductions, setFilteredProductions] = useState(null);
  const [category, setCategory] = useState("");
  const { textMotion, imageMotion } = useMotion();
  const { user } = useAuthContext();

  useEffect(() => {
    if (documents) {
      if (category == "") {
        setFilteredProductions(documents);
      }
      if (category == "hoavai") {
        setFilteredProductions(
          documents.filter((val) => val.category === "hoavai")
        );
      }
      if (category == "dinhket") {
        setFilteredProductions(
          documents.filter((val) => val.category === "dinhket")
        );
      }
      if (category == "doda") {
        setFilteredProductions(
          documents.filter((val) => val.category === "doda")
        );
      }
      if (category == "huyhieu") {
        setFilteredProductions(
          documents.filter((val) => val.category === "huyhieu")
        );
      }
      if (category == "resindohat") {
        setFilteredProductions(
          documents.filter((val) => val.category === "resindohat")
        );
      }
    }
  }, [category, documents]);

  return (
    <div>
      <motion.p
        variants={textMotion(1.1, 2, "linear")}
        initial="hidden"
        animate="visible"
        className="text-center uppercase text-headline4 mt-5 my-5"
      >
        Sản phẩm
      </motion.p>
      <motion.div
        variants={textMotion(1.3, 2, "linear")}
        initial="hidden"
        animate="visible"
        className="flex justify-center gap-5 my-5"
      >
        <div className="mb-3 w-2/3">
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="">Các sản phẩm nổi bật</option>
            <option value="dinhket">Đính kết</option>
            <option value="hoavai">Hoa vải</option>
            <option value="doda">Đồ da</option>
            <option value="huyhieu">Huy hiệu</option>
            <option value="resindohat">Resin, đổ hạt</option>
          </select>
        </div>
      </motion.div>
      {!filteredProductions && <PageLoading />}
      <div className="grid grid-cols-3 justify-between gap-5">
        {filteredProductions &&
          user &&
          user.email == "baopowerpoint@gmail.com" &&
          filteredProductions.slice(0, 9).map((document, idx) => (
            <motion.div
              variants={imageMotion((idx + 12) * 0.1, 0.5, "linear")}
              initial="hidden"
              animate="visible"
              key={document.id}
              className="w-fit h-fit shadow-sm"
            >
              <img
                src={document.imgUrls[0]}
                alt=""
                className="w-[200px] h-[200px] object-cover "
              />
              <div className="text-center m-5">
                <p className="text-body2">{document.title}</p>
                <p className="font-500 text-body1 ">{document.price}</p>
              </div>
            </motion.div>
          ))}
      </div>
      <Link to="products">
        <motion.button
          variants={textMotion(2.1, 2, "linear")}
          initial="hidden"
          animate="visible"
          to="products"
          className="bg-dark text-light font-400 px-5 py-1 rounded-sm block mx-auto my-5"
        >
          Xem Tất Cả
        </motion.button>
      </Link>
      <motion.p
        variants={textMotion(1.1, 2, "linear")}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        Đang trong giai đoạn hoàn thiện danh sách sản phẩm
      </motion.p>
    </div>
  );
};

export default Productions;
