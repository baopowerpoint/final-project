import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMotion } from "../motion/useMotion";
import LazyLoad from "react-lazy-load";
import _ from "lodash";

function Pagination({
  items,
  priceLevel,
  itemsCount,
  onPageChange,
  currentPage,
}) {
  const pageSize = 20;
  const { imageMotion } = useMotion();
  const pagesCount = itemsCount / pageSize;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const products = _.slice(items, startIndex, endIndex);
  const offset = (currentPage - 1) * pageSize;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5">
        {items &&
          products.map((post, idx) => (
            <Link
              key={post.id}
              to={`/products/${post.category}/${priceLevel}/${post.id}`}
              className=""
            >
              <motion.div
                variants={imageMotion((idx + 12) * 0.1, 0.5, "linear")}
                initial="hidden"
                animate="visible"
                className="w-full h-full shadow-sm max-w-[200px]"
              >
                <LazyLoad offsetBottom={200}>
                  <img
                    src={post.imgUrls[0]}
                    alt=""
                    className="w-full h-[170px] object-cover "
                  />
                </LazyLoad>

                {/* <MyImage height={200} width={200} src={post.imgUrls[0]} /> */}
                <div className="text-left my-5 mx-1">
                  <p className="text-body2 font-600">{post.title}</p>
                  <p className="font-500 text-body2 text-red">
                    {post.wholeSale &&
                      post.wholeSale
                        .substring(0, post.wholeSale.indexOf("-"))
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VNĐ -"}{" "}
                    {post.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    VNĐ
                    {`${post.isSet ? "/ 1 set" : "/ SP"}`}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
      </div>
      <div className="flex flex-col mt-10 items-center">
        <span className="text-body text-gray-700 dark:text-gray-400">
          Đang xem <span className="font-600 text-dark1 ">{offset + 1}</span>{" "}
          đến{" "}
          <span className="font-600 text-dark1 ">
            {items.length - offset < pageSize
              ? items.length
              : offset + pageSize}
          </span>{" "}
          của <span className="font-600 text-dark1 ">{items.length}</span> Sản
          phẩm
        </span>

        <div className="inline-flex disabled:text-dark mt-2 xs:mt-0">
          <button
            disabled={currentPage == 1}
            onClick={() => {
              onPageChange(currentPage - 1);
            }}
            className="py-2 px-4 text-sm font-700 text-light bg-dark rounded-l "
          >
            Trang trước
          </button>
          <button
            onClick={() => {
              onPageChange(currentPage + 1);
            }}
            disabled={items.length - offset < pageSize}
            className="py-2 px-4 text-sm font-700 text-light bg-dark rounded-r border-0 border-l border-dark "
          >
            Trang sau
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
