import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { useMotion } from "../motion/useMotion";
import { motion } from "framer-motion";
import Loading from "../components/Loading";
import { useAuthContext } from "../hooks/useAuthContext";
import { useParams } from "react-router-dom";

function Collection() {
  const { documents: post, error, isPending } = useCollection("posts");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const { imageMotion } = useMotion();
  const { user } = useAuthContext();
  const { name } = useParams();
  useEffect(() => {
    if (post) {
      if (!name) {
        setFilteredProducts(post);
      } else if (name === "dinhket") {
        setFilteredProducts(post.filter((val) => val.category === name));
      } else if (name === "hoavai") {
        setFilteredProducts(post.filter((val) => val.category === name));
      } else if (name === "huyhieu") {
        setFilteredProducts(post.filter((val) => val.category === name));
      } else if (name === "doda") {
        setFilteredProducts(post.filter((val) => val.category === name));
      }
    }
    console.log(name);
  }, [name, post]);
  return (
    <div className="mx-5">
      <div className="max-w-[800px] mx-auto text-center md:flex justify-between mt-10">
        <div className="category  h-fit">
          <p className="text-headline6 font-500 ">Danh mục</p>
          <ul className="mt-5 flex gap-4 md:flex-col justify-center sticky top-0 left-0">
            <li>
              <Link
                to="/products"
                className="text-body2 focus:underline  decoration-1 font-300"
              >
                Tất cả
              </Link>
            </li>
            <li>
              <Link
                to="/products/dinhket"
                className="text-body2 focus:underline  decoration-1 font-300"
              >
                Đính kết
              </Link>
            </li>
            <li>
              <Link
                to="/products/hoavai"
                className="text-body2 focus:underline decoration-1 font-300"
              >
                Hoa vải
              </Link>
            </li>
            <li>
              <Link
                to="/products/huyhieu"
                className="text-body2 focus:underline decoration-1 font-300"
              >
                Huy hiệu
              </Link>
            </li>
            <li>
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
          {filteredProducts && (
            <div className="flex justify-center items-center">
              <p className="text-caption font-300 my-5">
                Hiển thị {filteredProducts.length} kết quả
              </p>
            </div>
          )}
          {isPending && <Loading />}
          <div className="grid grid-cols-3  gap-5">
            {filteredProducts &&
              user &&
              user.email == "baopowerpoint@gmail.com" &&
              filteredProducts.map((post, idx) => (
                <Link
                  key={post.id}
                  to={`/products/${post.category}/${post.id}`}
                  className=""
                >
                  <motion.div
                    variants={imageMotion((idx + 12) * 0.1, 0.5, "linear")}
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full shadow-sm"
                  >
                    <img
                      src={post.imgUrls[0]}
                      alt=""
                      className="w-[200px] h-[200px] object-cover "
                    />
                    {/* <MyImage height={200} width={200} src={post.imgUrls[0]} /> */}
                    <div className="text-center m-5">
                      <p className="text-body2">{post.title}</p>
                      <p className="font-500 text-body1 ">{post.price}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
          <p className="mt-5 text-headline5">
            Đang trong quá trình hoàn thiện danh sách sản phẩm
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
